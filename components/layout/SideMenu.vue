<script setup lang="ts">
import Logo from "@/assets/icons/black-logo.svg"
import ProfileIcon from "@/assets/icons/profile.svg"
import ChatIcon from "@/assets/icons/mail.svg"
import LoanIcon from "@/assets/icons/loan.svg"
import HelpIcon from "@/assets/icons/help.svg"
import LogoutIcon from "@/assets/icons/logout.svg"
import PortfolioIcon from "@/assets/icons/portfolio.svg"
import useAuthStore from "@/store/auth";
import useUserStore from "~/store/user"

const authStore = useAuthStore();
const userStore = useUserStore();
const route = useRoute();

const isActive = (path:string) => {  
  return route.path.endsWith(path)
};

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
      <li v-if="userStore.role === 'user'">
        <NuxtLink to="loans" class="menu-item" :class="{ active: isActive('/loans') }">
          <LoanIcon filled/>
          {{ $t("pages.loans") }}
        </NuxtLink>
      </li>
      <li v-if="userStore.role === 'admin'">
        <NuxtLink to="overview" class="menu-item" :class="{ active: isActive('/overview') }">
          <LoanIcon filled/>
          {{ $t("pages.overview") }}
        </NuxtLink>
      </li>
      <li v-if="userStore.role === 'admin'">
        <NuxtLink to="portfolio" class="menu-item" :class="{ active: isActive('/portfolio') }">
          <PortfolioIcon filled/>
          {{ $t("pages.portfolio") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="profile" class="menu-item" :class="{ active: isActive('/profile') }">
          <ProfileIcon filled/>
          {{ $t("pages.profile") }}
        </NuxtLink>
      </li>
      <li v-if="userStore.role === 'user'">
        <NuxtLink to="chat" class="menu-item" :class="{ active: isActive('/chat') }">
          <ChatIcon filled/>
          {{ $t("pages.chat") }}
        </NuxtLink>
      </li>
    </ul>
    <ul class="bottom-menu">
      <li class="menu-item">
        <HelpIcon filled/>
        {{ $t("pages.help")}}
      </li>
      <li @click="logout" class="menu-item">
        <LogoutIcon filled/>
        {{$t("pages.logout")}}
      </li>
      <li class="menu-item">
        {{$t("pages.terms")}}
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