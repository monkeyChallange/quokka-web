<template>
  <div class="page-header">
    <div class="logo">
      <a href="/" alt="Home">
        <QuokkaLogo width="250" height="50.870316" />
      </a>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/quokkaism">Quokkaism</router-link>
      <router-link to="/incubator">Incubator</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/career">Career</router-link>
      <router-link to="/animal">The Animal</router-link>
    </div>
  </div>
  <div class="page-content">
    <router-view />
  </div>
  <div class="page-footer">
    <div class="content">
      <span>© 2021<br />QUOKKA<br />ALL RIGHTS RESERVED</span>
      <div class="links-container">
        <a
          href="https://www.instagram.com/softwarebyquokka/?hl=en"
          target="_blank"
        >
          <span>INSTAGRAM</span>
          <InstagramLogo width="16" height="16" />
        </a>
        <br />
        <a
          href="https://www.linkedin.com/company/software-by-quokka"
          target="_blank"
        >
          <span>LINKEDIN</span>
          <LinkedInLogo width="16" height="16" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import QuokkaLogo from "@/components/logos/QuokkaLogo.vue"
import LinkedInLogo from "@/components/logos/LinkedInLogo.vue"
import InstagramLogo from "@/components/logos/InstagramLogo.vue"

export default {
  components: { QuokkaLogo, LinkedInLogo, InstagramLogo },
  // data() {
  //   return {
  //     menuSticky: () => (window.pageYOffset > 50 ? "sticky" : null),
  //   }
  // },
}
</script>

<style>
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

.sticky {
  position: fixed;
  top: 0;
}

a.router-link-active.router-link-exact-active {
  color: #7cbb4a;
}

.page-content {
  display: block;
  justify-content: center;
}
.page-content a {
  color: inherit;
  text-decoration: none;
}
.page-content a:visited {
  text-decoration: none;
}

.page-footer {
  margin: 50px 75px;
}
.page-footer .content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.page-footer span {
  text-align: left;
  color: white;
}
.page-footer .links-container {
  text-align: right;
}
.page-footer .links-container span {
  margin-right: 5px;
}
.page-footer a {
  color: inherit;
  text-decoration: none;
}
.page-footer a:visited {
  text-decoration: none;
}
</style>
