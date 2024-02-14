<template>
  <main>
    <div v-if="news" class="article">
      <div class="title">
        <h1>{{ news.title }}</h1>
      </div>
      <p>{{ news.publishedAt }}</p>
      <p>{{ news.description }}</p>
      <div>
        {{ news.content }}
      </div>
    </div>
    <!-- <div v-else>
      <p>Article not found</p>
    </div> -->
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const news = ref("");

const { title } = route.params; // Extract title from route parameters

onBeforeMount(async () => {
  try {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=69f45f9eda084fca93336d6ad3b84305"
    );

    const articles = res.data.articles;
    // Find the article by title. Ensure the titles are compared in a case-insensitive manner.
    news.value = articles.find(
      (article) => article.title.toLowerCase() === title.toLowerCase()
    );
  } catch (e) {
    console.error(e.message);
  }
});

// getAllNews();
</script>

<style scoped>
main {
  margin-top: 180px;
}

.article {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 2rem;
}
p {
  font-size: 1rem;
}
</style>
