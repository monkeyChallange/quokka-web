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
      <div>
        <SingleContact v-bind="contacts[0]" />
        <SingleContact v-bind="contacts[1]" />
      </div>
      <div>
        <SingleContact v-bind="contacts[2]" />
        <SingleContact v-bind="contacts[3]" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleContact from "@/components/SingleContact.vue"
import contacts from "./contacts"

export default {
  components: { SingleContact },
  data() {
    return {
      contacts: contacts,
    }
  },
}
</script>

<style>
.page.support {
  background-image: url("~@/assets/backgrounds/contact.jpg");
}

.page.contact .content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
</style>
