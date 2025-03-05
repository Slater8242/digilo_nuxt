<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(["size", "strokeWidth", "progress"]);
const {size, strokeWidth, progress} = props;

// Радиус и окружность круга
const radius = computed(() => (size - strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)

// Смещение линии прогресса для отображения процента
const progressOffset = computed(() => {
  return circumference.value - (progress / 100) * circumference.value
})
</script>

<template>
  <div class="progress-wrapper" :style="{width: size, height: size}">
    <svg class="progress-ring" :width="size" :height="size">
      <defs>
        <!-- Фильтр для внутренней тени -->
        <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feOffset dx="0" dy="0" result="offsetBlur" />
          <feComposite in="offsetBlur" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feFlood flood-color="black" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>
      </defs>
      <!-- Тень круга -->
      <circle
          class="progress-ring-shadow"
          :r="radius"
          :cx="size / 2"
          :cy="size / 2"
          :stroke-width="strokeWidth"
      />
      <!-- Основной прогресс -->
      <circle
          class="progress-ring-circle"
          :r="radius"
          :cx="size / 2"
          :cy="size / 2"
          :stroke-width="strokeWidth"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progressOffset"
      />
    </svg>
    <div class="progress-text">{{ progress }}%</div>
  </div>
</template>


<style scoped>
.progress-wrapper {
  position: relative;
  display: inline-block;
}

.progress-ring-shadow {
  fill: none;
  stroke: #fdfdfd;
  opacity: 0.1; /* Прозрачность тени */
}

.progress-ring-circle {
  fill: none;
  stroke: #3DCE15; /* Цвет прогресса */
  stroke-linecap: round; /* Скругленные края */
  transition: stroke-dashoffset 0.35s; /* Анимация прогресса */
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  color: inherit;
  font-weight: 200;
}
</style>
