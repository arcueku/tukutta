<template>
  <v-card
    class="v-card mx-auto"
    max-width="1000"
    tile
    :to="{ name: 'detailPage', params: { value: title, image: image } }"
  >
    <v-img :src="image" height="200px">
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
  props: ["title", "image"],
  data() {
    return {
      topImage: "https://unsplash.it/680/450?random",
    };
  },
};
</script>
