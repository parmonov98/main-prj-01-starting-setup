<template>
  <base-layout>
    <base-modal :show="!!error">
      <p>{{ error }}</p>
    </base-modal>
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
    <base-loading-panel v-if="isLoading"></base-loading-panel>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
import RequestsList from '../../components/requests/RequestsList.vue';
export default {
  components: {
    RequestsList,
  },
  data() {
    return {
      isLoading: true,
      error: null,
      search: '',
    };
  },
  created: function () {
    setTimeout(() => {
      this.loadRequests();
    }, 0);
  },
  methods: {
    ...mapActions('requests', ['getRequests', 'filterRequests']),
    searchRequests(e) {
      this.filterRequests(e.target.value);
    },
    async loadRequests() {
      const responseData = await this.getRequests();
      if (responseData !== true) {
        this.error = responseData.error;
      }
      this.isLoading = false;
    },
  },
};
</script>