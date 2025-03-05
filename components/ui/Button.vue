<script setup lang="ts">
const props = defineProps({
  size:{
    type: String,
    default: "medium",
    validator: (value:string) => ["big","small","medium"].includes(value)
  }
});

const buttonClasses = computed(() => ({
  button: true, // общий стиль кнопки
  small: props.size === "small",
  medium: props.size === "medium",
  big: props.size === "big",
}));
</script>

<template>
  <button class="button" :class="buttonClasses">
    <slot/>
  </button>
</template>

<style scoped>
.button{
  border: 2px solid transparent;
  border-radius: 40px;
  color: var(--text-white);
  background-image: linear-gradient(180deg, #5EED36 0%, #2E7F17 100%), linear-gradient(180deg, #5EED36 0%, #2E7F17 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  &:hover{
    background: var(--text-white);
    color: var(--main);
    border-color: var(--main);
  }
  &:active{
    color: var(--text-black);
    background: var(--text-white);
    border-color: var(--text-black);
  }
}

.big{
  padding: 14px 74px;
  font-size: 25px;
}

.medium{
  padding: 7px 26px;
  font-size: 16px;
}
</style>