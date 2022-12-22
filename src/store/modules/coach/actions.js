export default {
  async getCoaches({ commit }) {
    const resData = await fetch('https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-coaches.json');
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
  async addCoach(context, payload) {
    console.log(payload);
    const resData = await fetch('https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-coaches.json', {
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
    context.dispatch('getCoaches');
  },
  filterCoaches(context, payload) {
    const search = payload.search;
    const selected_tags = payload.tags;
    const field = payload.field;
    context.dispatch('getCoaches');

    const state = context.state;

    const filtered = state.items.filter(item => {
      let is_ok = true;
      console.log(search);
      console.log(item);
      if (search != '') {
        if (!item.first_name.includes(search) && !item.last_name.includes(search)) {
          is_ok = false;
        }
      }

      console.log(is_ok);

      if (field != '') {
        if (item.field !== field) {
          is_ok = false;
        }
      }

      console.log(is_ok);

      if (item.tags && item.tags.length > 0 && selected_tags && selected_tags.length > 0) {
        console.log(selected_tags, item.tags);
        const tag_names = item.tags.reduce((arr, subitem) => {
          arr.push(subitem.name);
          return arr;
        }, []);
        let is_sub_ok = false;
        const selected = [...selected_tags];
        tag_names.map(subitem => {
          if (selected.includes(subitem)) {
            is_sub_ok = true;
          }
        });
        if (is_sub_ok !== true) {
          is_ok = false;
        }
      }

      console.log(is_ok);

      return is_ok;
    });

    console.log(filtered);
    state.filtered = [...filtered];
  },
  getGoach({ commit, dispatch, state }, payload) {
    dispatch('getCoaches');
    const coach = state.items.find(item => item.id === payload);
    if (coach) {
      commit('setCoach', coach);
    }
    // context.state.coach = { ...coach };
  }
}