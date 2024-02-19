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
          v-model="fullname"
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
          v-model="email"
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
          v-model="confirmEmail"
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
          v-model="password"
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
import AuthService from "@/services/AuthenticationService";
import Api from "@/services/Api";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      confirmEmail: "",
      password: "",
    };
  },

  methods: {
    async signup() {
      try {
        const userData = {
          fullname: this.fullname,
          email: this.email,
          confirmEmail: this.confirmEmail,
          password: this.password,
          // other form field values
        };
        const response = await AuthService.signup(userData);
        console.log("Signup successful:", response);
        // Optionally, perform any additional actions after successful signup
      } catch (error) {
        console.error("Signup failed:", error.message);
        // Optionally, handle signup failure
      }
    },

    // methods: {
    //   async signup() {
    //     try {
    //       const response = await AuthService.signup({
    //         fullname: this.fullname,
    //         email: this.email,
    //         confirmEmail: this.confirmEmail,
    //         password: this.password,
    //       });
    //       console.log("Signup response:", response.data);
    //     } catch (error) {
    //       console.error("Signup error:", error);
    //     }
    //   },

    // async fetchData() {
    //   try {
    //     const response = await Api().post("signup", credentials); // Make a GET request using the Api instance
    //     console.log("Data from server:", response.data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // },
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
