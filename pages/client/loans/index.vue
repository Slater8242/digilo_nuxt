<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import PdfIcon from "@/assets/icons/pdf.svg"
import avatar from "@/assets/images/avatar.png"
import sliderImage from "@/assets/images/slider-image.jpeg"
import {Progress, Contract} from "#components";
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import Popup from "~/components/popups/Popup.vue";
import pdfFile from "@/public/sample.pdf"
import PaymentMethods from "~/components/popups/PaymentMethods.vue";
import Button from "~/components/ui/Button.vue";
import Calendar from '~/components/popups/Calendar.vue';

definePageMeta({
  layout: "user"
})

useHead({
  title: "Loans",
})

const paymentMethodsPopup = ref(false);
const paymentCalendarPopup = ref(false);

const images = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  url: sliderImage,
}));

const config = {
  autoplay: 5000,
  height: 200,
  itemsToShow: 1.3,
  gap: 40,
  wrapAround: true,
};

// Dummy data (JSON) for amounts
const paymentData: { [key: string]: number } = {
  '2025-03-01': 50.32,
  '2025-03-02': 75,
  '2025-03-03': 100.76,
  '2025-03-04': 150,
  '2025-03-05': 200.25,
  '2025-03-25': 200.25,
};

</script>

<template>
  <div class="loans">
    <div class="overview">
      <div class="user-data">
        <div class="user-info">
          <img :src="avatar" alt="avatar" class="avatar">
          <div class="user-name">
            <span>Sveiki!</span>
            <span>Janis Dzenis</span>
          </div>
        </div>
        <div class="user-loan">
          <div class="text">
            <a :href="pdfFile" download="loan.pdf" >
              <PdfIcon style="height: 24px; width: 20px" filled/>
              Parakstīts līgums
            </a>
            <span class="loan-id">5165665</span>
          </div>
        </div>
      </div>
      <div class="diagram">
        <div class="info">
          <div class="diagram-text">
            <span class="small-text">Samaksājat $ 80 400 no $ 120 000</span>
            <span class="small-text">Veikto maksājumu skaits</span>
          </div>
          <span class="out-of">12/50</span>
        </div>
        <Progress size="165" strokeWidth="10" progress="67"/>
      </div>
    </div>
    <div class="payment">
      <div class="payment-info">
        <div class="actual-payment">
          <span class="small-text">Aktuālais maksājums</span>
          <span class="small-text">
          <strong>$ 5 000</strong>
        </span>
        </div>
        <div class="total-payment">
          <span class="small-text">Pamatsummas atlikums</span>
          <span class="small-text">
          <strong>$ 30 000</strong>
        </span>
        </div>
      </div>
      <div class="payment-date">
        <span class="small-text">Nākamais maksājuma datums</span>
        <div class="date-container">
          <div class="date">7</div>
          <div class="month-year">
            <div class="month small-text">Dec.</div>
            <div class="year small-text">2023</div>
          </div>
        </div>
        <div class="payment-calendar" @click="paymentCalendarPopup = true">
          <span>&#8942;</span>
        </div>
      </div>
      <div class="payment-button">
        <Button size="big" @click="paymentMethodsPopup = true">Maksāt</Button>
      </div>
    </div>
    <div class="contracts">
      <h1>Tavi līgumi</h1>
      <Contract v-for="n in 4" :key="n"
        :contract-number="5165665"
        :loan-amount="12000"
        :next-payment-amount="312.31"
        :payment-deadline="'05.12.24'"
      />
    </div>
    <div class="carousel">
      <Carousel v-bind="config">
        <Slide v-for="image in images" :key="image.id">
          <img :src="image.url" alt="image" />
          <div class="note" style="position: absolute">No 2 % likmēi</div>
          <div class="description" style="position: absolute">Tavas summu
            palielinājumu iespējas</div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="last-payments">
      <h1>Pedēji maksājumi</h1>
      <LastPayments />
    </div>
  </div>

  <Popup
      :show="paymentMethodsPopup"
      @close="paymentMethodsPopup = false"
  >
    <PaymentMethods/>
  </Popup>

  <Calendar :show="paymentCalendarPopup" @close="paymentCalendarPopup = false" :payment-data="paymentData"/>
</template>

<style scoped>
.loans {
  display: grid;
  row-gap: 60px;
}

.overview {
  display: flex;
  column-gap: 105px;
}

.user-data {
  width: 200px;
}

.user-info {
  display: flex;
  align-items: center;
  column-gap: 15px;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 70px;
}

.user-name{
  display: flex;
  flex-direction: column;
}

.user-name span{
  font-size: 20px;
}

.user-loan{
  display: flex;
  align-items: flex-start;
  column-gap: 10px;
  margin-top: 20px;
}

.user-loan a{
  color: #3DCE15;
}

.loan-id{
  font-size: 30px;
}

.diagram{
  display: flex;
  align-items: center;
  column-gap: 40px;
  width: 560px;
  height: 200px;
  border: 1px solid #7e7e7e;
  border-radius: 30px;
  padding: 20px 30px;
  color: #fdfdfd;
  background: radial-gradient(
          circle at 15% 0%,
          rgba(61, 206, 21, 0.5) 0%,
          rgba(61, 206, 21, 0) 30%
      ), #202020
}

.diagram-text{
  display: flex;
  flex-direction: column;
  font-size: 18px;
  .small-text{
    color: #fdfdfd;
  }
}

.info{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.out-of{
  font-size: 60px;
}

.payment{
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;
  justify-content: flex-end;
}

.payment-info, .payment-date{
  box-shadow: 2px 2px 10px #00000014;
  border-radius: 20px;
  padding: 25px;
}

.payment-info{
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
}

.payment-date{
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.actual-payment, .total-payment{
  display: flex;
  justify-content: space-between;
}

.date-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #D31F1F;
  margin-left: 40px;
}

.date {
  font-size: 54px;
  font-weight: bold;
}

.month-year {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
}

.payment-calendar{
  align-self: start;
  font-size: 20px;
  color: #7e7e7e;
}

.payment-calendar span{
  cursor: pointer;
}

.contracts{
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  --vc-pgn-border-radius: 30px;
  --vc-pgn-height: 10px;
  --vc-pgn-width: 10px;
  --vc-pgn-background-color: #f4f4f4;
  --vc-pgn-active-color: #3dce15;
  --vc-png-bottom: -20px;

  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.note, .description{
  position: absolute;
}

.note{
  top: 25px;
  right: 0;
  color: #202020;
  font-size: 16px;
  background-color: #fdfdfd;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 7px 7px 7px 17px;
}

.description{
  bottom: 19px;
  left: 25px;
  color: #fdfdfd;
  font-size: 30px;
  width: 313px;
}
</style>