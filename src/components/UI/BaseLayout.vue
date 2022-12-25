<template>
  <div class="layout">
    <!-- <header class="header" v-if="hasHeaderSlot">
      <slot name="header"></slot>
    </header>
    <the-header v-else></the-header> -->

    <main class="main container mt-5 mb-3">
      <slot name="default"></slot>
    </main>
    <!-- <footer class="footer" v-if="hasFooterSlot">
    <slot name="footer"></slot>
  </footer> -->
  </div>
</template>

<script>
// import TheHeader from '../layout/TheHeader.vue';
export default {
  // components: { TheHeader },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
  },
};
</script>
