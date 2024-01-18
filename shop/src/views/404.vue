<template>
  <div class="error">
    <div class="inside">
      <h1>404 Error</h1>
      <h3>This page does not exists</h3>
    </div>
    <div>
      <button @click="router.back">Go Back</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.error {
  background: orange;
  max-width: 80%;
  margin: 190px auto;
  height: 16rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  border-radius: 12px;
}

button {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 9px;
  border: 1px;
  cursor: pointer;
}
</style>
