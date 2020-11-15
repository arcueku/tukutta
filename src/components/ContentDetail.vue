<template>
  <div class="contentdetail">
    <v-app>
      <v-carousel cycle hide-delimiters>
        <v-carousel-item :src="$route.params.image"></v-carousel-item>
      </v-carousel>
      <div class="detailtext">
        <h2>{{ $route.params.value }}</h2>
        <p>
          ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。
          ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。
          ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。ここには作品の説明が入ります。
        </p>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://picsum.photos/600",
        },
        {
          src: "https://picsum.photos/200",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contentdetail {
  margin-top: 56px;
}
</style>
