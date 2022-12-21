<template>
  <div class="progress" @click="onClick">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: value + '%', 'pointer-events': 'none' }"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  emits: ['setValue'],
  props: ['value'],
  methods: {
    onClick(e) {
      let position;
      if (e.target.classList.contains('progress-bar')) {
        position = e.target.getBoundingClientRect();
      } else {
        position = e.target.parentElement.getBoundingClientRect();
      }
      const full_width = position.width;
      const selected_width = e.clientX - position.x;
      const size_per_percentage = full_width / 100;
      const percentage = (selected_width / size_per_percentage).toFixed(0);
      this.$emit('setValue', percentage);
    },
  },
};
</script>