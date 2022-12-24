<template>
  <router-view v-slot="slotProps">
    <transition name="layout" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created: async function () {
    await this.tryLogin();
  },
  methods: {
    ...mapActions('auth', ['tryLogin']),
  },
};
</script>


<style>
.modal {
  display: flex;
  background: rgba(0, 0, 0, 0.15);
}

.layout-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.layout-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.layout-enter-active {
  transition: all 0.3s ease-out;
}

.layout-leave-active {
  transition: all 0.3s ease-in;
}

.layout-enter-to,
.layout-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>