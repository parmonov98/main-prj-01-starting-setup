export default {
  async getRequests({ commit }) {
    const resData = await fetch('https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-requests.json');
    if (!resData.ok) {
      commit('setItems', []);
      return true;
    } else {
      const data = await resData.json();
      const items = [];
      Object.keys(data).map((key) => {
        const element = data[key];
        items.push({
          id: key, ...element
        })
      });
      commit('setItems', items);
      return true;
    }
  },
  async addRequest(context, payload) {
    console.log(payload);
    const resData = await fetch('https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-requests.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (resData.ok) {
      const data = await resData.json();
      console.log(data);
    } else {
      console.error('Server error occured');
    }
    context.dispatch('getRequests');
  },
  filterRequests(context, payload) {
    const search = payload;
    context.dispatch('getRequests');

    const state = context.state;

    const filtered = state.items.filter(item => {
      let is_ok = true;
      if (search != '') {
        if (!item.name.includes(search) && !item.title.includes(search)) {
          is_ok = false;
        }
      }

      return is_ok;
    });

    console.log(filtered);
    state.filtered = [...filtered];
  },

}