<template>
  <button class="btn btn-primary" :class="classes" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['classes', 'type'],
};
</script>