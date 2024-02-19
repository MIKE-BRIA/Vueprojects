<template>
  <div>
    <nav>
      <div class="logo">
        <a href="#">DEVBLOG</a>
      </div>

      <div class="links">
        <router-link to="/" class="link">Tech News</router-link>
        <router-link to="/admin" class="link">Admin</router-link>
        <router-link to="/signup" class="link">Signup</router-link>
        <router-link to="/login" class="link">Login</router-link>
        <button class="logout-btn link">Logout</button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
