let timer;

export default {
  async signUp({ dispatch }, params) {

    const resData = await dispatch('auth', {
      ...params,
      mode: 'sign-up'
    })
    return resData;
  },

  async auth({ commit, dispatch }, payload) {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqQbWUrb3GEN9WwBlfQhdjmcq4Scn7uk0';
    if (payload.mode === 'sign-up') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqQbWUrb3GEN9WwBlfQhdjmcq4Scn7uk0';
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        returnSecureToken: true
      })
    });
    const resData = await response.json();
    const expiresIn = resData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);
    localStorage.setItem('tokenExpirationDate', expirationDate);

    timer = setTimeout(() => {
      dispatch('autoLogout');
    }, expiresIn);

    if (response.ok) {
      commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
      });
      commit('setIsAuth', true);
    }
    return resData;
  },

  tryLogin({ commit, dispatch }) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');

    const expiresIn = tokenExpirationDate - new Date().getTime();

    if (token && userId) {
      commit('setUser', { token: token, userId: userId });
      commit('setIsAuth', true);
    }

    if (expiresIn < 0) {
      dispatch('autoLogout');
      return;
    }

    timer = setTimeout(function () {
      dispatch('autoLogout');
    }, expiresIn);

  },

  clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpirationDate');
  },

  async signIn({ dispatch }, params) {
    const resData = await dispatch('auth', {
      ...params,
      mode: 'log-in'
    })
    return resData;
  },

  autoLogout({ dispatch }) {
    dispatch('logout')
  },

  logout({ dispatch, commit }) {
    clearTimeout(timer);
    dispatch('clearAuth');
    commit('setUser', {});
    commit('setIsAuth', false);
  }

}