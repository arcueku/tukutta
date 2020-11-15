<template>
  <v-app dark>
    <div class="content-wrapper">
      <v-row>
        <v-col
          v-for="(content, i) in contents.title"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <Content :title="content" :image="contents.image[i]" />
        </v-col>
      </v-row>
      <Modal />
    </div>
  </v-app>
</template>

<script>
import Content from "@/components/Content.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: { Content, Modal },
  data() {
    return {
      contents: {
        title: ["たいとる1", "たいとる2", "たいとる3", "たいとる4"],
        image: [
          "https://unsplash.it/680/450?random",
          "https://unsplash.it/680/450",
          "https://unsplash.it/680/450",
          "https://unsplash.it/680/450?random",
        ],
      },
    };
  },
};
</script>

<style scoped>
.content-wrapper {
  margin: 100px 2rem;
}
</style>
