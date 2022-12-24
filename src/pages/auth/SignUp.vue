<template>
  <base-layout>
    <div class="row">
      <base-modal :show="!!error" title="Error occured">
        <p>{{ error }}</p>
      </base-modal>
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Sign up Form</h2>
        <div class="text-center mb-5 text-dark">Made with bootstrap</div>
        <div class="card my-5">
          <form
            class="card-body cardbody-color p-lg-5"
            @submit.prevent="onSubmit"
          >
            <div class="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                class="
                  w-25
                  img-fluid
                  profile-image-pic
                  img-thumbnail
                  rounded-circle
                  my-3
                "
                width="200px"
                alt="profile"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': !email.isValid }"
                @focusin="clearValidity('email')"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                v-model.trim="email.val"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': !password.isValid }"
                @focusin="clearValidity('password')"
                id="password"
                placeholder="password"
                v-model.trim="password.val"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': !passwordConfirmation.isValid }"
                @focusin="clearValidity('passwordConfirmation')"
                id="confirmation_password"
                placeholder="confirmation_password"
                v-model.trim="passwordConfirmation.val"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary px-5 mb-5 w-100">
                Login
              </button>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
              Have an account?
              <router-link :to="{ name: 'sign-in' }" class="text-dark fw-bold">
                Sign in</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      passwordConfirmation: {
        val: '',
        isValid: true,
      },
      isFormValid: true,
      isLoading: true,
      error: null,
    };
  },
  methods: {
    ...mapActions('auth', ['signUp']),
    clearValidity(input) {
      this[input].isValid = true;
      this.isFormValid = true;
    },
    validateForm() {
      if (this.email.val === '') {
        this.email.isValid = false;
        this.isFormValid = false;
      }

      if (this.password.val === '' || this.password.val.length < 6) {
        this.password.isValid = false;
        this.isFormValid = false;
      }

      if (this.password.val !== this.passwordConfirmation.val) {
        this.passwordConfirmation.isValid = false;
        this.isFormValid = false;
      }
    },
    async onSubmit() {
      this.validateForm();
      if (this.isFormValid) {
        const response = await this.signUp({
          email: this.email.val,
          password: this.password.val,
        });
        console.log(response);
        if (response.error && response.error.message) {
          this.error = response.error.message;
        } else {
          this.$router.replace({ name: 'couches-register' });
        }
      }
    },
  },
};
</script>