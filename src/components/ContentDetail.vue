<template>
  <div class="contentdetail">
    <v-app>
      <v-carousel cycle hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <div class="detailtext">
        <h2>タイトル</h2>
        <p>
          詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント
          詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント
          詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント
          詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント詳細コメント
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
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
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
