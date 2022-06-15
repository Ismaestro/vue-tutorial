<template>
  <h1 class="text-6xl font-bold">JobResultsView</h1>
  <button @click="goToHome">Go to Home page</button>
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {},
  methods: {
    goToHome() {
      this.$router.push({ name: "HomeRoute" });
    },
  },
};
</script>
