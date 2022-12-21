export default {
  namespaced: true,
  state() {
    return {
      items: [],
      filtered: null,
      availableTags: [],
      fields: []
    }
  },
  getters: {
    items(state) {
      return state.items;
    },
    filtered(state) {
      return state.filtered;
    },
    availableTags(state) {
      return state.availableTags;
    },
    fields(state) {
      return state.fields;
    }
  },
  actions: {
    async getCoaches(context) {
      const resData = await fetch('https://vuejs-df53b-default-rtdb.europe-west1.firebasedatabase.app/coach_finder-coaches.json');
      if (!resData.ok) {
        context.commit('setItems', []);
      } else {
        const data = await resData.json();
        const items = [];
        Object.keys(data).map((key) => {
          const element = data[key];
          items.push({
            id: key, ...element
          })
        });
        context.commit('setItems', items);
      }
    },
    async addCoach(context, payload) {
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
        if (search != '') {
          if (!item.first_name.includes(search) && !item.last_name.includes(search)) {
            is_ok = false;
          }
        }

        if (field != '') {
          if (item.field !== field) {
            is_ok = false;
          }
        }

        if (selected_tags.length > 0) {
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

        return is_ok;
      });

      state.filtered = [...filtered];
    }

  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload);
    },
    setItems(state, payload) {

      let availableTags = [];
      let fields = [];

      payload.map(item => {
        if (item.tags) {
          const tag_names = item.tags.reduce((arr, subitem) => {
            arr.push(subitem.name);
            return arr;
          }, []);

          availableTags = availableTags.concat(tag_names);
        }
        fields.push(item.field);
      });

      state.availableTags = availableTags.filter((value, index, self) => self.indexOf(value) === index);
      state.fields = fields.filter((value, index, self) => self.indexOf(value) === index)

      state.items = payload;
    }
  }
};  