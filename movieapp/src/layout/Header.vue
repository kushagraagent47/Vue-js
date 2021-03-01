<template>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand ml-5">
      <img src="../assets/logo-white.png" width="30" height="30" />
    </a>
    <span class="navbar-text text-white">
      {{ title }}
    </span>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
};
</script>

<style></style>
