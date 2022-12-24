export default {
  user(state) {
    return state.user;
  },
  isAuthed(state) {
    return state.isAuthed;
  },
  token(state) {
    return state.user?.token;
  },
  userId(state) {
    return state.user.userId;
  }
};