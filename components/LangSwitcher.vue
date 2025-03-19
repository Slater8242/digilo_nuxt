<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const showList = ref(false);

const toggleShow = ()=>{  
  showList.value = !showList.value
}
</script>

<template>
  <div class="lang-switcher">
    <div class="current-lang" :class="{show: showList}" @click="toggleShow">{{ locale.toUpperCase() }}</div>
    <ul v-if="showList" class="lang-list">
      <li v-for="locale in locales" class="lang-item" @click="toggleShow">
        <NuxtLink :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.code.toUpperCase() }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang-switcher{
  position: relative;
  display: flex;
  justify-content: center;
}

.current-lang{
  font-size: var(--header1-desktop);
  font-weight: bold;
  cursor: pointer;
}

.show{
  color: var(--text-green);
}

.lang-list{
  color: var(--text-black);
  font-size: var(--header2-desktop);
  list-style: none;
  position: absolute;
  top: 48px;
  padding: 20px 35px;
  border-radius: 10px;
  background-color: var(--bg-white);
  box-shadow: 2px 2px 10px #00000040;
  z-index: 100;
}

.lang-item:hover{
  color: var(--text-green);
}
</style>
