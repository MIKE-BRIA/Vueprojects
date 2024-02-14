<template>
  <main>
    <div class="nav">
      <div class="logo">BM</div>
      <div class="links">
        <ul>
          <li>
            <a href="#About" class="active">About</a>
          </li>
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#Work">Work</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <button class="resume-button">
          <p>Resume</p>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background: rgb(139, 139, 155);
  padding: 1rem;
  position: fixed;
  width: 100%;
  margin-top: 0;
  top: 0;
  align-items: center;
}

.logo {
  font-size: 3rem;
  font-weight: 700;
  margin-left: 4rem;
  letter-spacing: 2px;
  color: rgb(95, 72, 43);
}

.links ul {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  list-style: none;
}

.links li a:hover,
a.active {
  color: white;
  background-color: rgb(122, 59, 59);
  padding: 0.5rem;
  border-radius: 9px;
}

.links li {
  margin-right: 3rem;
}

.links {
  display: flex;
}

.resume-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

p {
  margin: 0;
}
</style>
