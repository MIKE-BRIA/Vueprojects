<template>
  <main class="container">
    <h1>Our cars</h1>

    <select @change="handlechange" v-model="make">
      <option value="All">All</option>
      <option value="Chevrolet">Chevy</option>
      <option value="Porsche">Porsche</option>
      <option value="Buick">Buick</option>
      <option value="Audi">Audi</option>
    </select>
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
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router"; //adding functionality to our path

const make = ref("");

const router = useRouter();
const route = useRoute();

const cars = ref(carsData);

onMounted(() => {
  make.value = route.query.make;
  console.log(route.query);
});

//filtering the cars by their make
watch(make, () => {
  if (make.value) {
    if (make.value == "All") cars.value = carsData;
    else {
      cars.value = carsData.filter((car) => car.make == make.value);
    }
  }
});

//saving query parameters to our path
const handlechange = () => {
  router.push({ query: { make: make.value } });
};
</script>

<style></style>
