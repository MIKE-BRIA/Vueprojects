<template>
  <div class="submition">
    <h3>Add new transaction</h3>
    <hr />
    <form action="" @submit.prevent="onSubmit">
      <div class="text">
        <label for="">Text</label>
        <input
          type="text"
          id="text"
          v-model="text"
          placeholder="Enter text ..."
        />
      </div>

      <div class="amount">
        <label for="">
          Amount
          <br />
          (Positive -income, Negative -expense)
        </label>
        <input
          type="text"
          id="amount"
          v-model="amount"
          placeholder="Enter Amount"
        />
      </div>

      <button class="btn">Add Transaction</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const text = ref("");
const amount = ref("");

//create an emit
const emit = defineEmits(["transactionSubmitted"]);

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("Please enter a transaction");
  }

  const transactiondata = {
    text: text.value,
    amount: parseFloat(amount.value),
  };

  emit("transactionSubmitted", transactiondata);

  text.value = "";
  amount.value = "";
};
</script>

<style></style>
