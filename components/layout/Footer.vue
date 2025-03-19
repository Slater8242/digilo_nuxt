<script setup lang="ts">
import Logo from "@/assets/icons/white-logo.svg"
import FacebookIcon from "@/assets/icons/facebook.svg"
import InstagramIcon from "@/assets/icons/instagram.svg"
import LinkedinIcon from "@/assets/icons/linkedin.svg"

const socialArray = [{
    name: "instagram",
    link: "https://www.instagram.com/",
    icon: InstagramIcon
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/",
    icon: FacebookIcon
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/",
    icon: LinkedinIcon
  }]
</script>

<template>
<footer>
  <div class="container">
    <div class="logo-socials">
      <Logo :style="{fontSize:'85px'}" filled/>
      <ul class="socials">
        <li v-for="social in socialArray" :key="social.name">
          <NuxtLink :to="social.link">
            <component :is="social.icon" style="font-size: 30px;" filled/>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="menu">
      <h3>Menu</h3>
    </div>
    <div class="nav">
        <ul class="nav-list">
          <NuxtLink to="#">
            <li>{{ $t("pages.loans") }}</li>
          </NuxtLink>
          <NuxtLink to="#">
            <li>{{ $t("pages.profile") }}</li>
          </NuxtLink>
          <NuxtLink to="#">
            <li>{{ $t('pages.chat') }}</li>
          </NuxtLink>
        </ul>
      <div class="nav-login-lang">
        <NuxtLink class="nav-login-btn" to="/login">Log in</NuxtLink>
        <LangSwitcher />
      </div>
    </div>
    <div class="policy">
      <ul>
        <NuxtLink to="#">
          <li>{{ $t('pages.help') }}</li>
        </NuxtLink>
      </ul>
      <ul>
        <NuxtLink to="#">
          <li>{{ $t('pages.terms') }}</li>
        </NuxtLink>
      </ul>
    </div>
    <div class="information">
      <p>Reģ. nr.: 40103162565</p>
      <p>Valtera Gatve 23/4, Rīga, Latvia</p>
    </div>
  </div>
</footer>
</template>

<style scoped>
footer {
  color: #fdfdfd;
  background-color: #202020;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 40px;
}

.nuxt-icon{
  height: inherit;
  margin-bottom: 0;
}

footer ul{
  list-style-type: none;
}

.container{
  width: 272px;
  margin: 0 auto;
}

.logo-socials {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 25px;
}

.socials {
  display: flex;
  list-style-type: none;
  column-gap: 12px;
}

.menu{
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #3DCE15;
}

.nav{
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #7e7e7e;
}

.nav li, .policy li{
  &:hover{
    color: #3DCE15;
  }
}

.nav-list, .nav-login-lang{
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.nav-login-lang{
  align-items: end;
}

.nav-login-btn{
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: #3DCE15;
  color: inherit;
  padding: 9px 29px;
  &:hover{
    background-color: #2e7f17;
  }
  &:active{
    background-color: #fdfdfd;
    color: #2e7f17;
    border-color: #2e7f17;
  }
}

.policy{
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.information{
  margin-top: 16px;
  text-align: right;
}

@media (min-width:641px){
  .container{
    width: 576px;
    font-size: 16px;
  }

  .menu{
    width: 277px;
  }

  .logo-socials{
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-list, .nav-login-lang{
    flex-direction: row;
  }

  .nav-list{
    column-gap: 30px;
    align-items: center;
  }
  
  .nav-login-lang{
    flex-direction: row-reverse;
    column-gap: 50px;
    align-items: center;
  }

  .policy{
    flex-direction: row;
    column-gap: 30px;
  }
}

@media (min-width:1281px) {
  .container{
    width: 1160px;
    font-size: 20px;
  }

  .menu{
    width: 314px;
  }

  .nav-list{
    column-gap: 50px;
  }
}
</style>