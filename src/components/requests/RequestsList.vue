<template>
  <div class="row" v-if="hasRequests">
    <request-item
      v-for="item in requests"
      :key="item.id"
      :name="item.name"
      :title="item.title"
      :description="item.description"
      :email="item.email"
    ></request-item>
  </div>
  <div v-else class="no-item-found">No requests found</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from './RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    ...mapGetters('requests', ['requests', 'hasRequests']),
  },
};
</script>