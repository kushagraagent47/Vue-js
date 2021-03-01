<template>
  <div class="container">
    <div class="card card-body text-center p-5 mt-5 border-primary">
      <div>
        <i @click="setRating(1)" class="fa fa-star text-warning fa-6x"> </i
        ><i @click="setRating(2)" class="fa fa-star text-warning fa-6x"> </i
        ><i @click="setRating(3)" class="fa fa-star text-warning fa-6x"> </i
        ><i @click="setRating(4)" class="fa fa-star text-warning fa-6x"> </i
        ><i @click="setRating(5)" class="fa fa-star text-warning fa-6x"> </i>
      </div>
      <h1 class="text-success mt-4" v-if="rating == 1">
        Sorry to hear that rating
      </h1>
      <h1 class="text-success mt-4" v-if="rating == 2">
        We got 2 star
      </h1>
      <h1 class="text-success mt-4" v-if="rating == 5">
        We are lucky that you liked it
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rating: null,
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
  },
};
</script>

<style>
body {
  background-color: #333;
}
</style>
