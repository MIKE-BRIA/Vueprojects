<template>
  <div>
    <Head></Head>
    <div class="container">
      <Balance :balance="+balance"></Balance>
      <IncomeExp></IncomeExp>
      <History :transactions="transactions"></History>
      <Transaction></Transaction>
    </div>
  </div>
</template>

<script setup>
import Head from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExp from "./components/IncomeExp.vue";
import History from "./components/History.vue";
import Transaction from "./components/Transaction.vue";
import { computed, ref } from "vue";

const transactions = ref([
  { id: 1, text: "Tea", Amount: 230 },
  { id: 2, text: "Tea", Amount: 230 },
  { id: 3, text: "Tea", Amount: 230 },
  { id: 4, text: "Tea", Amount: 230 },
  { id: 5, text: "Tea", Amount: 230 },
]);

//get balance
const balance = computed(() => {
  return transactions.value.reduce((acc, transction) => {
    return acc + transction.Amount;
  }, 0);
});
</script>

<style></style>
