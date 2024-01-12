<template>
  <div class="balance">
    <h2>YOUR BALANCE</h2>
    <h2 class="rem">${{ balance }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const prop = defineProps({
  balance: {
    type: Number,
    required: true,
  },
});
</script>

<style>
h2 {
  margin: 6px;
  letter-spacing: 1px;
}

.rem {
  font-size: 2.5rem;
}
</style>
