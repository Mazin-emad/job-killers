<script setup>
import "primeicons/primeicons.css";
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar />
  <RouterView />
</template>
