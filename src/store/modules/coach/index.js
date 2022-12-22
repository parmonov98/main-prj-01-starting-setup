import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      filtered: null,
      availableTags: [],
      fields: [],
      coach: null
    }
  },
  getters,
  actions,
  mutations,
};  