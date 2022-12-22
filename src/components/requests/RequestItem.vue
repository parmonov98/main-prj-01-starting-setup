<template>
  <div class="card">
    <div class="card-header">{{ name }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="'mailto:' + email" class="btn btn-primary">{{ email }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'description', 'title', 'email'],
};
</script>