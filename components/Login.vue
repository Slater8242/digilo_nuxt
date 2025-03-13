<script setup lang="ts">
import useAuthStore from '~/store/auth';
import Button from './ui/Button.vue';

const username = ref("averyp");
const password = ref("averyppass");
const errMessage = ref("");

const authStore = useAuthStore();

const handleSubmit = async ()=>{
  try{
    const res = await authStore.login(username.value, password.value);
    navigateTo("/investor")
  }catch(err){
    errMessage.value = "Invalid credentials"
  }
}
</script>

<template>
<div class="login">
  <h5 class="welcome-text">Laipni lūgts atpakaļ!  </h5>
  <form class="login-form" @submit.prevent="handleSubmit">
    <input 
      v-model="username"
      type="text" 
      name="user-number" 
      placeholder="Lietotāja numurs" 
      class="form-input"
      >
    <input 
      v-model="password"
      type="password" 
      name="password" 
      placeholder="Parole" 
      class="form-input"
      >
    <Button>Ienākt</Button>
  </form>
  <div v-if="errMessage">
    {{ errMessage }}
  </div>
  <div class="links">
    <NuxtLink to="#">
      <span>Aizmirsu savu paroli</span>
    </NuxtLink>
    <NuxtLink to="#">
      <h3>Izmantot citu veidu</h3>
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>
.login{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
}

.login-form{
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
}

.login-form button{
  border: 1px solid transparent;
  border-radius: 30px;
  padding: 12px 40px;
  background: linear-gradient(180deg, #5EED36 0%, #2E7F17 100%);
  color: #fdfdfd;
  background-origin: border-box;
  width: 176px;
  &:hover{
    background: #fdfdfd;
    border-color: #3dce15;
    color: #3dce15;
    cursor: pointer;
  }
  &:active{
    color: #202020;
    background: #fdfdfd;
    border-color: #202020;
  }
}

.welcome-text{
  font-size: 20px;
  text-align: center;
}

.form-input{
  font-size: 14px;
  width: 272px;
  padding: 12px 26px;
  border-radius: 15px;
  border:none;
  box-shadow: 2px 2px 10px 0px #00000040;
}

.links{
  text-align: center;
  span{
    font-size: 14px;
    color: #3DCE15;
  }
  h3{
    font-size: 16px;
    color: #202020;
  }
}

@media (min-width: 641px) {
  .welcome-text{
    font-size: 28px;
  }

  .login-form{
    button{
      font-size: 25px;
    }
  }

  .form-input{
    font-size: 16px;
    width: 376px;
  }

  .links{
    span{
      font-size: 18px;
    }
    h3{
      font-size: 20px;
    }
  }
}

@media (min-width: 1281px) {
  .welcome-text{
    font-size: 30px;
  }

  .login-form {
    button{
      font-size: 25px;
    }
  }

  .form-input{
    font-size: 18px;
    width: 460px;
  }

  .links{
    span{
      font-size: 20px;
    }
    h3{
      font-size: 22px;
    }
  }
}
</style>