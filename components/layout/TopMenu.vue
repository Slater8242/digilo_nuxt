<script setup lang="ts">
import profileImage from "assets/images/avatar.png"
import NotificationIcon from "assets/icons/notification.svg"
</script>

<template>
  <div class="nav">
    <div class="notifications">
      <NotificationIcon style="height: 22px; width: 19px;" filled/>
    </div>
    <div class="languages">
      <strong>LV</strong>
      <p class="language-selector">EN</p>
    </div>
    <div class="profile-menu">
      <img :src="profileImage" alt="profile-image" class="profile-image">
      <span class="profile-name">
        Janis D.
      </span>
    </div>
  </div>
</template>

<style scoped>
  .nav{
    display: flex;
    align-items: center;
    column-gap: 25px;
  }

  .notifications{
    cursor: pointer;
  }
  
  .language-selector{
    display: none;
    font-weight: 700;
    font-size: 20px;
  }

  .languages:hover{
    color: #3DCE15;
  }

  .languages:hover .language-selector{
    display: block;
    position: absolute;
  }

  .profile-menu{
    width: 130px;
    height: 50px;
    padding: 10px 15px;
    background-color: #f4f4f4;
    border-radius: 50px;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .profile-image{
    border-radius: 20px;
    height: 32px;
  }
</style>