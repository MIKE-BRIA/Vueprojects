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

// const searchQuery = ref("");

// const filteredProducts = computed(() => {
//   return products.value.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//   );
// });

// const filterProducts = (query) => {
//   searchQuery.value = query;
// };

// const navigateToProduct = (id) => {
//   router.push(`/product/${id}`);
// };
</script>

<style></style>
