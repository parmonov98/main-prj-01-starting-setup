<template>
  <request-item
    v-for="item in requests"
    :key="item.id"
    :name="item.name"
    :title="item.title"
    :description="item.description"
    :email="item.email"
  ></request-item>
</template>

<script>
import RequestItem from './RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    requests() {
      console.log(this.$store);
      if (this.$store.getters['requests/filtered']) {
        return this.$store.getters['requests/filtered'];
      }
      return this.$store.getters['requests/items'];
    },
  },
};
</script>