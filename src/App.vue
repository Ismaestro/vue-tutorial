<template>
  <main-nav />
  <hero />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav";
import Hero from "@/components/JobSearch/Hero";

export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>

<style scoped></style>
