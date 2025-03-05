<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  selected: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
});

const emit = defineEmits(['update:selected']);

const isOpen = ref(false);
const selectedOption = ref(props.selected || null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit('update:selected', option);  // Emit the selected option to the parent component
  isOpen.value = true;
};
</script>

<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-button">{{ selectedOption || placeholder }} <span>&#9660;</span></button>
    <div v-if="isOpen" class="dropdown-menu">
      <ul>
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 460px;
  box-shadow: 2px 2px 10px 0px #00000040;
  border-radius: 15px;
  color: var(--text-placeholder-color);
}

.dropdown-button {
  width: inherit;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  color: inherit;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #3DCE15;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 0px #00000040;
  width: 100%;
  z-index: 1;
  top: 100%;
  left: 0;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}
</style>