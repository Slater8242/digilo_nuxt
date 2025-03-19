<script setup lang="ts">
useHead({
  title: "Login",
})
</script>

<template>
  <div class="content">
    <Login />
  </div>
</template>

<style scoped>
.content{
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 160px;
  justify-content: center;
}

@media (min-width: 641px) {
  .content{
    margin-top: 90px;
    margin-bottom: 300px;
  }
}

@media (min-width: 1281px) {
  .content{
    display: flex;
    margin-left: 40px;
    margin-top: 94px;
    margin-bottom: 70px;
    justify-content: start;
  }

}
</style>