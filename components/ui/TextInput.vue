<script setup>
import { ref, computed } from "vue";

// Принимаем `v-model` через props
const props = defineProps({
  modelValue: String, // `v-model` привязан к этой переменной
  placeholder: String, // Передаем плейсхолдер как пропс
});

const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);

// Обработчик ввода (чтобы обновлять родительскую переменную через v-model)
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};

// Определяем, должен ли плейсхолдер подняться
const isPlaceholderActive = computed(() => isFocused.value || props.modelValue);
</script>

<template>
  <div class="input-container" :class="{'margin-top': isPlaceholderActive}">
    <input
        :value="modelValue"
        @input="updateValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        class="input-field"
        :class="{'active': isFocused}"
        type="text"
        id="custom-input"
        required
    />
    <label
        for="custom-input"
        class="input-placeholder"
        :class="{ 'active': isPlaceholderActive }"
    >
      {{ placeholder }}
    </label>
  </div>
</template>

<style scoped>
/* Контейнер */
.input-container {
  position: relative;
  width: 460px;
  height: 48px;
  transition: margin-top 0.3s ease;
}

.margin-top {
  margin-top: 19px;
}

/* Инпут */
.input-field {
  width: 100%;
  padding: 12px 26px;
  border-radius: 15px;
  font-size: 18px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 10px #00000040;
}

.input-field.active {
  border: 2px solid #3DCE15
}

/* Плейсхолдер */
.input-placeholder {
  position: absolute;
  top: 12px;
  left: 26px;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
  color: var(--text-placeholder-color);
}

/* Когда поле в фокусе или есть текст */
.input-placeholder.active {
  top: -21px;
  left: 26px;
  font-size: var(--text-placeholder-mobile);
}
</style>
