<template>
  <div class="page welcome-to">
    <div class="hero animate__animated animate__fadeIn animate__slower">
      <span>Welcome to</span>
      <h1>Quokka</h1>
      <span class="sub-text">Joy. Curiosity. Innovation</span>
    </div>
  </div>
  <div class="page about-us">
    <div class="content">
      <h2>About us</h2>
      <p>
        Technology is nothing but a tool for making the world a better place. We
        believe a sustainable future is built on curiosity, creativity and big
        ideas. That’s why we started Quokka! We are an R&D center offering
        engineering services to some of Sweden's leading companies as well as to
        up-and-coming start-ups. Moreover we are an innovation hub where we
        support and encourage our employees and partners to realize their
        business ideas. Being part of Quokka, you will have access to people
        with vast experienced in starting up new companies and with a genuine
        interest to invest in great ideas.
        <br />Together we can change the word!
      </p>
    </div>
  </div>
  <div class="page quokka">
    <div class="content">
      <div class="software">
        <h2>Software</h2>
        <p>
          We offer high-end software engineering services to enterprises within
          Automotive, Telecom, MedTech and Fintech. Our vast experience makes it
          possible for us to set-up a dream team for your business! Our
          trademark is creative software developers with strong programming
          skills. If you are looking for deep and broad competence that can
          boost your business. Or if you are looking for a new career with an
          employer that can give you new challenges and unlock your full
          potential. Give us a call!
        </p>
      </div>
      <div class="hardware">
        <h2>Electronics & Hardware</h2>
        <p>
          We are a bunch of truly innovative and driven engineers that develops
          and provides engineering services in the fields of electronic hardware
          and mechanics. Extensive experience from conceptual design,
          prototyping, all the way to serial production. Our trademark is
          innovative and curious team players that sees what needs to be done.
          If you are looking for an engineering team that can take your work to
          the next level, please give us a call!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style>
.page.welcome-to {
  background-image: url("~@/assets/backgrounds/home.png");
}
.page.about-us {
  background-image: url("~@/assets/backgrounds/quokka-pattern-2.png");
}
.page.quokka {
  background-image: url("~@/assets/backgrounds/about-us.jpg");
}
.page.quokka-hardware {
  background-image: url("~@/assets/backgrounds/hardware.jpg");
}

.page.welcome-to .hero {
  font-size: 62px;
  color: white;
  line-height: 30px;
}
.page.welcome-to .hero .quokka-text {
  color: #7cbb4a;
}
.page.welcome-to .hero .sub-text {
  font-size: 28px;
  line-height: 80px;
  word-spacing: 5px;
}

.page.quokka .content {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.page.quokka .software {
  margin-right: 100px;
}

.page.our-clients {
  align-items: baseline;
}
.page.our-clients .content ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 28px;
  line-height: 60px;
}
</style>
