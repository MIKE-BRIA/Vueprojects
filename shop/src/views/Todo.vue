<template>
  <main>
    <div>
      <ul>
        <li v-for="email in emailList" :key="email">{{ email }}</li>
      </ul>
    </div>
    <div id="res">
      <!-- <p>{{ emailList }}</p> -->
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const emailList = ref(""); // Define a reactive property for email

async function getAllEmails() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    // Extract emails from all comments
    const emails = response.data.map((comment) => comment.email);
    console.log(response.data.email);

    // Update the reactive property with the list of emails
    emailList.value = emails;
  } catch (error) {
    console.error(error);
    emailList.value = "Failed to load data";
  }
}

getAllEmails();
</script>

<style scoped>
main {
  margin-top: 180px;
}
ul {
  list-style: none;
}

#res {
  margin-top: 180px;
}
li {
  display: flex;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 2rem;
}
</style>
