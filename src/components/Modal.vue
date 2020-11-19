<template>
  <v-dialog
    dark
    v-model="dialog"
    max-width="700"
    persistent
    no-click-animation
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <template #activator="{ on }">
      <v-btn v-on="on" class="mx-2 button" fab dark color="dark" absolute>
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">アップロード</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12"> </v-col>
            <v-col cols="12">
              <v-file-input
                :rules="[required]"
                filled
                type="file"
                show-size
                ref="fileupload"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                label="UPLOAD IMAGE"
                @change="onFilePicked"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="title"
                :rules="[required, limit_length]"
                label="タイトル"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="description"
                :rules="[required]"
                clearable
                clear-icon="mdi-close-circle"
                label="詳細"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          閉じる
        </v-btn>
        <v-btn color="blue darken-1" text @click="upload">
          投稿
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "firebase";
import { db } from "@/plugins/firebase";

export default {
  data() {
    return {
      dialog: false,
      // 各テキストボックスの値
      title: "",
      description: "",

      imageName: "",
      imageUrl: "",
      imageFile: "",

      required: (value) => !!value || "必ず入力してください", // 入力必須の制約
      limit_length: (value) =>
        value.length <= 20 || "20文字以内で入力してください", // 文字数の制約
    };
  },
  methods: {
    onFilePicked(data) {
      this.imageFile = data;
      this.imageName = data.name;
    },
    async upload() {
      const storageRef = firebase.storage().ref();
      const time = new Date().getTime();
      const ref = storageRef.child(`posts/${time}_${this.imageName}`);
      const snapshot = await ref.put(this.imageFile);
      const url = await snapshot.ref.getDownloadURL();
      this.imageUrl = url;
      console.log(this.imageUrl);

      //モーダルを閉じる
      this.dialog = false;

      db.collection("posts").add({
        title: this.title,
        image: this.imageUrl,
        description: this.description,
        createdAt: new Date().getTime(),
      });
    },
  },
};
</script>

<style scoped>
.button {
  position: fixed;
  right: 50px;
  bottom: 30px;
}
</style>
