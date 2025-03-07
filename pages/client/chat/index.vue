<script setup lang="ts">
import Dropdown from "~/components/ui/Dropdown.vue";
import TextInput from "~/components/ui/TextInput.vue";
import Button from "~/components/ui/Button.vue";
import Checkbox from "~/components/ui/Checkbox.vue";

definePageMeta({
  layout: "user"
})

useHead({
  title: 'Chat',
})

interface Option{
  value: string;
  label: string;
}

const selectedOption = ref<Option | null>(null);
const selectedNotification = ref(null);
const selectedTermination = ref(null);

const additionalAmount = ref({
  contractNumber:"",
  loanAmount:"",
  loanPurpose:""
});

const newCredit = ref({
  loanType: "",
  name:"",
  companyName:"",
  registrationNumber:"",
  phoneNumber:"",
  requiredAmount:""
});

const creditBalanceArr = [
  {value: ref(""), label:"Vārds Uzvārds"},
  {value: ref(""), label:"Personas kods"},
  {value: ref(""), label:"Līguma numurs"},
  {value: ref(""), label:"Tel.nr."},
  {value: ref(""), label:"Datums uz kuru nepieciešams atlikums"},
]

const options=[
  {value: "additionalAmount" ,label:"Papildus summas saņemšanai"},
  {value: "newCredit" ,label:"Jauna kredīta saņemšanai"},
  {value: "creditBalance" ,label:"Kredīta atlikums"},
  {value: "other" ,label:"Cits"},
];

const notificationOptions = [
  {value: "email", label: "e-pasta"},
  {value: "inPerson", label: "klātienē Bukultu ielā 11, Rīga"},
  {value: "inAccount", label: "Personīgajā kabinetā"},
]

const terminationOptions = [
  {value: "recreditation", label: "Pārkreditācija"},
  {value: "propertySale", label: "Īpašuma pārdošana"},
  {value: "ownFunds", label: "Savi naudas līdzekļi"},
]

const handleSubmit = ()=>{
  creditBalanceArr.forEach((elem)=>{
    console.log(elem.value)
  })
}

</script>

<template>
  <div class="chat">
    <span class="text">Izvēlies jebkuru papildu pakalpojumu, kuru vēlies noformēt. <br>Aizpildi anketu, un mēs ar tevi sazināsimies.<br></span>

    <Dropdown v-model="selectedOption" :options="options" placeholder="Iesniegumi"/>

    <form
        class="additional-amount form"
        v-if="selectedOption && selectedOption.value === 'additionalAmount'"
        @submit.prevent="handleSubmit"
    >
      <TextInput v-model="additionalAmount.contractNumber" placeholder="Liguma numurs"/>
      <TextInput v-model="additionalAmount.loanAmount" placeholder="Vēlamā aizdevuma summa"/>
      <TextInput v-model="additionalAmount.loanPurpose" placeholder="Aizdevuma mērķis"/>
      <Button size="big">Nosūtīt</Button>
    </form>

    <form
        class="new-credit form"
        v-if="selectedOption && selectedOption.value === 'newCredit'"
        @submit.prevent
    >
      <TextInput v-model="newCredit.loanType" placeholder="Aizdevuma veids"/>
      <TextInput v-model="newCredit.name" placeholder="Vārds Uzvārds"/>
      <TextInput v-model="newCredit.companyName" placeholder="Uzņēmuma nosaukums"/>
      <TextInput v-model="newCredit.registrationNumber" placeholder="Reģistrācijas Nr."/>
      <TextInput v-model="newCredit.phoneNumber" placeholder="Tel.nr."/>
      <TextInput v-model="newCredit.requiredAmount" placeholder="Nepieciešamā summa"/>
      <Checkbox>
        <span style="font-size: var(--body1-mobile)">Piekrītu saņemt jaunumus, reklāmas materiālus un citu aktuālu informāciju no Digilo</span>
      </Checkbox>
      <Button size="big">Nosūtīt</Button>
    </form>

    <form
        class="new-credit form"
        v-if="selectedOption && selectedOption.value === 'creditBalance'"
        @submit.prevent="handleSubmit"
    >
      <TextInput
          v-for="(creditBalance, index) in creditBalanceArr"
          :key="index"
          v-model="creditBalance.value.value"
          :placeholder="creditBalance.label"
      />

      <Dropdown v-model="selectedNotification" :options="notificationOptions" placeholder="Vēlamais izziņas saņemšanas veids" />
      <Dropdown v-model="selectedTermination" :options="terminationOptions" placeholder="Līguma izbeigšanas iemesls" />
      <Checkbox required>
        <span style="font-size: var(--body1-mobile)">Piekrītu saņemt jaunumus, reklāmas materiālus un citu aktuālu informāciju no Digilo</span>
      </Checkbox>

      <Button size="big">Nosūtīt</Button>
    </form>

    <form
        class="new-credit form"
        v-if="selectedOption && selectedOption.value === 'other'"
        @submit.prevent
    >
      <textarea class="questions" placeholder="Tēmats un jautājums"></textarea>
      <Button size="big">Nosūtīt</Button>
    </form>
  </div>
</template>

<style>
.chat{
  display: grid;
  row-gap: 30px;
}

.text{
  font-size: var(--body1-desktop);
}

.form{
  max-width: 460px;
  display: grid;
  row-gap: 25px;
  justify-items: end;
}

.questions{
  width: 100%;
  height: 140px;
  padding: 12px 26px;
  border-radius: 15px;
  border: none;
  resize: none;
  box-shadow: 2px 2px 10px #00000040;
  font-size: var(--text-placeholder-desktop);
}
</style>