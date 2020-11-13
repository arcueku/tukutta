<template>
  <v-app dark>
    <Header />
    <!-- <router-link to="/detail">detail</router-link> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
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
