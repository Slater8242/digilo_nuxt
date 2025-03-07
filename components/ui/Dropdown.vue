<script setup>
import { ref } from "vue";

const props = defineProps({
  options: Array,
  placeholder: String,
  modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const selectItem = (item) => {
  emit("update:modelValue", item);
  isOpen.value = false;
};
</script>

<template>
  <div class="dropdown-container">
    <div
        class="dropdown-input"
        @click="isOpen = !isOpen"
    >
      <span
          class="dropdown-placeholder"
          :class="{ 'active': modelValue || isOpen }"
      >
        {{ placeholder }}
      </span>
      <span class="dropdown-selected">{{ modelValue ? modelValue.label : "" }} </span>
      <span class="triangle">&#9660;</span>
    </div>

    <ul v-if="isOpen" class="dropdown-list">
      <li
          v-for="option in options"
          :key="option.value"
          class="dropdown-item"
          @click="selectItem(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Контейнер выпадающего списка */
.dropdown-container {
  position: relative;
  width: 460px;
  color: var(--text-placeholder-color);
}

/* Инпут для отображения выбр0анного значения */
.dropdown-input {
  height: 48px;
  padding: 12px 26px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  box-shadow: 2px 2px 10px #00000040;
}

/* Плейсхолдер */
.dropdown-placeholder {
  position: absolute;
  left: 26px;
  top: 12px;
  font-size: 18px;
  transition: all 0.3s;
}

/* Когда элемент выбран или выпадающий список открыт, плейхолдер поднимется */
.dropdown-placeholder.active {
  top: -25px;
  font-size: 14px;
}

/* Отображение выбранного значения */
.dropdown-selected {
  margin-top: 5px;
  color: var(--text-black);
  font-size: 18px;
}

.triangle {
  position: absolute;
  top: 15px;
  right: 26px;
}

/* Список элементов */
.dropdown-list {
  position: absolute;
  width: 100%;
  top: -5px;
  left: 0;
  border: 1px solid var(--main);
  border-radius: 15px;
  background-color: var(--bg-white);
  box-shadow: 2px 2px 10px 0px #00000040;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
}

/* Элемент списка */
.dropdown-item {
  padding: 12px;
  cursor: pointer;

  &:hover {
    color: var(--text-green);
  }
}
</style>
