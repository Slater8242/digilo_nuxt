<script setup lang="ts">
import DocumentsIcon from "assets/icons/documents.svg";
import CardsIcon from "assets/icons/cards.svg";
import Button from "~/components/ui/Button.vue";

const activeTab = ref("banks");
const paymentSuccess = ref(false);

const setActiveTab = (choosenTab: string) => {
  activeTab.value = choosenTab;
}

const handleSubmit = () => {
  paymentSuccess.value = true;
}
</script>

<template>
  <div v-if="paymentSuccess" class="payment-success">
    <img src="../../assets/images/success.png" alt="">
    <h2>Maksājums ir apstrādē</h2>
    <p>Tavs maksājums mus sasniegs jau tuvākajā laikā.</p>
  </div>

  <div v-else class="frame">
    <span style="font-size: 22px; font-weight: bold">Izvēleties apmaksas metodi </span>
    <div class="payment-methods">
      <div
          class="banks"
          :class="{active: activeTab === 'banks'}"
          @click="setActiveTab('banks')"
      >
        <CardsIcon/>
        <p>Banks</p>
      </div>
      <div
          class="bank-details"
          :class="{active: activeTab === 'bank-details'}"
          @click="setActiveTab('bank-details')"
      >
        <DocumentsIcon/>
        <p>Rekviziti</p>
      </div>
    </div>

    <form v-if="activeTab === 'banks'" @submit.prevent="handleSubmit" class="form">
      <div class="payment-data input">
        <p>Maksājuma mērķis</p>
        <input type="text" name="" id="">
      </div>
      <div class="payment-data input">
        <p>Summa apmaksai (ar PVN)</p>
        <input type="text" name="" id="">
      </div>

      <div class="banks-option">
        <span>
          <img src="../../assets/images/swedbank.png" alt="swedbank">
        </span>
        <span>
          <img src="../../assets/images/luminor.png" alt="luminor">
        </span>
        <span>
          <img src="../../assets/images/SEB.png" alt="seb">
        </span>
        <span>
          <img src="../../assets/images/citadele.png" alt="citadele">
        </span>
      </div>
      <Button size="big" style="width: 232px">Maksāt</Button>
    </form>

    <div v-if="activeTab === 'bank-details'" class="details-window">
      <p><strong>SIA Digital Investment MGMT</strong></p>
      <p>Reģ. nr.: 40103162565</p>
      <p>PVN nr.: LV40103162565</p>
      <p>Banka: BluOr Bank AS</p>
      <p>Norēķinu konts: LV27 CBBR 1127 3658 0001 0</p>
    </div>
  </div>
</template>

<style scoped>
.payment-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
}

.frame{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  /*align-items: center;*/
}

.payment-methods{
  display: flex;
  column-gap: 20px;
}

.banks, .bank-details{
  color: var(--text-placeholder-color);
  border: 2px solid var(--text-placeholder-color);
  width: 127px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.input{
  font-size: 22px;
  width: 460px;
  height: 88px;
  padding: 12px 26px;
  border-radius: 15px;
  border:none;
  box-shadow: 2px 2px 10px 0px #00000040;
}

.form{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
}

.payment-data{
  color: var(--text-placeholder-color);
  font-size: var(--text-placeholder-desktop);
}

.payment-data input{
  width: 100%;
  margin-top: 10px;
  font-size: 22px;
  border: none;
}

.details-window{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 18px;
}

.banks-option{
  display: grid;
  grid-template-columns: 215px 215px;
  gap: 30px;
}

.banks-option span{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 31px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px 0px #00000040;
}

.banks-option span:hover{
  background-color: #f4f4f4;
}

.active{
  color: #3DCE15;
  border-color: #3DCE15;
}
</style>