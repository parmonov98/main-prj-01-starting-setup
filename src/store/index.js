import { createStore } from "vuex";

import coachModule from "./modules/coach/index.js";
import requestsModule from "./modules/requests/index.js";

export default createStore({
  modules: {
    coach: coachModule,
    requests: requestsModule
  },
  state() {
    return {

    }
  }
});