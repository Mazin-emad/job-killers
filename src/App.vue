<script setup>
import "primeicons/primeicons.css";
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
