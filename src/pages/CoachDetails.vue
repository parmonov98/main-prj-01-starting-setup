<template>
  <base-layout>
    <template #default>
      <div v-if="doesCoachExist">
        <div class="row justify-content-center">
          <router-view></router-view>
        </div>

        <div class="row justify-content-center">
          <h2>coach details</h2>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
              <img :src="coach.photo" alt="..." />
              <div class="card-body p-1-9 p-xl-5">
                <div class="mb-4">
                  <h3 class="h4 mb-0">{{ fullName }}</h3>
                  <span class="text-primary">{{ coach.field }}</span>
                </div>
                <ul class="list-unstyled mb-4">
                  <li class="mb-3">
                    <a href="#!"
                      ><i
                        class="far fa-envelope display-25 me-3 text-secondary"
                      ></i
                      >{{ coach.email }}</a
                    >
                  </li>
                </ul>
                <base-button
                  :to="{
                    name: 'coach-contact',
                    params: { coachID: coachID },
                  }"
                >
                  Contact
                </base-button>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
              <div class="mb-5 wow fadeIn">
                <div class="text-start mb-1-6 wow fadeIn">
                  <h2 class="h1 mb-0 text-primary">#About Me</h2>
                </div>
                <p>
                  {{ coach.description }}
                </p>
              </div>
              <div class="wow fadeIn">
                <div class="text-start mb-1-6 wow fadeIn">
                  <h2 class="mb-0 text-primary">#Skills &amp; Experience</h2>
                </div>
                <p class="mb-4">Coach's current skills and technologies</p>
                <div
                  class="progress-style1"
                  v-for="tag in coach.tags"
                  :key="tag.name"
                >
                  <progress-bar
                    :value="tag.value"
                    :name="tag.name"
                  ></progress-bar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>Couch not found</div>
    </template>
  </base-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseButton from '../components/UI/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['coachID'],
  created: async function () {
    const data = await this.getCoaches();
    if (data) {
      this.getGoach(this.coachID);
    }
  },
  methods: {
    ...mapActions('coach', ['getCoaches', 'getGoach']),
  },
  // methods: {
  //   ...mapActions('coach', ['getGoach', 'getGoaches']),
  // },
  computed: {
    ...mapGetters('coach', ['coach']),
    fullName() {
      if (this.coach) {
        return (
          this.coach.first_name +
          ' ' +
          this.coach.last_name
        ).toLocaleUpperCase();
      } else return '';
    },
    doesCoachExist() {
      return !!this.coach;
    },
  },
};
</script>

<style scoped>
body {
  margin-top: 20px;
}
.icon-box.medium {
  font-size: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
}
.icon-box {
  font-size: 30px;
  margin-bottom: 33px;
  display: inline-block;
  color: #ffffff;
  height: 65px;
  width: 65px;
  line-height: 65px;
  background-color: #59b73f;
  text-align: center;
  border-radius: 0.3rem;
}
.social-icon-style2 li a {
  display: inline-block;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #59b73f;
  height: 41px;
  line-height: 41px;
  width: 41px;
}
.rounded-3 {
  border-radius: 0.3rem !important;
}

.social-icon-style2 {
  margin-bottom: 0;
  display: inline-block;
  padding-left: 10px;
  list-style: none;
}

.social-icon-style2 li {
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
}

a,
a:active,
a:focus {
  color: #616161;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

.text-secondary,
.text-secondary-hover:hover {
  color: #59b73f !important;
}
.display-25 {
  font-size: 1.4rem;
}

.text-primary,
.text-primary-hover:hover {
  color: #ff712a !important;
}

p {
  margin: 0 0 20px;
}

.mb-1-6,
.my-1-6 {
  margin-bottom: 1.6rem;
}
</style>