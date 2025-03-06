<script setup lang="ts">
import Dropdown from "~/components/ui/Dropdown.vue";
import TextInput from "~/components/ui/TextInput.vue";

definePageMeta({
  layout: "user"
})

useHead({
  title: 'Chat',
})

const inputVal = ref("")
const option = ref("");

const options=[
  {value: "additionalAmount" ,label:"Papildus summas saņemšanai"},
  {value: "newCredit" ,label:"Jauna kredīta saņemšanai"},
  {value: "balance" ,label:"Kredīta atlikums"},
  {value: "other" ,label:"Cits"},
];
</script>

<template>
  <div class="chat">
    <span class="text">Izvēlies jebkuru papildu pakalpojumu, kuru vēlies noformēt. <br>Aizpildi anketu, un mēs ar tevi sazināsimies.<br></span>

    <Dropdown v-model="option" :options="options" placeholder="Iesniegumi"/>

    <div class="additional-amount" v-if="option.value === 'additionalAmount'">
      <TextInput v-model="inputVal" placeholder="Liguma numurs"/>
      <TextInput v-model="inputVal" placeholder="Vēlamā aizdevuma summa"/>
      <TextInput v-model="inputVal" placeholder="Aizdevuma mērķis"/>
    </div>
  </div>
</template>

<style>
.chat{
  display: grid;
  row-gap: 30px;
}

.text{
  font-size: var(--body1-desktop);
}

.additional-amount{
  display: grid;
  row-gap: 25px;
}
</style>