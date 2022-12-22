import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Couches from "./pages/Couches.vue";
import CoachDetails from "./pages/CoachDetails.vue";
import Requests from "./pages/Requests.vue";
import CouchContact from "./pages/CouchContact.vue";
import CouchRegister from "./pages/CouchRegister.vue";

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'coaches',
    path: '/coaches',
    component: Couches,
  },
  {
    name: 'coach-item',
    path: '/couches/:coachID',
    component: CoachDetails,
    props: true,
    children: [
      {
        name: 'coach-contact',
        path: 'contact',
        component: CouchContact,
        props: true
      },
    ]
  },
  {
    name: 'register',
    path: '/register',
    component: CouchRegister,
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
  routes: routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;