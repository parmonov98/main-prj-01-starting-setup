<template>
  <div class="w-100 row justify-content-between my-2">
    <couch-filter-by-field
      @set-field="setField"
      :fields="fields"
    ></couch-filter-by-field>
    <couch-filter-by-search
      :search="search"
      @set-search="setSearch"
    ></couch-filter-by-search>
    <div class="mt-2"></div>
    <couch-filter-by-tags
      @set-tags="setTags"
      :tags="availableTags"
    ></couch-filter-by-tags>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CouchFilterByField from './CouchFilterByField.vue';
import CouchFilterBySearch from './CouchFilterBySearch.vue';
import CouchFilterByTags from './CouchFilterByTags.vue';
export default {
  components: {
    CouchFilterByField,
    CouchFilterBySearch,
    CouchFilterByTags,
  },
  data() {
    return {
      search: '',
      tags: [],
      field: '',
    };
  },
  mounted: function () {
    console.log(this.availableTags);
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
