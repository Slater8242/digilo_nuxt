<script setup lang="ts">
  definePageMeta({
    layout: "user"
  })

  useHead({title: "Profile"})

  import Popup from "~/components/popups/Popup.vue";

  const fields = ref([
    { label: "Vārds", name: "first-name", type: "text", value: "" },
    { label: "Uzvārds", name: "last-name", type: "text", value: "" },
    { label: "Company name", name: "company-name", type: "text", value: "" },
    { label: "E-pasts", name: "email", type: "email", value: "" },
    { label: "Tel.nr ", name: "phone-number", type: "text", value: "" },
    { label: "Deklarētā dzīvesvietas adrese:", name: "declared-residential-address", type: "text", value: "" },
    { label: "Faktiskā dzīvesvietas adrese: ", name: "factical-residential-address", type: "text", value: "" },
  ]);

  const isPopupVisible = ref(false);
  const avatar = ref<string | null>(null);

  function togglePopup() {
    isPopupVisible.value = !isPopupVisible.value;
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) return;

    const file: File = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && typeof e.target.result === "string") {
        avatar.value = e.target.result;
      }
    };
  }
</script>

<template>
  <div class="avatar-container">
    <img v-if="avatar" :src="avatar" alt="avatar" class="avatar"/>
    <div v-else class="placeholder">Izvēlieties attēlu</div>
    <label class="upload-avatar">
      <input type="file" name="" id="" accept="image/*" @change="handleFileChange" hidden/>
    </label>
  </div>
  <form action="" class="profile-form">
    <div class="full-name">
      <div class="input-group" v-for="field in fields.slice(0, 2)" :key="field.name">
        <label :for="field.name">
          {{ field.label }}
        </label>
        <input v-model="field.value" :type="field.type" :id="field.name" class="form-input" />
      </div>
    </div>
    <div class="input-group" v-for="field in fields.slice(2)" :key="field.name">
      <label :for="field.name">{{ field.label }}</label>
      <input
          :type="field.type"
          :id="field.name"
          :value="field.value"
          class="form-input">
    </div>
    <div class="input-group password">
      <label for="password">Parole</label>
      <input
          type="password"
          id="password"
          value=""
          class="form-input">
      <label class="change-password" @click="togglePopup">Mainīt paroli</label>
    </div>
  </form>
  <Popup
      class="popup"
      :content-style="{maxWidth:'576px'}"
      :show="isPopupVisible"
      @close="togglePopup"
  >
    <ResetPassword/>
  </Popup>
</template>

<style scoped>
label{
  color: #7E7E7E;
  margin-bottom: 6px;
}

.password{
  position: relative;
}

.change-password{
  position: absolute;
  bottom: -35px;
  right: 0;
  cursor: pointer;
}

.avatar-container {
  position: relative;
  width: 160px;
}

.avatar {
  border-radius: 160px;
  width: 160px;
}

.upload-avatar {
  position: absolute;
  bottom: 15px;
  right: 0;
  cursor: pointer;
}

.upload-avatar::before{
  content: url("@/assets/icons/change-image-green.svg");
}
.upload-avatar:hover::before{
  content: url("@/assets/icons/change-image-white.svg");
}

.placeholder{
  width: 160px;
  height: 160px;
  border-radius: 160px;
  border: 2px dashed #C0C0C0;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-group{
  display: flex;
  flex-direction: column;
}

.profile-form{
  display: grid;
  column-gap: 40px;
  row-gap: 20px;
}

.full-name{
  display: flex;
  column-gap: 20px;
}

#first-name, #last-name{
  width: 170px;
}

.form-input{
  font-size: 18px;
  padding: 12px 26px;
  border-radius: 15px;
  border: 1px solid #C0C0C0;
  max-width: 360px;
}

.popup{
  h1{
    font-size: 22px;
  }
  p{
    font-size: 20px;
  }
  .input-group{
    margin: 27px 0;
  }
}
</style>