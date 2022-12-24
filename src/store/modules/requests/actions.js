export default {
  async getRequests(context) {
    const token = context.rootGetters['auth/token'];
    const coachID = context.rootGetters['auth/userId'];
    console.log(coachID);
    const response = await fetch(`https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-requests/${coachID}.json?auth=` + token);


    if (!response.ok) {
      let resData = null;
      try {
        resData = await response.json();
      } catch (error) {
        context.commit('setItems', []);
      }
      if (resData.error) {
        return resData;
      } else {
        return true;
      }

    } else {
      const data = await response.json();
      const items = [];
      if (data) {
        Object.keys(data).map((key) => {
          const element = data[key];
          items.push({
            id: key, ...element
          })
        });
      }
      context.commit('setItems', items);
      return items;
    }
  },
  async addRequest(context, payload) {

    const token = context.rootGetters['auth/token'];

    const resData = await fetch(`https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-requests/${payload.coachID}.json?auth=` + token, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (resData.ok) {
      const data = await resData.json();
      return data;
    } else {
      console.error('Server error occured');
    }
    context.dispatch('getRequests');
    return false;
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