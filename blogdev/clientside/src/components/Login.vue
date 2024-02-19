<template>
  <main>
    <h1>Login</h1>
    <form action="">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
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
          required
        />
      </div>
      <button>Login</button>
    </form>
    <div id="auth-alternative">
      <a class="btn btn-alt" href="/signup">Create User</a>
    </div>
  </main>
</template>

<script>
export default {};
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
