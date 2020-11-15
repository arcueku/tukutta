<template>
  <v-card
    class="v-card mx-auto"
    max-width="1000"
    tile
    :to="{ name: 'detailPage', params: { value: title, image: topImage } }"
  >
    <v-img :src="topImage" height="200px">
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      topImage: "https://picsum.photos/200",
    };
  },
};
</script>
