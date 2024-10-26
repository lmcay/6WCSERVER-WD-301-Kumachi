<template>
  <div class="contacted__container">
    <section class="hero__container">
      <div class="hero__section__contact">
        <h1 class="">Thank you!</h1>
      </div>
    </section>

    <section
      class="contacted__message__container text__center"
      v-if="contactMessage"
    >
      <h3>
        <strong
          >Thank you {{ contactMessage.name }}, for reaching out to Kumachi
          Coffee!</strong
        >
      </h3>

      <div class="contacted__message large">
        <p class="large">
          We've received your message
          <strong>{{ contactMessage.subject }}</strong
          >, and we'll get back to you shortly.
        </p>
        <p class="p-2-bt">
          <img
            src="../assets/images/logo-bear-coffee.png"
            alt="Logo Bear Coffee"
            class="bear-coffee"
          />
        </p>
        <p>
          Our team will review your message and get back to you at
          <strong>{{ contactMessage.email }}</strong> <br />or reach you at your
          number, <strong>{{ contactMessage.num }}</strong
          >. <br /><br />In the meantime, feel free to check out our latest
          brews.
        </p>
      </div>

      <div class="latest__products p-2-bt">
        <img src="../assets/images/grid-image-1.webp" alt="" />
        <img src="../assets/images/grid-image-8.webp" alt="" />
        <img src="../assets/images/grid-image-10.webp" alt="" />
      </div>

      <router-link to="/contact"
        ><button class="button__colored">
          Back to Contact Page
        </button></router-link
      >
    </section>

    <p v-else>Loading your message...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contactMessage: null,
    };
  },
  async created() {
    try {
      const response = await axios.get("/email");
      if (response.data.length > 0) {
        this.contactMessage = response.data[response.data.length - 1]; // Get the last message
      }
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  },
};
</script>

<style src="../assets/css/contacted.css"></style>
