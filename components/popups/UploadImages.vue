<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import PauseIcon from "@/assets/icons/pause.svg"
import CancelIcon from "@/assets/icons/cancel.svg"
import SuccessIcon from "@/assets/icons/success.svg"

const images = ref([]);
const fileInput = ref(null);
const progressValue = ref(100);

const selectFile = () => {
  fileInput.value.click();
}

const handleFileSelect = (event)=>{
  let file;
  if (event.dataTransfer){
    file = event.dataTransfer.files[0]
  } else if (event.target){
    file = event.target.files[0]
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target && typeof e.target.result === "string") {
      const newItem = {img: e.target.result, data: file}
      images.value.push(newItem);
    }
  };
}

function formatBytes(bytes:number) {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  } else if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  } else {
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  }
}
</script>

<template>
  <div
      class="upload-photos"
      @dragover.prevent
      @dragenter.prevent
      @dragleave.prevent
      @drop.prevent="handleFileSelect"
  >
    <span style="font-size: var(--h6-desktop)">Upload photos</span>
    <div class="upload-avatar" @click="selectFile">
      <img src="@/assets/icons/upload.png" alt="upload" width="65" height="56">
      <div class="text">
        <p style="font-size: var(--body2-mobile)">
          Drop your image here, or
          <strong>browse</strong>
        </p>
        <p style="font-size: var(--text-placeholder-mobile)">Supports: PNG, JPG, JPEG, WEBP</p>
      </div>
      <input type="file" ref="fileInput" accept="image/*" @change="handleFileSelect" hidden/>
    </div>
    <div v-if="images" v-for="image in images" class="image-load">
      <div class="image-details">
        <div class="image-info">
          <img :src="image.img" alt="image">
          <div class="info-container">
            <span class="size" :class="{'success': progressValue===100}">{{image.data.name}}</span>
            <span class="title">{{formatBytes(image.data.size)}}</span>
          </div>
        </div>
        <div class="upload-icons">
          <PauseIcon v-if="progressValue!==100" style="height: 20px; width: 20px" filled/>
          <CancelIcon style="height: 20px; width: 20px" filled/>
          <SuccessIcon v-if="progressValue===100" style="height: 20px; width: 20px" filled/>
        </div>
      </div>
      <div class="progress">
        <progress :value="progressValue" max="100"></progress>
        <span>{{progressValue}}%</span>
      </div>
    </div>
    <Button variant="tertiary">Save</Button>
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
  cursor: pointer;
}

.text {
  margin-top: 15px;
}

.image-load{
  display: grid;
  row-gap: 10px;
  border: 1px solid var(--text-grey);
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 30px;
}

.image-details{
  display: flex;
  justify-content: space-between;
}

.image-info{
  width: 160px;
  display: grid;
  grid-template-columns: 50px 1fr;
}

.image-info img{
  width: 36px;
  height: 36px;
  border-radius: 6px;
}

.info-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.size{
  font-size: 10px;
}

.success{
  color: var(--text-green);
}

.title{
  font-size: 8px;
  color: var(--text-placeholder-color);
}

.upload-icons{
  display: flex;
  column-gap: 9px;
}

.progress{
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 8px;
  color: var(--text-placeholder-color);
}

progress{
  appearance: none;
  width: 100%;
  height: 5px;
}

progress::-webkit-progress-bar {
  border-radius: 4px;
  background-color: var(--bg-grey);
}

progress::-webkit-progress-value {
  border-radius: 4px;
  background-color: var(--text-green);
}
</style>