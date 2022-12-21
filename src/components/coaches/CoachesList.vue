<template>
  <div class="row justify-content-center">
    <coach-item
      v-for="item in coaches"
      :key="item.id"
      :id="item.id"
      :first_name="item.first_name"
      :last_name="item.last_name"
      :photo="item.photo"
      :description="item.description"
      :tags="item.tags"
      :field="item.field"
      :email="item.email"
    ></coach-item>
  </div>
</template>

<script>
import CoachItem from './CoachItem.vue';
export default {
  components: {
    CoachItem,
  },
  computed: {
    coaches() {
      if (this.$store.getters['coach/filtered'] != null) {
        return this.$store.getters['coach/filtered'];
      } else {
        return this.$store.getters['coach/items'];
      }
    },
  },
};
</script>