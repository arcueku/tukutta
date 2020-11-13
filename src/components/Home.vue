<template>
  <v-app dark>
    <div class="content-wrapper">
      <v-row>
        <v-col v-for="i in 6" :key="i" cols="12" sm="6" md="4" lg="3">
          <Content />
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
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.content-wrapper {
  margin: 100px 2rem;
}
</style>
