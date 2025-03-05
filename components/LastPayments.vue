<script setup lang="ts">
import PdfIcon from "@/assets/icons/pdf.svg"

const testData = [
  {
    id: 5165665,
    name: "Janis Dzenis",
    accountNumber: "2345678",
    paymentNumber: "12345678",
    date: "25.11.2023",
    status: "active",
    amount: "5000"
  },
  {
    id: 5165665,
    name: "Janis Dzenis",
    accountNumber: "2345678",
    paymentNumber: "12345678",
    date: "25.11.2023",
    status: "pending",
    amount: "5000"
  },
  {
    id: 5165665,
    name: "Janis Dzenis",
    accountNumber: "2345678",
    paymentNumber: "12345678",
    date: "25.11.2023",
    status: "declined",
    amount: "5000"
  },
  ]

</script>

<template>
<table class="table-styling">
  <tbody>
    <tr>
      <th>Aizdevuma dati</th>
      <th>Rēķina numurs</th>
      <th>Maksājuma Nr.</th>
      <th>Datums </th>
      <th>Status</th>
      <th>Summa</th>
    </tr>
    <tr v-for="user in testData">
      <td class="loan-details">
        <PdfIcon :style="{width:'30px',height:'36px'}" filled/>
        <div class="user-info">
          <p>{{user.name}}</p>
          <p>{{user.id}}</p>
        </div>
      </td>
      <td>{{user.accountNumber}}</td>
      <td>{{user.paymentNumber}}</td>
      <td>{{user.date}}</td>
      <td :class="user.status">{{user.status}}</td>
      <td>$ {{user.amount}}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
.table-styling {
  padding: 40px 30px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px 0px #00000014;
  border-spacing: 20px 37px;
  font-size: 18px;
}

.loan-details {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 8px;
}

.user-info {
  p:nth-child(2) {
    color: #7e7e7e;
  }
}

.active{
  color: #3DCE15;
}

.pending{
  color: #F3640F;
}

.declined{
  color: #D31F1F;
}
</style>