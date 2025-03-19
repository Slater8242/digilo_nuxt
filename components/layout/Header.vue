<script setup lang="ts">
import Logo from "assets/icons/black-logo.svg"
</script>

<template>
<header>
  <NuxtLink to="/">
    <Logo class="logo" filled/>
  </NuxtLink>
  <div class="lang">
    <LangSwitcher />
  </div>
</header>
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lang{
  font-size: 14px;
}

@media (min-width: 641px) {
  .lang{
    font-size: 18px;
  }
}
@media (min-width: 1281px) {
  .lang{
    font-size: 18px;
  }
}
</style>