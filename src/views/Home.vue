<template>
  <div class="home">
    <p class="welcom-to">
      <span>Welcome to</span>
      <br />
      Quokka
      <br />
      Joy. Curiosity. Innovation.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
}
</script>

<style>
html {
  background-image: url("~@/assets/backgrounds/home.jpg");
}

.home {
  background: blue;
  height: 100%;
  display: flex;
  justify-content: center;
}

p {
  font-size: 44px;
}
</style>
