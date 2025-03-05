<script setup lang="ts">
import Button from "~/components/ui/Button.vue";

const avatar = ref<string | null>(null);
const file = ref(null);
const fileInput = ref(null);


const handleFileChange=(event: Event) => {
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

const selectFile = () => {
  // fileInput.value.click();
  console.log("clicked")
}

const handleDrop = (event) => {
  const files = event.dataTransfer.files;
  if (files.length) {
    file.value = files[0];
  }
}
</script>

<template>
  <div
      class="upload-photos"
      @dragover.prevent
      @dragenter.prevent
      @dragleave.prevent
      @drop.prevent="handleDrop"
  >
    <span style="font-size: var(--h6-desktop)">Upload photos</span>
    <div class="upload-avatar">
      <img src="@/assets/icons/upload.png" alt="upload" width="65" height="56">
      <div class="text">
        <p style="font-size: var(--body2-mobile)">
          Drop your image here, or
          <strong class="browse" @click="selectFile">browse</strong>
        </p>
        <p style="font-size: var(--text-placeholder-mobile)">Supports: PNG, JPG, JPEG, WEBP</p>
      </div>
      <input type="file" name="" id="" accept="image/*" @change="handleFileChange" hidden/>
    </div>
    <div v-if="file">

    </div>
    <Button>Save</Button>
  </div>
</template>

<style scoped>
.upload-avatar{
  width: 477px;
  height: 193px;
  margin-top: 16px;
  margin-bottom: 30px;
  border: 2px dashed var(--stroke-dark-green);
  border-radius: 10px;
  border-image-source: url("https://i.sstatic.net/wLdVc.png");
  border-image-slice: 2;
  border-image-repeat: round;
  display: grid;
  align-content: center;
  justify-items: center;
  text-align: center;
}

.browse{
  cursor: pointer;
}

.text {
  margin-top: 15px;
}

</style>