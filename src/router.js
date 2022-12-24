import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

import Home from "./pages/Home.vue";
import Couches from "./pages/coaches/Coaches.vue";
import CoachDetails from "./pages/coaches/CoachDetails.vue";
import Requests from "./pages/requests/Requests.vue";
import CoachContact from "./pages/coaches/CoachContact.vue";
import CoachRegister from "./pages/coaches/CoachRegister.vue";
import NotFound from "./pages/NotFound.vue";
import SignUp from "./pages/auth/SignUp.vue";
import SignIn from "./pages/auth/SignIn.vue";


const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: SignUp
  },
  {
    name: 'sign-in',
    path: '/sign-in',
    component: SignIn,
    meta: { requiresUnAuth: true }
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
        component: CoachContact,
        props: true
      },
    ]
  },
  {
    name: 'couches-register',
    path: '/register/couches',
    component: CoachRegister,
    meta: { requiresAuth: true }
  },
  {
    name: 'requests',
    path: '/requests',
    component: Requests,
    meta: { requiresAuth: true }
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
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

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthed']) {
    next({ name: 'sign-in', query: { redirect: to.name } });
  } else if (to.meta.requiresUnAuth && store.getters['auth/isAuthed']) {
    next({ name: 'coaches' });
  } else {
    next();
  }
});

export default router;