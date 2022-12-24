export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setIsAuth(state, payload) {
    state.isAuthed = payload;
  },
};