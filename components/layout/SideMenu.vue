<script setup lang="ts">
import Logo from "@/assets/icons/black-logo.svg"
import ProfileIcon from "@/assets/icons/profile.svg"
import ChatIcon from "@/assets/icons/mail.svg"
import LoanIcon from "@/assets/icons/loan.svg"
import HelpIcon from "@/assets/icons/help.svg"
import LogoutIcon from "@/assets/icons/logout.svg"
import useAuthStore from "@/store/auth";

const authStore = useAuthStore();
const route = useRoute();

const isActive = (path:string) => {
  return route.path === path
};

const capitalizeFirstLetter=(val:string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const logout = ()=>{
  authStore.logout();
  console.log("click");  
}
</script>

<template>
  <div class="side-menu">
    <ul class="top-menu">
      <li class="logo">
        <NuxtLink to="/">
          <Logo :style="{width:'127px', height: '45px'}" filled/>
        </NuxtLink>
      </li>
      <li class="menu-item" :class="{ active: isActive('/client/loans') }">
        <NuxtLink to="loans">
          <LoanIcon filled/>
          {{ capitalizeFirstLetter($t(`sideMenu.loans`)) }}
        </NuxtLink>
      </li>
      <li class="menu-item" :class="{ active: isActive('/client/profile') }">
        <NuxtLink to="profile">
          <ProfileIcon filled/>
          {{ capitalizeFirstLetter($t(`sideMenu.profile`)) }}
        </NuxtLink>
      </li>
      <li class="menu-item" :class="{ active: isActive('/client/chat') }">
        <NuxtLink to="chat">
          <ChatIcon filled/>
          {{ capitalizeFirstLetter($t(`sideMenu.chat`)) }}
        </NuxtLink>
      </li>
    </ul>
    <ul class="bottom-menu">
      <li class="menu-item">
        <HelpIcon filled/>
        {{ capitalizeFirstLetter($t(`sideMenu.help`))}}
      </li>
      <li class="menu-item" @click="logout">
        <LogoutIcon filled/>
        {{capitalizeFirstLetter($t("sideMenu.logout"))}}
      </li>
      <li class="menu-item">
        {{capitalizeFirstLetter($t("sideMenu.terms"))}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

.side-menu {
  color: #7e7e7e;
  min-width: 240px;
  margin-left: 140px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
}

.top-menu, .bottom-menu {
  list-style-type: none;
  font-weight: 300;
  font-size: 22px;
}

.logo{
  margin-bottom: 20px;
}

.active{
  color: var(--text-white);
  border-radius: 10px;
  background-color: var(--main);
}

.menu-item{
  padding: 9px 13px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu-item a{
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.menu-item:not(.active):hover{
  cursor: pointer;
  border-radius: 10px;
  color: var(--text-black);
}
</style>