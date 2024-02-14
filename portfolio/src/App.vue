<template>
  <body>
    <Nav></Nav>
    <div class="container">
      <Me></Me>
      <About></About>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  </body>
</template>

<script setup>
import Nav from "./components/Navbar.vue";
import Me from "./components/Me.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* .container {
  margin: auto;
  width: 50rem;
}

.container {
  margin: 30px auto;
  width: 400px;
} */
</style>
