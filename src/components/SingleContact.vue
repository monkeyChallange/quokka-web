<template>
  <div class="container">
    <div class="contact-image">
      <img :src="img()" contain width="300" height="273" />
    </div>
    <div class="contact-details">
      <h3>{{ name }}</h3>
      <ul>
        <li>{{ position }}</li>
        <li>{{ phone }}</li>
        <li>
          <a :href="'mailto:' + email">{{ email }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PictureFrame from "@/components/PictureFrame.vue"

export default {
  components: { PictureFrame },
  props: ["name", "position", "phone", "email", "img"],
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.contact-details {
  padding-left: 20px;
}
.contact-details h3 {
  text-align: left;
}
.contact-details ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  line-height: 30px;
  color: white;
  text-align: left;
  font-size: 20px;
}
</style>
