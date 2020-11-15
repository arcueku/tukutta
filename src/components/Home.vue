<template>
  <v-app dark>
    <div class="content-wrapper">
      <v-row>
        <v-col
          v-for="title in titles"
          :key="title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <Content :title="title" />
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
      titles: [
        "タイトル1",
        "タイトル2",
        "タイトル3",
        "タイトル4",
        "タイトル5",
        "タイトル6",
      ],
    };
  },
};
</script>

<style scoped>
.content-wrapper {
  margin: 100px 2rem;
}
</style>
