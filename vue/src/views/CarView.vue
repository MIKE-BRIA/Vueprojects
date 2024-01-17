<template>
  <div class="container">
    <div v-if="car">
      <h1>The car</h1>
      <h3>Make: {{ car.make }}</h3>
      <p>Body: {{ car.body }}</p>
      <p>Price: {{ car.price }}</p>
      <p>Year: {{ car.year }}</p>
    </div>
    <div v-else>
      <h1>Car not found</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import cars from "../data/data.json";
//get data about the car url
import { useRoute } from "vue-router";
//get id
const route = useRoute();
const car = ref(null);

const { id } = route.params;

onBeforeMount(() => {
  car.value = cars.find((car) => car.id == parseInt(id));
});
</script>

<style></style>
