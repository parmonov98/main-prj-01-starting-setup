import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Coaches from "./pages/Coaches.vue";
import CoachDetails from "./pages/CoachDetails.vue";
import Requests from "./pages/Requests.vue";
import Contact from "./pages/Contact.vue";
import Register from "./pages/Register.vue";

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'coaches',
    path: '/coaches',
    component: Coaches,
    children: [
      {
        name: 'coach-item',
        path: ':coachID',
        component: CoachDetails,
        children: [
          {
            name: 'contact',
            path: '/contact',
            component: Contact,
          },
        ]
      },
    ]
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'requests',
    path: '/requests',
    component: Requests,
  },
  {
    path: '/:notFound(.*)',
    component: null
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;