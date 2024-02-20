<template>
  <main>
    <h1>Login</h1>
    <form action="/login" method="POST" @submit.prevent="login">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          v-model="userInput.email"
          required
        />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          v-model="userInput.password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <div id="auth-alternative">
      <a class="btn btn-alt" href="/signup">Create User</a>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import router from "@/router/index.js";

export default {
  data() {
    return {
      userInput: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      axios
        .post("http://localhost:3000/login", this.userInput)
        .then((response) => {
          console.log(response);
          router.push({ name: "home" });
        })
        .catch((error) => {
          if (error.response?.status === 404) {
            this.$router.push({ name: "login" });
          } else {
            console.error(error);
          }
        });
    },
  },
};
</script>

<style scoped>
main {
  padding: 1.4rem;
  width: 30rem;
  margin: 3rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

h1 {
  margin: 2rem;
}
</style>
