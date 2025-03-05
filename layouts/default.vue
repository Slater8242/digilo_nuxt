<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";

useHead({
  title: "Home",
})
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header/>
      <div class="content">
        <slot/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: relative;
  background: #8B8B8B1F;
}

.wrapper::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0; /* Adjust to cover margin */
  right: 0;
  bottom: 0;
  background-image: url("@/assets/images/bg-image.jpeg");
  background-repeat: no-repeat;
  background-size: 130%;
  z-index: -1;
}

.container {
  width: 272px;
  margin: 0 auto;
  padding-top: 40px;
  flex: 1;
}

.content{
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 160px;
  justify-content: center;
}

@media (min-width: 641px) {
  .container{
    width: 576px;
  }
  .content{
    margin-top: 90px;
    margin-bottom: 300px;
  }
}

@media (min-width: 1281px) {
  .wrapper::before{
    content: none;
  }

  .container {
    width: 1160px;
    background-size: auto;
    background-position: top right;
  }

  .container::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 340px;
    background-image: url('@/assets/images/bg-image.jpeg');
    background-size: 700px 865px;
    background-position: right;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .content{
    display: flex;
    margin-left: 40px;
    margin-top: 94px;
    margin-bottom: 70px;
    justify-content: start;
  }

}
</style>