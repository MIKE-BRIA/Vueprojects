<template>
  <body>
    <Header />
    <div class="container">
      <Balance :total="+total" />
      <IncomeExpense :income="+income" :expenses="+expenses" />
      <TransactionList
        :transactions="transactions"
        @DeleteTransaction="handleTransactionDeleted"
      />
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
  </body>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";

import { useToast } from "vue-toastification";
import { ref, computed, onMounted } from "vue";

const Toast = useToast();

const transactions = ref([]);

//checking localstorage for transactions
onMounted(() => {
  const savedtransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedtransactions) {
    transactions.value = savedtransactions;
  }
});

//Get Total Amount
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

//Get income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

//Get expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

//Add transaction
const handleTransactionSubmitted = (transactionData) => {
  if (text.value || amount.value) {
    transactions.value.push({
      //generate unique id
      id: generateUniqueId(),
      text: transactionData.text,
      amount: transactionData.amount,
    });
    saveTransactionsToLocalStorage();
    Toast.success("Transaction added successfully");
  }
};

//Generate unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

//Delete transaction
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  saveTransactionsToLocalStorage();

  Toast.success("Transaction deleted");
};

//save to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>

<style></style>
