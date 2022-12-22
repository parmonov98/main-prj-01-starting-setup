<template>
  <base-layout>
    <h2>Register</h2>
    <div>
      <div class="modal fade show" v-if="isLoading">
        <div class="modal-dialog modal-dialog-centered">
          <base-spinner></base-spinner>
        </div>
      </div>

      <!-- Bootstrap 5 starter form -->
      <form id="contactForm" @submit.prevent="onSubmit">
        <!-- :class="{ 'was-validated': isFormValidadated }" -->

        <!-- Name input -->
        <div
          class="mb-3"
          :class="{
            'in-valid': !firstName.isValid,
          }"
        >
          <label class="form-label" for="name">First name</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': !firstName.isValid }"
            id="name"
            type="text"
            placeholder="First name"
            v-model.trim="firstName.val"
            @focusin="clearValidity('firstName')"
          />
          <div class="invalid-feedback">Please, enter your first name</div>
        </div>

        <div class="mb-3">
          <label class="form-label" for="name">Last name</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': !lastName.isValid }"
            id="name"
            type="text"
            v-model.trim="lastName.val"
            placeholder="Last name"
            @focusin="clearValidity('lastName')"
          />
          <div class="invalid-feedback">Please, enter your last name</div>
        </div>

        <!-- Field input -->
        <div class="mb-3">
          <label class="form-label" for="field">Field</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': !field.isValid }"
            id="field"
            type="text"
            placeholder="Enter field"
            v-model.trim="field.val"
            @focusin="clearValidity('field')"
          />
          <div class="invalid-feedback">Please, enter your field</div>
        </div>

        <!-- Field input -->
        <div class="mb-3">
          <label class="form-label" for="Photo">Photo</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': !photo.isValid }"
            id="Photo"
            type="text"
            placeholder="Enter Photo url"
            v-model.trim="photo.val"
            @focusin="clearValidity('photo')"
          />
          <div class="invalid-feedback">Please, enter your photo URL</div>
        </div>

        <!-- Description input -->
        <div class="mb-3">
          <label class="form-label" for="description">Description</label>
          <textarea
            class="form-control"
            :class="{ 'is-invalid': !description.isValid }"
            id="description"
            type="text"
            placeholder="Description"
            style="height: 10rem"
            v-model.trim="description.val"
            @focusin="clearValidity('description')"
          ></textarea>
          <div class="invalid-feedback">Please, enter your description</div>
        </div>

        <!-- Tags input -->
        <div class="mb-3">
          <label class="form-label" for="tags">Tags</label>
          <couch-tags
            @set-tags="setTags"
            :valid="firstName.isValid"
            @focusin="clearValidity('tags')"
          ></couch-tags>
          <div class="invalid-feedback">Please, enter tags</div>
        </div>

        <!-- Email address input -->
        <div class="mb-3">
          <label class="form-label" for="emailAddress">Email Address</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': !email.isValid }"
            id="emailAddress"
            type="email"
            placeholder="Email Address"
            v-model.trim="email.val"
            @focusin="clearValidity('email')"
          />
          <div class="invalid-feedback">Please, enter your email</div>
        </div>

        <!-- Form submit button -->
        <div class="d-grid">
          <button class="btn btn-primary btn-lg" type="submit">Register</button>
        </div>
      </form>
    </div>
  </base-layout>
</template>

<script>
import CouchTags from '../components/couches/CouchTags.vue';
import BaseSpinner from '../components/UI/BaseSpinner.vue';
export default {
  components: { CouchTags, BaseSpinner },
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      field: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      photo: {
        val: '',
        isValid: true,
      },
      tags: {
        val: [],
        isValid: true,
      },
      isFormValid: true,
      isFormValidadated: false,
      isLoading: false,
    };
  },
  computed: {},
  methods: {
    validateForm() {
      this.isFormValid = true;

      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }

      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }

      if (this.field.val === '') {
        this.field.isValid = false;
        this.isFormValid = false;
      }

      if (this.photo.val === '') {
        this.photo.isValid = false;
        this.isFormValid = false;
      }

      if (this.description.val === '') {
        this.description.isValid = false;
        this.isFormValid = false;
      }

      if (this.tags.val.length == 0) {
        this.tags.isValid = false;
        this.isFormValid = false;
      }

      if (this.email.val === '') {
        this.email.isValid = false;
        this.isFormValid = false;
      }

      console.log(this.firstName);

      this.isFormValidadated = true;
    },
    clearValidity(input) {
      console.log(input);
      this[input].isValid = true;
    },
    setTags(tags) {
      this.tags.val = tags;
    },
    async onSubmit(e) {
      this.isLoading = true;
      this.validateForm();

      console.log(e);

      console.log(this);

      if (this.isFormValid) {
        const data = {
          first_name: this.firstName.val,
          last_name: this.lastName.val,
          photo: this.photo.val,
          email: this.email.val,
          field: this.field.val,
          description: this.description.val,
          tags: [...this.tags.val],
        };
        console.log(data);
        this.firstName.val = '';
        this.lastName.val = '';
        this.photo.val = '';
        this.email.val = '';
        this.field.val = '';
        this.description.val = '';
        this.tags.val = [];
        await this.$store.dispatch('coach/addCoach', data);
        this.isLoading = false;
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>
