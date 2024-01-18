<template>
  <div class="container">
    <div v-if="Product" class="product">
      <h2>{{ Product.name }}</h2>
      <h3>Description</h3>
      <p>{{ Product.description }}</p>
      <h4>Features</h4>
      <p>{{ Product.features }}</p>
      <h3>Price: ${{ Product.price }}</h3>
    </div>
    <div v-else>
      <h1>Product not found</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import Products from "../data/data.json";

const route = useRoute();

const Product = ref(null);

const { id } = route.params;

onBeforeMount(() => {
  Product.value = Products.find((Product) => Product.id == id);
});
</script>

<style scoped>
.container {
  margin-top: 180px;
}

.product {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  max-width: 87%;
  margin: auto;
  padding: 1rem;
}
</style>
