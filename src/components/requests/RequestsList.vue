<template>
  <request-item
    v-for="item in requests"
    :key="item.id"
    :student="item.student"
    :subject="item.subject"
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
      return this.$store.getters['requests/items'];
    },
  },
};
</script>