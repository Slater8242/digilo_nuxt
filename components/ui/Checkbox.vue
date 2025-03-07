<script setup>
defineProps({
  modelValue: Boolean,
  required:{
    type: Boolean,
    default: false
  }
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="checkbox">
    <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :required="required"
    />
    <span class="checkmark"></span>
    <slot></slot>
  </label>
</template>


<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox input {
  display: none;
}

.checkmark {
  min-width: 21px;
  min-height: 21px;
  border: 1px solid var(--text-green);
  border-radius: 4px;
  position: relative;
  display: inline-block;
  margin-right: 8px;
  transition: all 0.2s;
}

.checkbox input:checked + .checkmark {
  background-color: var(--text-green);
}

.checkbox input:checked + .checkmark::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 0;
  width: 7px;
  height: 11px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
