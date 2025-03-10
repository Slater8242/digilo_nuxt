<script setup lang="ts">
const props = defineProps({
  size:{
    type: String,
    default: "medium",
    validator: (value:string) => ["big","small","medium"].includes(value)
  },
  variant: {
    type: String,
    default: "secondary"
  }
});

const buttonClasses = computed(() => ({
  button: false, // общий стиль кнопки
  small: props.size === "small",
  medium: props.size === "medium",
  big: props.size === "big",
}));
</script>

<template>
  <button :class="[buttonClasses, variant]">
    <slot/>
  </button>
</template>

<style scoped>
button {
  width: 232px;
  border-radius: 40px;
  cursor: pointer;
}

.secondary{
  border: 2px solid transparent;
  color: var(--text-white);
  background-image: linear-gradient(180deg, #5EED36 0%, #2E7F17 100%), linear-gradient(180deg, #5EED36 0%, #2E7F17 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
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

.secondary2-mobile{
  width: 140px;
  padding: 7px 24px;
  color: var(--text-white);
  border: 2px solid var(--text-white);
  background-color: transparent;
  &:hover{
    color: var(--text-green);
    border-color: var(--text-green);
  }
}

.tertiary{
  background-color: var(--main);
  color: var(--text-white);
  border-color: transparent;
  &:hover{
    background-color: #2E7F17;
  }
  &:active{
    background-color: var(--text-white);
    border-color: #2E7F17;
    color: #2E7F17;
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