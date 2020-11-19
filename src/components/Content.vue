<template>
  <v-card
    class="v-card mx-auto"
    max-width="1000"
    tile
    :to="{
      name: 'detailPage',
      params: { title: title, image: image, description: description },
    }"
  >
    <v-img :src="image" height="200px">
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ description }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["title", "image", "description"],
  data() {
    return {
      topImage: "https://unsplash.it/680/450?random",
    };
  },
};
</script>
