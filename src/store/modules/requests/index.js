export default {
  namespaced: true,
  state() {
    return {
      items: [
        {
          student: "Client name",
          subject: "Message title",
          description: "description of what student wants",
          email: "student@coach.com",
        }
      ]
    }
  },
  getters: {
    items(state) {
      console.log(state);
      return state.items;
    }
  }
};  