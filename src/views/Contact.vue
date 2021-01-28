<template>
  <div class="page support">
    <div class="content">
      <h2>How can we support you?</h2>
      <p>
        Today, Quokka has around 50 employees, covering software-, electronics-
        and mechanical engineering. We are divided into two business segments:
        Software and Electronics & Mechanics. Software is headed by Teresia von
        Sicard, with extensive experience from the software industry, automotive
        and business development. Electronics & Mechanics is headed by Henrik
        Nesser, with background from CEO and business developer within a number
        of industries.
        <br />
        <br />
        Welcome to contact us! We are looking forward to learn more about you
        and how we can boost your business.
      </p>
    </div>
  </div>
  <div class="page contact">
    <div class="content">
      <SingleContact
        name="Teresia Von Sicard"
        position="CEO Software by Quokka"
        phone="+46760029001"
        email="teresia.sicard@quokka.se"
      />
      <SingleContact
        name="Henrik Nesser"
        position="CEO Quokka AB"
        phone="+XXXXXXXXXX"
        email="henrik.nesser@quokka.se"
      />
      <SingleContact
        name="Johannes"
        position="Business Unit Manager"
        phone="+XXXXXXXXXX"
        email="johannes.xxxxxx@quokka.se"
      />
      <SingleContact
        name="Fehmi"
        position="Business Unit Manager"
        phone="+XXXXXXXXXX"
        email="fehmi.xxxxxx@quokka.se"
      />
    </div>
  </div>
</template>

<script>
import SingleContact from "@/components/SingleContact.vue"

export default {
  components: { SingleContact },
}
</script>

<style>
.page.support {
  background-image: url("~@/assets/backgrounds/contact.jpg");
}

.page.contact .content {
  display: block;
  width: 500px;
}
</style>
