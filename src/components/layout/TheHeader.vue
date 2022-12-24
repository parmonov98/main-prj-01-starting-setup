<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-white text-decoration-none
          "
        >
          <i style="font-size: 2rem" class="bi bi-bootstrap"></i>
        </a>

        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li>
            <router-link class="nav-link px-2" :to="{ name: 'home' }">
              Home
            </router-link>
          </li>

          <li>
            <router-link class="nav-link px-2" :to="{ name: 'coaches' }">
              Coaches
            </router-link>
          </li>

          <!-- 
          <li>
            <router-link class="nav-link px-2" :to="{ name: 'contact' }">
              Contact
            </router-link>
          </li> -->
        </ul>

        <!-- <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> -->

        <ul
          v-if="isAuthed"
          class="
            nav
            col-12 col-lg-auto
            ms-lg-auto
            mb-2
            justify-content-start
            mb-md-0
            text-end
          "
        >
          <li>
            <router-link class="nav-link px-2" :to="{ name: 'requests' }">
              Requests
            </router-link>
          </li>
          <li>
            <router-link
              link
              class="nav-link px-2"
              :to="{ name: 'couches-register' }"
            >
              Register
            </router-link>
          </li>

          <li>
            <base-button @click="logout" class="nav-link mx-2 btn btn-danger">
              Logout
            </base-button>
          </li>
        </ul>

        <ul
          v-else
          class="
            nav
            col-12 col-lg-auto
            ms-lg-auto
            mb-2
            justify-content-start
            mb-md-0
            text-end
          "
        >
          <li>
            <router-link
              class="btn btn-outline-light me-2"
              :to="{ name: 'sign-in' }"
            >
              Sign in
            </router-link>
          </li>
          <li>
            <router-link
              class="nav-link px-2 btn btn-warning"
              :to="{ name: 'sign-up' }"
            >
              Sign up
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  afterMount: function () {
    console.log(this.isAuthed);
  },
  computed: {
    ...mapGetters('auth', ['isAuthed']),
  },
  methods: {
    ...mapActions('auth', ['tryLogin', 'logout']),
  },
};
</script>

<style scoped>
.nav-link {
  color: #fff !important;
}
.router-link-exact-active {
  color: #6c757d !important;
}
</style>