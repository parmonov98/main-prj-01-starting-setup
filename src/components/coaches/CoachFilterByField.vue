<template>
  <div class="col-2">
    <select
      class="form-select"
      aria-label="Default select example"
      @click="onChange"
    >
      <option selected value="">Field</option>

      <option v-for="item in fields" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>


<script>
export default {
  props: ['fields'],
  emits: ['setField'],
  methods: {
    onChange(e) {
      this.$emit('setField', e.target.value);
    },
  },
};
</script>