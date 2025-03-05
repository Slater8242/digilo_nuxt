<script setup lang="ts">
import Progress from "./Progress.vue";

const props = defineProps(["contractNumber", "nextPaymentAmount", "paymentDeadline", "loanAmount"])
const {contractNumber, nextPaymentAmount, loanAmount, paymentDeadline} = props
</script>

<template>
  <div class="contract">
    <div class="contract-details">
      <div class="contract-details-number">
        <h1 class="contract-number">{{ contractNumber }}</h1>
      </div>
      <div class="contract-info">
        <div class="contract-next-payment">
        <span class="small-text">
          Nākamais ikemnēša maksājums
        </span>
          <h1>$ {{nextPaymentAmount}}</h1>
        </div>
        <div class="contract-payment-deadline">
          <span class="small-text">Apmaksās termiņš</span>
          <h1>{{paymentDeadline}}</h1>
        </div>
        <div class="contract-loan-amount">
          <span class="small-text">Aizdevuma summa</span>
          <h1>$ {{loanAmount}}</h1>
        </div>
      </div>
    </div>
    <div class="contract-progress">
      <Progress :size="120" :stroke-width="5" :progress="67"/>
      <span class="small-text">Veikti maksājumi 12/50</span>
    </div>
  </div>
</template>

<style scoped>
.contract {
  display: flex;
}

.contract-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  padding: 25px;
  border: 1px solid #3DCE15;
  border-radius: 20px;
  background-color: #fdfdfd;
  box-shadow: 2px 2px 10px 0 #00000014;

}

.contract-info{
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  column-gap: 20px;
  margin-top: 20px;
}

.contract-progress {
  padding: 25px 46px;
  border: 1px solid #3DCE15;
  border-radius: 20px;
  background-color: #fdfdfd;
  text-align: center;
  box-shadow: 2px 2px 10px 0 #00000014;
  .small-text{
    white-space: nowrap;
  }
}
</style>