<script setup lang="ts">
import PdfIcon from "assets/icons/pdf.svg";
import Button from "~/components/ui/Button.vue";

definePageMeta({
  layout: 'user',
})

useHead({
  title: "Portfolio"
})

const testData = [
  {
    id: 5165665,
    name: "House",
    lastPayment: "25.11.2024",
    investmentInterest: "9.5",
    date: "25.11.2023",
    assetValue: "9.5",
    amount: "5000"
  },
  {
    id: 5163465,
    name: "Flat",
    lastPayment: "25.11.2024",
    investmentInterest: "1.0",
    date: "12.11.2023",
    assetValue: "6.5",
    amount: "5000"
  },
  {
    id: 5162365,
    name: "Land",
    lastPayment: "25.11.2024",
    investmentInterest: "5",
    date: "05.01.2023",
    assetValue: "7",
    amount: "5000"
  },
  {
    id: 5165381,
    name: "House",
    lastPayment: "25.11.2024",
    investmentInterest: "9.5",
    date: "25.11.2023",
    assetValue: "9.5",
    amount: "5000"
  },
]
</script>

<template>
  <div class="investment">
    <div class="investment-top">
      <h1>My Investments</h1>
      <Button>View all reports</Button>
    </div>
    <table class="table-styling">
      <tbody>
      <tr>
        <th>Loan ID</th>
        <th>Date</th>
        <th>Last payment</th>
        <th>Inv. interest</th>
        <th>Asset value</th>
        <th>Amount</th>
      </tr>
      <tr v-for="user in testData">
        <td class="loan-details">
          <PdfIcon :style="{width:'30px',height:'36px'}" filled/>
          <div class="user-info">
            <p>{{user.name}}</p>
            <p>{{user.id}}</p>
          </div>
        </td>
        <td>{{user.date}}</td>
        <td>{{user.lastPayment}}</td>
        <td>{{user.investmentInterest}}</td>
        <td>{{user.assetValue}}</td>
        <td>$ {{user.amount}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.investment {
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px 0px #00000014;
}

.investment-top {
  display: flex;
  justify-content: space-between;
}

.table-styling {
  border-spacing: 20px 37px;
  font-size: 18px;
  text-align: left;
}

.loan-details {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 8px;
}
</style>