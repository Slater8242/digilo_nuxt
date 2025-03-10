<script setup lang="ts">
import Button from '../ui/Button.vue';

const props = defineProps<{
  paymentData: Record<string, number>; // Expecting an object with date strings as keys and numbers as values
}>();

const date = ref(new Date())

const attrs = ref([
{
  key: "",
  highlight: {
    style:{
      backgroundColor: "#3dce15",
      borderRadius: "7px",
      padding: "10px"
    },
  },
  dates: new Date(),
},
]);

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
</script>

<template>
  <div class="calendar">
    <div class="deferred-payment-date">
      <p class="title">Atliktais maksājuma datums</p>
      <div class="date">
        <span class="day">
          {{ date.getDate() }}
        </span>
        <span class="month">
          {{ months[date.getMonth()] }}
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
      :attributes="attrs"
      :select-attribute="selectAttribute"
      title-position="left"
      borderless
    />
    </div>
</template>

<style scoped>
.calendar{
  display: flex;
}

.deferred-payment-date{
  color: var(--text-white);
  background-color: var(--bg-black);
}

.title{
  font-size: var(--body1-mobile);
}

.date{
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: center;
}

.day{
  grid-row: 1/3;
  font-size: var(--h2-desktop);
  font-weight: bold;
}

.amount{
  color: var(--text-green);
}
</style>