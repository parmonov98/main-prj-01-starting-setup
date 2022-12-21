<template>
  <base-layout>
    <div class="row">
      <h2 class="text-center">Coaches</h2>
    </div>
    <div class="d-flex justify-content-center">
      <couch-filters></couch-filters>
    </div>
    <div class="row mt-3">
      <coaches-list></coaches-list>
    </div>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import CoachesList from '../components/coaches/CoachesList.vue';
import CouchFilters from '../components/coaches/CouchFilters.vue';
export default {
  components: {
    CoachesList,
    CouchFilters,
  },
  created: function () {
    this.getCoaches();
  },
  methods: {
    ...mapActions('coach', ['getCoaches']),
  },
};
</script>