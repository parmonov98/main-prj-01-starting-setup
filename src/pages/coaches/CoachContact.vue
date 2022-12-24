<template>
  <base-layout>
    <template #header>
      <base-loading-panel v-if="isLoading"></base-loading-panel>
      <base-modal :show="!!error">
        <p>{{ error }}</p>
      </base-modal>
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
              v-model="name.val"
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
              v-model="email.val"
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
              v-model="title.val"
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
              v-model="message.val"
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
      name: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      title: {
        val: '',
        isValid: true,
      },
      message: {
        val: '',
        isValid: true,
      },
      isLoading: false,
      isFormValid: true,
      error: null,
    };
  },
  methods: {
    ...mapActions('requests', ['addRequest']),
    validateForm() {
      this.isFormValid = true;

      if (this.name.val === '') {
        this.name.isValid = false;
        this.isFormValid = false;
      }

      if (this.email.val === '') {
        this.email.isValid = false;
        this.isFormValid = false;
      }

      if (this.title.val === '') {
        this.title.isValid = false;
        this.isFormValid = false;
      }

      if (this.message.val === '') {
        this.message.isValid = false;
        this.isFormValid = false;
      }

      this.isFormValidadated = true;
    },
    async onSubmit() {
      this.isLoading = true;
      this.validateForm();
      if (!this.isFormValid) {
        return;
      }
      console.log(this.data);
      console.log(this.coachID);

      const response = await this.addRequest({
        name: this.name.val,
        email: this.email.val,
        title: this.title.val,
        message: this.message.val,
        coachID: this.coachID,
      });
      console.log(response);
      this.email = {
        val: '',
        isValid: true,
      };
      this.name = {
        val: '',
        isValid: true,
      };
      this.title = {
        val: '',
        isValid: true,
      };
      this.message = {
        val: '',
        isValid: true,
      };
      this.isLoading = false;
    },
  },
};
</script>