<template>
  <input
    class="form-control"
    id="tags"
    type="text"
    :class="{ 'is-invalid': !valid }"
    placeholder="Enter tags"
    :value="currentTag.name"
    @keyup="onChangeCurrentTag"
    :data-id="currentTag.id"
    @keydown.enter.prevent="onSubmitCurrentTag($event)"
  />

  <progress-bar
    @setValue="onChangeProgress"
    :name="currentTag.name"
    :value="currentTag.value"
  ></progress-bar>
  <span
    class="badge bg-secondary mx-1"
    style="cursor: pointer"
    v-for="item in tags"
    :key="item.id"
    @click="setCurrentTag(item.id)"
    >{{ item.name }}</span
  >
</template>

<script>
export default {
  emits: ['set-tags'],
  props: ['valid'],
  data() {
    return {
      currentTag: {
        id: 1,
        value: 0,
        name: '',
      },
      isValid: true,
      tags: [],
    };
  },
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

      this.$emit('set-tags', [...this.tags]);
    },
    setCurrentTag(id) {
      const selectedTag = this.tags.find((item) => item.id === id);
      if (selectedTag) {
        this.currentTag = { ...selectedTag };
      }
    },
  },
};
</script>