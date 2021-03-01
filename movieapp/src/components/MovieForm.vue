<template>
  <form @submit.prevent="onSubmit" class="text-center">
    <input
      type="text"
      class="form-control mb-2"
      name="name"
      v-model="name"
      placeholder="Awesome Movie Name"
    />
    <input
      type="text"
      class="form-control mb-2"
      name="url"
      v-model="url"
      placeholder="Awesome Movie Url"
    />
    <button class="btn btn-info btn-block" type="submit">Add</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Form",
  props: {
    addMovie: Function,
  },
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    onSubmit: function() {
      this.addMovie({
        name: this.name,
        url: this.url,
        id: uuidv4(),
        date: Date.now(),
      });

      this.name = "";
      this.url = "";
    },
  },
};
</script>

<style></style>
