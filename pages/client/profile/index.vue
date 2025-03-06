<script setup lang="ts">
import Popup from "~/components/popups/Popup.vue";
import ResetPassword from "~/components/popups/ResetPassword.vue";
import UploadPhotos from "~/components/popups/UploadImages.vue";

definePageMeta({
  layout: "user"
})

useHead({
  title: "Profile",
})

const fields = ref([
  { label: "Vārds", name: "first-name", type: "text", value: "" },
  { label: "Uzvārds", name: "last-name", type: "text", value: "" },
  { label: "Dokumenta veids", name: "document-type", type: "text", value: "" },
  { label: "E-pasts", name: "email", type: "email", value: "" },
  { label: "Dokumenta numurs", name: "document-number", type: "text", value: "" },
  { label: "Tel.nr ", name: "phone-number", type: "text", value: "" },
  { label: "Derīga līdz", name: "expiration-date", type: "text", value: "" },
  { label: "Deklarētā dzīvesvietas adrese:", name: "declared-residential-address", type: "text", value: "" },
  { label: "Bankas konta numurs", name: "bank-account", type: "text", value: "" },
  { label: "Faktiskā dzīvesvietas adrese: ", name: "factical-residential-address", type: "text", value: "" },
]);

const uploadImagePopup = ref(false);
const resetPasswordPopup = ref(false);

const avatar = ref<string | null>(null);

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
    <label class="upload-avatar" @click="uploadImagePopup = true"/>
  </div>
  <Popup :show="uploadImagePopup" @close="uploadImagePopup = false">
    <UploadPhotos />
  </Popup>
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
      <label class="change-password" @click="resetPasswordPopup = true">Mainīt paroli</label>
    </div>
  </form>
  <Popup
      :show="resetPasswordPopup"
      @close="resetPasswordPopup = false"
      class="popup"
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
  grid-template-columns: 360px 360px;
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
  border: 1px solid #C0C0C0
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