<template>
  <main class="container">
    <div class="cards">
      <div
        class="card"
        v-for="Product in Products"
        :key="Product.id"
        @click="router.push(`/Product/${Product.id}`)"
      >
        <h3>{{ Product.name }}</h3>
        <p>{{ Product.description }}</p>
        <p>{{ Product.category }}</p>
        <p>${{ Product.price }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import data from "../data/data.json";

const router = useRouter();

const Products = ref(data);
</script>

<style></style>
