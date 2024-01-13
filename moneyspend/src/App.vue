<template>
  <div>
    <Head></Head>
    <div class="container">
      <Balance :balance="+balance"></Balance>
      <IncomeExp :income="+income" :expense="expense"></IncomeExp>
      <History
        :transactions="transactions"
        @deletetransaction="deletetrn"
      ></History>
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
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

//get balance
const balance = computed(() => {
  return transactions.value.reduce((acc, transction) => {
    return acc + transction.amount;
  }, 0);
});

//get income

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

//get expense

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

//adding new transactions

const handleTransaction = (transactiondata) => {
  if (text.value && amount.value) {
    transactions.value.push({
      id: generateUniqueId(),
      text: transactiondata.text,
      amount: transactiondata.amount,
    });
    toast.success("transaction added successfully");
  } else {
    toast.error("Add both fields");
  }
};

//generate id

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

//deletetransaction

const deletetrn = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
};
</script>

<style></style>
