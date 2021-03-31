<template>
  <div id="nav">
    <div class="nav--left">
      <router-link to="/" class="nav__title">wpm.gg</router-link>
    </div>
    <div class="nav--right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Flamenco&family=Roboto+Mono&display=swap");

:root {
  --primary-color: #28382e;
  --secondary-color: #565f5a;
  --accent-color: #a3c0b2;
  --primary-text-color: #fefefd;
  --secondary-text-color: #e3f7f4;
}

* {
  margin: 0;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  background-color: var(--primary-color);
  height: 100%;
}

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 75%;
}

#nav {
  font-family: "Flamenco", cursive;
  text-transform: lowercase;
  display: flex;
  font-size: 1.4rem;
  width: 100%;
  justify-content: space-between;
}

#nav * {
  padding: 1rem;
}

#nav a {
  padding: 1rem;
  color: var(--primary-text-color);
  text-decoration: none;
  transition: 0.2s;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: var(--accent-color);
}

.nav__title {
  color: var(--primary-text-color) !important;
}

.container {
  height: 100%;
  max-height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
