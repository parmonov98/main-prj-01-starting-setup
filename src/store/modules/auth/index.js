import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      user: null,
      isAuthed: false
    }
  },
  getters,
  actions,
  mutations
};  