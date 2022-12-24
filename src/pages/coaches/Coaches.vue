<template>
  <base-layout>
    <div class="row jusify-content-between">
      <div class="col-8">
        <h2 class="mr-auto">Coaches</h2>
      </div>
      <div class="col-4 text-end">
        <base-button
          v-if="!isAuthed"
          :to="{ name: 'sign-in', query: { redirect: 'couches-register' } }"
        >
          Register as a couch
        </base-button>

        <base-button v-else :to="{ name: 'requests' }"> Requests </base-button>
      </div>
    </div>
    <base-loading-panel v-if="isLoading"></base-loading-panel>
    <div class="d-flex justify-content-center">
      <coach-filters></coach-filters>
    </div>
    <div class="row mt-3">
      <coaches-list></coaches-list>
    </div>
  </base-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CoachesList from '../../components/coaches/CoachesList.vue';
import CoachFilters from '../../components/coaches/CoachFilters.vue';
export default {
  components: {
    CoachesList,
    CoachFilters,
  },
  created: function () {
    this.loadCouches();
  },

  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthed']),
  },
  methods: {
    ...mapActions('coach', ['getCoaches']),
    async loadCouches() {
      this.isLoading = true;
      await this.getCoaches();
      this.isLoading = false;
    },
  },
};
</script>