<template>
  <div class="incomeexp">
    <div>
      <h3>Income</h3>
      <p class="moneyplus">+{{ income }}</p>
    </div>

    <div>
      <h3>Expence</h3>
      <p class="moneyminus">${{ expense }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});
</script>

<style></style>
