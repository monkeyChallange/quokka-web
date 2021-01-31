<template>
  <div class="page welcome-to">
    <div class="content animate__animated animate__fadeIn animate__slower">
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
        engineering services to some of Swedens leading industry companies as
        well as to up-and-coming start-ups. Moreover we are an innovation hub
        where we support and encourage our employees and partners to realize
        their business ideas. Being part of Quokka, you will have access to
        people with vast experienced in starting up new companies and with a
        genuine interest to invest in great ideas.
        <br />Together we can change the word!
      </p>
    </div>
  </div>
  <div class="page quokka">
    <div class="content">
      <div class="software">
        <h2>Software by Quokka</h2>
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
          Våra ingenjörer är innovativa och kreativa medarbetare stark
          drivkraft. De har djup kompetens inom hela kedjan av
          innovationsarbete: Från första konceptuella steget med design &
          formgivning, till arbetet med att skapa prototyper och sätta
          lösningarna i produktion. I praktiken innebär det att vi våra
          konsulter är specialiserade på formgivning, konstruktion, elektronik
          och mjukvara.
        </p>
      </div>
    </div>
  </div>
  <div class="page our-clients">
    <div class="content">
      <h2>Our Clients</h2>
      <ul v-for="client in clients.sort()" :key="client">
        <li>
          {{ client }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      clients: [
        "Volvo Cars",
        "Polestar",
        "Volvo Trucks",
        "Volvo Group Connected Solutions",
        "Volvo Bus",
        "CEVT",
        "YARA Marine",
        "Husqvarna",
        "Ullman Dynamics",
        "Faabcharge",
      ],
    }
  },
}
</script>

<style>
.page.welcome-to {
  background-image: url("~@/assets/backgrounds/home.png");
}
.page.about-us {
  background-image: url("~@/assets/backgrounds/about-us.jpg");
}
.page.quokka {
  background-image: url("~@/assets/backgrounds/quokka-pattern.png");
}
.page.quokka-hardware {
  background-image: url("~@/assets/backgrounds/hardware.jpg");
}
.page.our-clients {
  background-image: url("~@/assets/backgrounds/quokka-pattern-2.png");
}

.page.welcome-to .content {
  font-size: 62px;
  color: white;
  line-height: 30px;
}
.page.welcome-to .content .quokka-text {
  color: #7cbb4a;
}
.page.welcome-to .content .sub-text {
  font-size: 28px;
  line-height: 80px;
  word-spacing: 5px;
}

.page.quokka .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.page.quokka .software {
  margin-right: 100px;
  width: 50%;
}
.page.quokka .hardware {
  width: 50%;
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
