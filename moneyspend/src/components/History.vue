<template>
  <div class="history">
    <h2>HISTORY</h2>
    <hr />
    <time datetime=" ">time</time>"
    <ul class="list">
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.text }} <span class="">{{ transaction.Amount }}</span
        ><button class="delete-btn">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const prop = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
