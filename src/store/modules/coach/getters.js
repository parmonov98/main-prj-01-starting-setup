export default {
  items(state) {
    return state.items;
  },
  filtered(state) {
    if (state.items.length > 0 && state.filtered != null) {
      return state.filtered;
    } else if (state.items.length > 0 && state.filtered === null) {
      return state.items;
    } else if (state.items.length === 0) {
      return state.items;
    }
    return state.filtered;
  },
  coaches(_, getters) {
    return getters.filtered;
  },
  hasCoaches(_, getters) {
    if (getters.filtered.length > 0) {
      return true;
    } else return false;
  },
  availableTags(state) {
    return state.availableTags;
  },
  fields(state) {
    return state.fields;
  },
  coach(state) {
    return state.coach;
  }
};