<template>
  <main>
    <h1>Signup</h1>
    <form action="/signup" method="POST" @submit.prevent="signup">
      <div class="form-control">
        <label for="fullname">Your Fullname</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="fullname"
          v-model="Userdata.fullname"
          required
        />
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          v-model="Userdata.email"
          required
        />
      </div>

      <div class="form-control">
        <label for="confirm-email">Confirm Email</label>
        <input
          type="email"
          id="confirm-email"
          name="confirm-email"
          placeholder="confirm email"
          v-model="Userdata.confirmEmail"
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
          v-model="Userdata.password"
          required
        />
      </div>
      <button type="submit">Create User</button>
    </form>
    <div id="auth-alternative">
      <a class="btn btn-alt" href="/login">Login instead</a>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import router from "@/router/index.js"; // Adjust the path based on your project structure

export default {
  data() {
    return {
      Userdata: {
        fullname: "",
        email: "",
        confirmEmail: "",
        password: "",
      },
    };
  },
  methods: {
    //handling the signup form of a user
    signup() {
      axios
        .post("http://localhost:3000/signup", this.Userdata)
        .then((response) => {
          console.log(response);
          // Redirect to the login page
          router.push({ name: "login" });
        })
        .catch((error) => {
          console.error(error);
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
