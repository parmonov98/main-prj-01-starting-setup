<template>
  <div class="col-4">
    <input
      class="form-control"
      list="datalistOptions"
      id="exampleDataList"
      @keyup="onKeyUp"
      placeholder="Type to search..."
    />
    <!-- <datalist id="datalistOptions">
      <option value="San Francisco"></option>
      <option value="New York"></option>
      <option value="Seattle"></option>
      <option value="Los Angeles"></option>
      <option value="Chicago"></option>
    </datalist> -->
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  emits: ['setSearch'],
  methods: {
    ...mapActions('coach', ['filterCoaches']),
    onKeyUp(e) {
      this.$emit('setSearch', e.target.value);
    },
  },
};
</script>