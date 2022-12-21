<template>
  <div class="card">
    <div class="card-header">{{ student }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ subject }}</h5>
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">{{ email }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['student', 'description', 'subject', 'email'],
};
</script>