<template>
  <base-layout>
    <div class="row">
      <h2 class="text-center">Coaches</h2>
    </div>
    <div class="modal fade show" v-if="isLoading">
      <div class="modal-dialog modal-dialog-centered">
        <base-spinner></base-spinner>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <couch-filters></couch-filters>
    </div>
    <div class="row mt-3">
      <couches-list></couches-list>
    </div>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import CouchesList from '../components/couches/CouchesList.vue';
import CouchFilters from '../components/couches/CouchFilters.vue';
export default {
  components: {
    CouchesList,
    CouchFilters,
  },
  created: function () {
    this.loadCouches();
  },

  data() {
    return {
      isLoading: false,
    };
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