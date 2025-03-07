<script setup lang="ts">

import Button from "~/components/ui/Button.vue";
</script>

<template>
  <div class="reset-password">
    <div class="text">
      <h1>Reset Password</h1>
      <p>Enter your email to reset your password. We’ll send you an email with instrustions to change your password </p>
    </div>
    <div class="input-group">
      <input
          type="text"
          id="email"
          value=""
          class="form-input"
          placeholder="E-pasta">
    </div>
    <Button size="big">Nosūtīt</Button>
  </div>
</template>

<style scoped>
.reset-password {
  width: 576px;
  display: grid;
  row-gap: 30px;
}

.text{
  h1{
    margin-bottom: 16px;
  }
}

.form-input{
  font-size: 18px;
  padding: 12px 26px;
  border-radius: 15px;
  border: 1px solid #C0C0C0;
}

.input-group{
  display: flex;
  flex-direction: column;
}
</style>