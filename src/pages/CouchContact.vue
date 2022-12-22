<template>
  <base-layout>
    <template #header>
      <h2>Contact</h2>
      <div>
        <!-- Bootstrap 5 starter form -->
        <form id="contactForm" @submit.prevent="onSubmit">
          <!-- Name input -->
          <div class="mb-3">
            <label class="form-label" for="name">Name</label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Name"
              v-model="data.name"
            />
          </div>

          <!-- Email address input -->
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input
              class="form-control"
              id="email"
              type="email"
              placeholder="Email Address"
              v-model="data.email"
            />
          </div>

          <!-- Email address input -->
          <div class="mb-3">
            <label class="form-label" for="Title">Title</label>
            <input
              class="form-control"
              id="Title"
              type="text"
              placeholder="Title"
              v-model="data.title"
            />
          </div>

          <!-- Message input -->
          <div class="mb-3">
            <label class="form-label" for="message">Message</label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Message"
              style="height: 10rem"
              v-model="data.message"
            ></textarea>
          </div>

          <!-- Form submit button -->
          <div class="d-grid">
            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </template>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['coachID'],
  data() {
    return {
      data: {
        name: '',
        email: '',
        title: '',
        message: '',
      },
    };
  },
  methods: {
    ...mapActions('requests', ['addRequest']),
    onSubmit() {
      console.log(this.data);
      this.addRequest({ ...this.data, coachID: this.coachID });
      this.data = {
        name: '',
        email: '',
        title: '',
        message: '',
      };
    },
  },
};
</script>