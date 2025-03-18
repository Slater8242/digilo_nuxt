<script setup lang="ts">
definePageMeta({
  layout: "user"
})

useHead({title: "Overview"})

import LineChart from '~/components/LineChart.vue';
</script>

<template>
  <LineChart />
</template>

<style scoped>

</style>