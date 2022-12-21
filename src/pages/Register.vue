<template>
  <base-layout>
    <h2>Register</h2>
    <div>
      <!-- Bootstrap 5 starter form -->
      <form id="contactForm" @submit.prevent="onSubmit">
        <!-- Name input -->
        <div class="mb-3">
          <label class="form-label" for="name">First name</label>
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="First name"
            v-model="firstName"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" for="name">Last name</label>
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="lastName"
            placeholder="Last name"
          />
        </div>

        <!-- Field input -->
        <div class="mb-3">
          <label class="form-label" for="field">Field</label>
          <input
            class="form-control"
            id="field"
            type="text"
            placeholder="Enter field"
            v-model="field"
          />
        </div>

        <!-- Field input -->
        <div class="mb-3">
          <label class="form-label" for="Photo">Photo</label>
          <input
            class="form-control"
            id="Photo"
            type="text"
            placeholder="Enter Photo url"
            v-model="photo"
          />
        </div>

        <!-- Message input -->
        <div class="mb-3">
          <label class="form-label" for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            type="text"
            placeholder="Description"
            style="height: 10rem"
            v-model="description"
          ></textarea>
        </div>

        <!-- Tags input -->
        <div class="mb-3">
          <label class="form-label" for="tags">Tags</label>
          <input
            class="form-control"
            id="tags"
            type="text"
            placeholder="Enter tags"
            :value="currentTag.name"
            @keyup="onChangeCurrentTag"
            :data-id="currentTag.id"
            @keydown.enter.prevent="onSubmitCurrentTag($event)"
          />

          <small class="text-muted">level({{ currentTag.value }}%)</small>
          <progress-bar
            @setValue="onChangeProgress"
            :value="currentTag.value"
          ></progress-bar>
          <span
            class="badge bg-secondary mx-1"
            v-for="item in tags"
            :key="item.id"
            @click="setCurrentTag(item.id)"
            >{{ item.name }}</span
          >
        </div>

        <!-- Email address input -->
        <div class="mb-3">
          <label class="form-label" for="emailAddress">Email Address</label>
          <input
            class="form-control"
            id="emailAddress"
            type="email"
            placeholder="Email Address"
            v-model="email"
          />
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
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      field: '',
      email: '',
      photo: '',
      currentTag: {
        id: 1,
        value: 0,
        name: '',
      },
      tags: [],
    };
  },
  computed: {},
  methods: {
    onChangeCurrentTag(e) {
      this.currentTag.name = e.target.value;
    },
    onChangeProgress(new_value) {
      this.currentTag.value = parseFloat(new_value);
    },
    onSubmitCurrentTag(e) {
      e.preventDefault();
      const selectedTag = this.tags.find(
        (item) => item.id === this.currentTag.id
      );
      if (!selectedTag) {
        this.tags.push({ ...this.currentTag });
        this.currentTag.id++;
        this.currentTag.name = '';
        this.currentTag.value = 0;
      } else {
        const selectedTagIndex = this.tags.findIndex(
          (item) => item.id === this.currentTag.id
        );
        const selectedTag = this.tags[selectedTagIndex];
        selectedTag.name = this.currentTag.name;
        selectedTag.value = this.currentTag.value;
        this.currentTag.id = this.tags.length + 1;
        this.currentTag.name = '';
        this.currentTag.value = 0;
      }
    },
    setCurrentTag(id) {
      const selectedTag = this.tags.find((item) => item.id === id);
      if (selectedTag) {
        this.currentTag = { ...selectedTag };
      }
    },
    onSubmit(e) {
      console.log(e);
      if (e.shiftKey) {
        return;
      }
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        photo: this.photo,
        email: this.email,
        field: this.field,
        description: this.description,
        tags: this.tags,
      };
      this.firstName = '';
      this.lastName = '';
      this.photo = '';
      this.email = '';
      this.field = '';
      this.description = '';
      this.tags = [];
      this.currentTag = {
        id: 1,
        value: 0,
        name: '',
      };

      this.$store.dispatch('coach/addCoach', data);
    },
  },
};
</script>