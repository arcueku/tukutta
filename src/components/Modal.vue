<template>
  <v-dialog dark v-model="dialog" max-width="500" persistent no-click-animation>
    <template #activator="{ on }">
      <v-btn v-on="on" class="mx-2 button" fab dark color="dark" absolute>
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        Dialog Title
      </v-card-title>
      <v-card-subtitle>model:[{{ dialog }}]</v-card-subtitle>
      <v-card-text>
        <div class="body-1">
          card text. card text. card text. card text. card text.
        </div>
        <div class="body-2">
          card text. card text. card text. card text. card text. card text. card
          text. card text. card text.
          <small class="cyan--text">card text. card text. card text.</small>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
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
