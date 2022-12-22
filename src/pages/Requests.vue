<template>
  <base-layout>
    <div v-if="!isLoading">
      <h2>Requests</h2>
      <div class="row mb-2">
        <div class="col-12">
          <input
            class="form-control"
            type="search"
            v-model="search"
            @keyup="searchRequests"
            placeholder="Searching request by name and subject"
          />
        </div>
      </div>
      <requests-list></requests-list>
    </div>
    <base-spinner v-else></base-spinner>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import RequestsList from '../components/requests/RequestsList.vue';
export default {
  components: {
    RequestsList,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created: function () {
    this.loadRequests();
  },
  methods: {
    ...mapActions('requests', ['getRequests', 'filterRequests']),
    searchRequests(e) {
      this.filterRequests(e.target.value);
    },
    async loadRequests() {
      await this.getRequests();
      this.isLoading = false;
    },
  },
};
</script>