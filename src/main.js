import { createApp } from 'vue';
import router from "./router.js";
import store from "./store/index.js";
import "./app.css";

import App from "./App.vue";
import BaseLayout from "./components/UI/BaseLayout.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import ProgressBar from "./components/UI/ProgressBar";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BaseModal from "./components/UI/BaseModal.vue";
// const BaseModal = defineAsyncComponent(() => import("./components/UI/BaseModal.vue"));
// const ProgressBar = defineAsyncComponent(() => import("./components/UI/ProgressBar.vue"));
// const BaseSpinner = defineAsyncComponent(() => import("./components/UI/BaseSpinner.vue"));
import BaseLoadingPanel from "./components/UI/BaseLoadingPanel.vue";

const app = createApp(App);

app.component('base-layout', BaseLayout);
app.component('base-button', BaseButton);
app.component('progress-bar', ProgressBar);
app.component('base-spinner', BaseSpinner);
app.component('base-modal', BaseModal);
app.component('base-loading-panel', BaseLoadingPanel);


app.use(store);
app.use(router);

app.mount('#app');
