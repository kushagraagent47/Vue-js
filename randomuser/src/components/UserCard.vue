<template>
  <div class="card border-primary">
    <div class="card-body text-center">
      <img
        :src="user.picture?.large"
        height="150"
        width="150"
        class="rounded-circle img-thumbnail border-danger zoomIn"
      />
      <div class="card-title text-primary">
        <h1>
          <span class="pl-2">{{ user.name.title }}</span>
          <span class="pl-2">{{ user.name?.first }}</span>
          <span class="pl-2">{{ user.name?.last }}</span>
        </h1>
        <p class="badge bg-success text-white">{{ user.gender }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

<style></style>
