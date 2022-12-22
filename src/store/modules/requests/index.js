import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      items: [
        {
          name: "Client name",
          title: "Message title",
          message: "description of what student wants",
          email: "student@coach.com",
        }
      ]
    }
  },
  getters,
  actions,
  mutations
};  