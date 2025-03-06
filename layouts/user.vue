<script setup lang="ts">

import SideMenu from "~/components/layout/SideMenu.vue";
import TopMenu from "~/components/layout/TopMenu.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div class="container">
    <SideMenu/>
    <div class="user-panel">
      <div class="user-menu">
        <TopMenu/>
      </div>
      <div class="user-content">
        <slot />
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  /* overflow: hidden; */
}

.user-panel {
  max-width: 100%;
  min-width: 1040px;
  min-height: 80vh;
  background-color: var(--bg-white);
  /* overflow: hidden; */
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 140px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

.user-content{
  margin-top: 30px;
  margin-bottom: 165px;
}

.user-menu {
  justify-self: end;
}
</style>