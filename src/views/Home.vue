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
        Technology are nothing but a tool for making the world a better place.
        We believe a sustainable future is built on curiosity, creativity and
        big ideas. That’s why we started Quokka. Our teams cover everything from
        software to hardware and our services are built on a simple idea:
        <br />Together we can change the word!
      </p>
    </div>
  </div>
  <div class="page software-by-quokka">
    <div class="content">
      <div class="text">
        <h2>Software by Quokka</h2>
        <p>
          We offers high-end software engineering services to enterprises within
          Automotive, Telecom, MedTech and Fintech. Our vast experience makes it
          possible for us to set-up a dream team for your business! Our
          trademark is creative software developers with strong programming
          skills. If you are looking for deep and broad competence that can
          boost your business. Or if you are looking for a new career with an
          employer that can give you new challenges and unlock your full
          potential. Give us a call!
        </p>
      </div>
      <div class="logo">
        <SoftwareByQuokkaLogo width="264.567" height="241.511" />
      </div>
    </div>
  </div>
  <div class="page left quokka-hardware">
    <div class="content">
      <h2>Quokka Hardware</h2>
      <p>
        Våra ingenjörer är lösningsorienterade medarbetare med lång erfarenhet
        av hela kedjan från koncept till färdig produktion. Vi kan erbjuda
        kompetens inom formgivning, mekanisk och elektrisk konstruktion, inom
        med lång erfarenhet inom formgivning, konstruktion, elektronik och
        mjukvara. Vi vet också hur viktigt det är att konsulter och externa
        krafter snabbt blir en del av det interna teamet. Vi vet hur man skapar
        en gemensam andra i både lång och korta projekt.
      </p>
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
import SoftwareByQuokkaLogo from "@/components/logos/SoftwareByQuokkaLogo.vue"

export default {
  name: "Home",
  components: { SoftwareByQuokkaLogo },
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
.page.software-by-quokka {
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

.page.software-by-quokka .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.page.software-by-quokka .text {
  text-align: left;
  width: 50%;
}
.page.software-by-quokka .logo {
  text-align: left;
  width: 25%;
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
