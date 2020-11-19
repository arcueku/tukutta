<template>
  <v-app dark>
    <div class="content-wrapper">
      <v-row>
        <v-col
          v-for="post of posts"
          :key="post.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <Content
            :title="post.title"
            :image="post.image"
            :description="post.description"
          />
        </v-col>
      </v-row>
      <Modal />
    </div>
  </v-app>
</template>

<script>
import Content from "@/components/Content.vue";
import Modal from "@/components/Modal.vue";
import { db } from "@/plugins/firebase";

export default {
  components: { Content, Modal },
  data() {
    return {
      posts: [
        // {
        //   title: "いちご",
        //   image: "https://unsplash.it/680/450?random",
        //   description: "いちごの解説です。",
        // },
        // {
        //   title: "りんご",
        //   image: "https://unsplash.it/680/450",
        //   description: "りんごの解説です。",
        // },
        // {
        //   title: "みかん",
        //   image: "https://unsplash.it/680/450?random",
        //   description: "みかんの解説です。",
        // },
        // {
        //   title: "ぶどう",
        //   image: "https://unsplash.it/680/450",
        //   description: "ぶどうの解説です。",
        // },
      ],
    };
  },
  async mounted() {
    const snapshot = await db.collection("posts").get();
    snapshot.forEach((doc) => {
      this.posts.push(doc.data());
    });   
  },
};
</script>

<style scoped>
.content-wrapper {
  margin: 100px 2rem;
}
</style>
