<template>
  <div class="col-auto">
    <div class="form-check form-check-inline" v-for="item in tags" :key="item">
      <input
        class="form-check-input"
        v-model="selected"
        type="checkbox"
        name="tags"
        :id="item"
        @change="onChange"
        :value="item"
      />
      <label class="form-check-label" :for="item">{{ item }}</label>
    </div>
  </div>
</template>


<script>
export default {
  props: ['tags'],
  emits: ['setTags'],
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    onChange() {
      console.log(this.selected);
      this.$emit('setTags', this.selected);
    },
  },
};
</script>