import { createApp } from 'vue';
import router from "./router.js";
import store from "./store/index.js";
import "./app.css";

import App from "./App.vue";
import BaseLayout from "./components/UI/BaseLayout.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import ProgressBar from "./components/UI/ProgressBar";


const app = createApp(App);

app.component('base-layout', BaseLayout);
app.component('base-button', BaseButton);
app.component('progress-bar', ProgressBar);


app.use(store);
app.use(router);

app.mount('#app');
