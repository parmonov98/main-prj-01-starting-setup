<template>
  <base-layout>
    <div>
      <h2>Requests</h2>
      <requests-list></requests-list>
    </div>
  </base-layout>
</template>

<script>
import RequestsList from '../components/requests/RequestsList.vue';
export default {
  components: {
    RequestsList,
  },
};
</script>