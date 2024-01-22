<template>
  <form action="">
    <div class="search">
      <span class="search-icon material-symbols-outlined"> search </span>
      <input
        class="search-input"
        type="search"
        name=""
        v-model="name"
        id=""
        placeholder="Search product"
        @input="updateQuery"
      />
    </div>
  </form>
</template>

<script setup>
import data from "../data/data.json";
import { ref, watch } from "vue";

const products = ref(data);

const name = ref("");

const emit = defineEmits(["search"]);

//filter by title
watch(name, () => {
  if (name.value) {
    if (name.value == "") products.value = data;
    else {
      products.value = data.filter((product) => product.name == name.value);
    }
  }
});

// watch(name, () => {
//   products.value = name.value
//     ? data.filter((product) =>
//         product.name.toLowerCase().includes(name.value.toLowerCase())
//       )
//     : data;
// });
</script>

<style scoped>
.search {
  width: max-content;
  display: flex;
  align-items: center;
  padding: 9px;
  background: #f6f6f6;
  border-radius: 19px;
}

.search-input {
  font-size: 17px;
  color: #333333;
  margin-left: 9px;
  outline: none;
  border: none;
}

.search-input::placeholder,
.search-icon {
  color: rgba(0, 0, 0, 0.5);
}
</style>
