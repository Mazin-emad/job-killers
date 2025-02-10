<script setup>
import { reactive, defineProps, onMounted } from "vue";
import axios from "axios";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const state = reactive({
  jobs: [],
  loading: true,
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  axios
    .get("/api/jobs")
    .then((response) => {
      state.jobs = response.data;
    })
    .catch((error) => {
      console.error("Error fetching jobs:", error);
    })
    .finally(() => {
      state.loading = false;
    });
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <!-- Filter jobs
    <section class="py-4">
      <div class="container mx-auto px-4">
        <div class="relative">
          <input
            type="text"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Filter jobs..."
          />
        </div>
      </div>
    </section> -->
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- show spinner while loading -->
      <div v-if="state.loading" class="py-4 text-center text-gray-500">
        <PulseLoader />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <JobListing
          v-for="job in state.jobs.slice(0, limit) || state.jobs"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
