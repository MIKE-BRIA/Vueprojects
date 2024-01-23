<template>
  <main>
    <div>
      <ul>
        <!-- Corrected v-for to display content of each news article -->
        <li
          v-for="article in news"
          :key="article.title"
          class="news"
          @click="router.push(`/news/${article.title}`)"
        >
          <div class="title">
            {{ article.title }}
          </div>
          <p>{{ article.publishedAt }}</p>
          <p>{{ article.description }}</p>
          <div>
            {{ article.content }}
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const news = ref("");

async function getAllNews() {
  try {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=69f45f9eda084fca93336d6ad3b84305"
    );

    const News = res.data.articles;
    console.log(news);

    news.value = News;
  } catch (e) {
    console.error(e.message);
  }
}

getAllNews();
</script>

<style scoped>
ul {
  list-style: none;
  width: 60%;
  margin-top: 180px;
  margin-left: auto;
  margin-right: auto;
}

.title {
  height: 3.4rem;
  font-size: 1.5rem;
  padding: 3rem;
  font-weight: bold;
}

/* li {
  height: 10rem;

  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
} */

li {
  border: none;
  padding: 3rem;
  margin: 9px;
  /* background: rgb(143, 147, 155); */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
}
</style>
