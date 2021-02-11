<template>
  <div class="page change-the-world">
    <div class="content">
      <h2>Build a sustainable future! <br />Change the world!</h2>
      <p>
        We look for curious, passionate people with a genuine interest in
        technology. People that see the opportunity with a challenge and find
        the smartest path to reach the goal. Team players, that see the value of
        diversity. Who care for each other and set the common goal higher than
        the personal goal - since this will make us and the rest of the world
        stronger at the end.
      </p>
    </div>
  </div>
  <div class="page left hi-there">
    <div class="content">
      <h2>
        Hi There!<br />
        Are you a Software Developer?
      </h2>
      <p>
        Let Software by Quokkas CODE CHALLENGE increase your <br />temperature
        and excitement! Are you up for the challenge?!
      </p>
      <h3>
        <a
          href="https://futureskill.com/challenges/5e8a480c5b94905851b09c0f"
          target="_blank"
        >
          <button>
            COLOR BOT CODE CHALLANGE
          </button>
        </a>
      </h3>
    </div>
  </div>
  <div class="page join-us">
    <div class="content">
      <div class="software">
        <h2>Software</h2>
        <ul v-for="experiance in softwareExperiance" :key="experiance">
          <li>{{ experiance }}</li>
        </ul>
      </div>
      <div class="electronics-mechanics">
        <h2>Electronics & Mechanics</h2>
        <ul v-for="experiance in hardwareExperiance" :key="experiance">
          <li>{{ experiance }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="page left hiring">
    <div class="content">
      <h2>We're Hiring!</h2>
      <p>
        Working at Quokka is not only about challenges and technology. We
        believe in creating an environment where exciting challenges meets a
        strong cohesiveness and a secure enriching environment. Is Quokka the
        next step for you? We are very curious to learn more about you! Our job
        posts:
        <br />
        <br />
        Welcome to send your application to:
        <a href="mailto:rekrytering@quokka.se" target="_blank">
          rekrytering@quokka.se
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      softwareExperiance: [
        "Application development. Android/iOS",
        "DevOps. Development of infrastructure for CI/CD and frameworks for testautomation",
        "Cloud. Development of scalable server solutions, based on cloud platforms like AWS, Google Cloud and Azure",
        "Embedded. Development of embedded systems",
        "Cyber Security. Risk analysis, education, operation, development of security architecture",
        "Data Science & Data Engineering. Development of algorithms and pipelines for data management",
      ],
      hardwareExperiance: [
        "Mechatronic development and system verification",
        "Electrical wiring distribution systems, Creo, Catia or Saber ESD",
        "Senior but most importantly innovative mechanical engineers. CREO or Catia v5/v6",
        "Charging system technologies for electromobility",
        "Battery management electronics and embedded software",
      ],
    }
  },
}
</script>
<style>
.page.change-the-world {
  background-image: url("~@/assets/backgrounds/career.jpg");
}

.page.hi-there {
  background-image: url("~@/assets/backgrounds/code-challenge.jpg");
}
.page.join-us {
  background-image: url("~@/assets/backgrounds/quokka-pattern-2.png");
}
.page.hiring {
  background-image: url("~@/assets/backgrounds/hiring.jpg");
}

.page.hiring a {
  color: #7cbb4a;
}

.page.join-us p {
  margin-top: 0px;
}

.page.join-us .content {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  text-align: left;
  width: 100%;
  line-height: 100%;
}

.page.join-us .content .software {
  margin-right: 100px;
  width: 50%;
}
.page.join-us .content .electronics-mechanics {
  width: 50%;
}
</style>
