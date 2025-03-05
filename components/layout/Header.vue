<script setup lang="ts">
import Logo from "assets/icons/black-logo.svg"
</script>

<template>
<header>
  <NuxtLink to="/">
    <Logo class="logo" filled/>
  </NuxtLink>
  <div class="lang">
    <span>LV</span>
  </div>
</header>
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nuxt-icon{
  width: 81px;
  height: 26px;
}

.lang{
  font-size: 14px;
}

@media (min-width: 641px) {
  .nuxt-icon{
    width: 127px;
    height: 42px;
  }

  .lang{
    font-size: 18px;
  }
}
@media (min-width: 1281px) {
  .nuxt-icon{
    width: 127px;
    height: 42px;
  }

  .lang{
    font-size: 18px;
  }
}
</style>