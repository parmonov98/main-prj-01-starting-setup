<template>
  <div class="w-100 row justify-content-between my-2">
    <coach-filter-by-field
      @set-field="setField"
      :fields="fields"
    ></coach-filter-by-field>
    <coach-filter-by-search
      :search="search"
      @set-search="setSearch"
    ></coach-filter-by-search>
    <div class="mt-2"></div>
    <coach-filter-by-tags
      @set-tags="setTags"
      :tags="availableTags"
    ></coach-filter-by-tags>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CoachFilterByField from './CoachFilterByField.vue';
import CoachFilterBySearch from './CoachFilterBySearch.vue';
import CoachFilterByTags from './CoachFilterByTags.vue';
export default {
  components: {
    CoachFilterByField,
    CoachFilterBySearch,
    CoachFilterByTags,
  },
  data() {
    return {
      search: '',
      tags: [],
      field: '',
    };
  },
  computed: {
    ...mapGetters('coach', ['availableTags', 'searchString', 'fields']),
  },
  methods: {
    ...mapActions('coach', ['filterCoaches']),
    setSearch(value) {
      console.log(value);
      this.search = value;
      this.filterCoaches({
        search: value,
        tags: this.tags,
        field: this.field,
      });
    },
    setField(value) {
      this.field = value;
      this.filterCoaches({
        search: this.search,
        tags: this.tags,
        field: value,
      });
    },
    setTags(tags) {
      this.tags = tags;
      this.filterCoaches({
        search: this.search,
        tags: tags,
        field: this.field,
      });
    },
  },
};
</script>
