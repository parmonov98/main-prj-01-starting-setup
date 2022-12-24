export default {
  items(state) {
    return state.items;
  },
  filtered(state) {
    if (state.items.length > 0 && state.filtered != null) {
      return state.filtered;
    } else if (state.items.length > 0 && (state.filtered == null || state.filtered == undefined)) {
      return state.items;
    } else if (state.items.length === 0) {
      return state.items;
    }
    return state.filtered;
  },
  requests(_, getters) {
    return getters.filtered;
  },
  hasRequests(_, getters) {
    console.log(getters.filtered);
    if (getters.filtered.length > 0) {
      return true;
    } else return false;
  },
};