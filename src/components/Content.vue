<template>
  <v-card
    class="v-card mx-auto"
    max-width="1000"
    tile
    :to="{ name: 'detailPage' }"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    >
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    <v-card-title>
      Top western road trips
    </v-card-title>
    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
</template>
