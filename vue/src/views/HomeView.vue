<template>
  <main class="container">
    <h1>Our cars</h1>

    <div class="cards">
      <div
        class="card"
        v-for="car in cars"
        :key="car.id"
        @click="router.push(`/car/${car.id}`)"
      >
        <h1>{{ car.make }}</h1>
        <p>${{ car.price }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import carsData from "../data/data.json";
import { ref } from "vue";
import { useRouter } from "vue-router"; //adding functionality to our path

const router = useRouter();

const cars = ref(carsData);
</script>

<style></style>
