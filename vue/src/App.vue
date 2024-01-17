<template>
  <main>
    <div class="links">
      <router-link active-class="active" to="/">Home</router-link>
      <router-link active-class="active" :to="{ name: 'about' }"
        >About</router-link
      >
    </div>
    <div class="nav"></div>
    <router-view />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
.active {
  font-weight: bold;
  background: green;
  padding: 0.7rem;
  border-radius: 9px;
  color: white;
}
</style>
