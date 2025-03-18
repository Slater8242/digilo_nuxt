<script setup lang="ts">
import Logo from "@/assets/icons/black-logo.svg"
import ProfileIcon from "@/assets/icons/profile.svg"
import ChatIcon from "@/assets/icons/mail.svg"
import LoanIcon from "@/assets/icons/loan.svg"
import HelpIcon from "@/assets/icons/help.svg"
import LogoutIcon from "@/assets/icons/logout.svg"
import PortfolioIcon from "@/assets/icons/portfolio.svg"
import useAuthStore from "@/store/auth";

const authStore = useAuthStore();
const route = useRoute();

const isActive = (path:string) => {  
  return route.path.endsWith(path)
};

const capitalizeFirstLetter=(val:string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const logout = ()=>{
  authStore.logout();
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
      <li v-if="authStore.role === 'user'">
        <NuxtLink to="loans" class="menu-item" :class="{ active: isActive('/loans') }">
          <LoanIcon filled/>
          {{ capitalizeFirstLetter($t(`sideMenu.loans`)) }}
        </NuxtLink>
      </li>
      <li v-if="authStore.role === 'admin'">
        <NuxtLink to="overview" class="menu-item" :class="{ active: isActive('/overview') }">
          <LoanIcon filled/>
          Overview
          <!-- {{ capitalizeFirstLetter($t(`sideMenu.loans`)) }} -->
        </NuxtLink>
      </li>
      <li v-if="authStore.role === 'admin'">
        <NuxtLink to="portfolio" class="menu-item" :class="{ active: isActive('/portfolio') }">
          <PortfolioIcon filled/>
          Portfolio
          <!-- {{ capitalizeFirstLetter($t(`sideMenu.loans`)) }} -->
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="profile" class="menu-item" :class="{ active: isActive('/profile') }">
          <ProfileIcon filled/>
          {{ capitalizeFirstLetter($t(`sideMenu.profile`)) }}
        </NuxtLink>
      </li>
      <li v-if="authStore.role === 'user'">
        <NuxtLink to="chat" class="menu-item" :class="{ active: isActive('/chat') }">
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
      <li @click="logout" class="menu-item">
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
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 9px 13px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu-item:not(.active):hover{
  cursor: pointer;
  border-radius: 10px;
  color: var(--text-black);
}
</style>