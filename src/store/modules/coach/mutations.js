export default {
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
  },
  setCoach(state, payload) {
    state.coach = payload;
  }
};