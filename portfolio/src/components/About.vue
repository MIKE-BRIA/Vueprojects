<template>
  <main>
    <div class="main">
      <div class="text">
        <div class="head">
          <div>
            <h1 class="top">About me</h1>
          </div>
        </div>

        <p>
          Hello, My name is Brian Michael and i enjoy creating web applications.
          This is mainly because i enjoy writing code, i started my coding
          journey in 2022 when i realized writing code can create nice looking
          stuff that can be shared and seen by people. It was also mind blowing
          to me that most of the applications i was using were created using
          code, and with that i learned a lot about html , css & javascript
        </p>
        <p>
          Fast-forward to today, i have been working on various projects mostly
          personally
        </p>
        <p>
          Some of the projects i have worked on: Online shop with both frontend
          and backend, Api that i store data collected through web scrapping,
          Blogging website and Messaging application
        </p>

        <p>Here are a few technologies i’ve been working with recently</p>
        <div class="list">
          <ul>
            <li>javascript</li>
            <li>Vue</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
          <ul>
            <li>express</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>
      <div class="image">
        <img src="../assets/me.jpg" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  display: flex;
  margin-top: 9rem;
}

img {
  width: 19rem;
  margin-top: 5rem;
  object-fit: cover;
  padding: 12px;
  height: 23rem;
  border: 1px solid white;
}

.text {
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
}
.line {
  border-top: 2px solid rgb(255, 254, 254); /* Adjust color and thickness as needed */
  width: 20rem;
  top: 50%;
}

p {
  text-align: left;
  margin: 10px 0;
  font-size: 1.3rem;
  letter-spacing: 1px;
}
.list {
  display: flex;
}

li {
  color: rgb(95, 72, 43);
  font-size: 1.4rem;
  list-style-type: disc;
  text-align: left;
}

@media (max-width: 768px) {
  .main {
    display: block;
  }
}
</style>
