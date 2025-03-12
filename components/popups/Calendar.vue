<script setup lang="ts">
import Button from '../ui/Button.vue';

const props = defineProps<{
  paymentData: Record<string, number>; // Expecting an object with date strings as keys and numbers as values
  show: boolean;
}>();


const today = new Date();
const date = ref(today);

const tomorrow = new Date();
const disabledDates = ref([{ start: tomorrow.setDate(today.getDate()+1), end: null }]);

const selectAttribute = ref({
  highlight: {
    style:{
      backgroundColor: "#3dce15",
      borderRadius: "7px",
    },
  }
})

// Current selected amount to pay
const amountToPay = ref<number | null>(null);

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Watch for changes in the selected date and fetch the corresponding amount
watch(date, (newDate) => {
  const dateString = newDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  amountToPay.value = props.paymentData[dateString] || null; // Get the amount or null if not found
});

const emit = defineEmits(["close"]);

function closePopup() {
  emit("close");
}
</script>

<template>
  <div v-if="props.show" class="popup-overlay" @click.self="closePopup">
    <div class="calendar">
      <div class="deferred-payment-date">
        <p class="title">Atliktais maksājuma datums</p>
        <div class="date">
          <span class="day">
            {{ date.getDate() }}
          </span>
          <span class="month">
            {{ months[date.getMonth()].slice(0,3) }}.
          </span>
          <span class="year">
            {{ date.getFullYear() }}
          </span>
        </div>
        <div class="amount-to-pay" v-if="amountToPay !== null">
          <p>
            Summa apmaksai
          </p>
          <p class="amount">
            {{ amountToPay }} $
          </p>
        </div>
        <Button variant="secondary2-mobile">Apsitptināt</Button>
      </div>
      <VDatePicker
        v-model="date" 
        :select-attribute="selectAttribute"
        title-position="left"
        borderless
        expanded
        :disabled-dates="disabledDates"
      />
    </div>
  </div>
</template>

<style scoped>
.calendar{
  display: flex;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.deferred-payment-date{
  text-align: center;
  color: var(--text-white);
  background-color: var(--bg-black);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 25px 28px 38px;
}

.title{
  font-size: var(--body1-mobile);
}

.date{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.day{
  grid-row: 1/3;
  font-size: var(--h2-desktop);
  font-weight: bold;
}

.amount-to-pay{
  margin-bottom: 30px;
}

.amount{
  color: var(--text-green);
}

.calendar :deep(.vc-container){
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 25px;
}
</style>