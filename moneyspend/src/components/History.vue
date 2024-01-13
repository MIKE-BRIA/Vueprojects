<template>
  <div class="history">
    <h2>HISTORY</h2>
    <hr />
    <!-- <time datetime=" ">time</time>" -->
    <ul class="list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'minus' : 'plus'"
      >
        {{ transaction.text }} <span class="">{{ transaction.amount }}</span
        ><button class="delete-btn" @click="deletetransaction(transaction.id)">
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["deletetransaction"]);

const prop = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const deletetransaction = (id) => {
  emit("deletetransaction", id);
};
</script>

<style></style>
