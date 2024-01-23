<template>
  <main class="bodys">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <Search></Search>
      <div class="top">
        <router-link :to="{ name: 'photos' }">Emails</router-link>
        <router-link :to="{ name: 'Balance' }">Balance</router-link>
        <!-- <span class="material-symbols-outlined"> shopping_cart </span> -->
        <router-link :to="{ name: 'news' }">News</router-link>
        <!-- <a href="#">cart</a> -->
      </div>
    </div>

    <router-view />
  </main>
</template>

<script setup>
import Search from "./components/Search.vue";
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
