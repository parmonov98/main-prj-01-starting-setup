import { createStore } from "vuex";

import coachModule from "./modules/coach/index.js";
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index";

export default createStore({
  namespaced: true,
  modules: {
    auth: authModule,
    coach: coachModule,
    requests: requestsModule
  },
  state() {
    return {

    }
  }
});