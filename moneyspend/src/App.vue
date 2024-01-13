<template>
  <div>
    <Head></Head>
    <div class="container">
      <Balance :balance="+balance"></Balance>
      <IncomeExp :income="+income" :expense="expense"></IncomeExp>
      <History :transactions="transactions"></History>
      <Transaction @transactionSubmitted="handleTransaction"></Transaction>
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
  { id: 1, text: "Tea", Amount: -230 },
  { id: 2, text: "Coffee", Amount: -230 },
  { id: 3, text: "Tea", Amount: 2000 },
  { id: 4, text: "Tea", Amount: 2309 },
  { id: 5, text: "Tea", Amount: -230 },
]);

//get balance
const balance = computed(() => {
  return transactions.value.reduce((acc, transction) => {
    return acc + transction.Amount;
  }, 0);
});

//get income

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.Amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.Amount;
    }, 0)
    .toFixed(2);
});

//get expense

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.Amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.Amount;
    }, 0)
    .toFixed(2);
});

//adding new transactions

const handleTransaction = (transactiondata) => {
  if (text.value || Amount.value) {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactiondata.text,
      Amount: transactiondata.amount,
    });
  }
};

//generate id

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};
</script>

<style></style>
