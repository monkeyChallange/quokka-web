<template>
  <div class="page-header">
    <div class="logo">
      <a href="/" alt="Home">
        <QuokkaLogo />
      </a>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/quokkaism">Quokkaism</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/animal">The Animal</router-link>
    </div>
  </div>
  <div class="page-content">
    <router-view />
  </div>
  <div class="page-footer">
    <p>© 2021<br />QUOKKA<br />ALL RIGHTS RESERVED</p>
  </div>
</template>

<script>
import QuokkaLogo from "@/components/QuokkaLogo.vue"

export default {
  components: { QuokkaLogo },
}
</script>

<style>
#app {
  font-family: industry-inc-base, "Lexend Deca", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #062837;
}
#app h1,
h2 {
  color: #7cbb4a;
  letter-spacing: 2px;
  font-weight: normal;
}
#app h1 {
  font-size: 64px;
}
#app h2 {
  font-size: 38px;
}

#app h3 {
  font-size: 28px;
  color: white;
  font-family: "Lexend Deca", sans-serif;
}

#app p {
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 300;
  line-height: 30px;
  font-size: 24px;
}

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 75px;
}
.page-header a {
  color: inherit;
  text-decoration: none;
}
.page-header .nav a {
  margin-left: 40px;
  font-size: 20px;
  color: white;
}
.page-header .nav a:hover {
  color: #7cbb4a;
}
a.router-link-active.router-link-exact-active {
  color: #7cbb4a;
}

.page-content {
  display: block;
  justify-content: center;
}
</style>
