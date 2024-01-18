<template>
  <main class="bodys">
    <div class="nav">
      <router-link to="/">Home</router-link>

      <input type="text" name="" id="" placeholder="Search product" />
      <label for="">search</label>
    </div>

    <router-view />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
