<script setup lang="ts">
import Dropdown from "~/components/ui/Dropdown.vue";

definePageMeta({
  layout: "user"
})

useHead({
  title: 'Chat',
})

const option = ref("");

const options=[
  "Papildus summas saņemšanai",
  "Jauna kredīta saņemšanai",
  "Kredīta atlikums",
  "Cits"
];
</script>

<template>
  <span class="choose">Izvēlies jebkuru papildu pakalpojumu, kuru vēlies noformēt. Aizpildi anketu, un mēs ar tevi sazināsimies.</span>

  <Dropdown v-model:selected="option" :options="options" placeholder="Iesniegumi"/>
  <p>{{option}}</p>
</template>

<style>
.choose{
  font-size: var(--body1-desktop);
}
</style>