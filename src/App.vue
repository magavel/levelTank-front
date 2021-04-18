<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Niveau cuve à eau

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <chart></chart>
    </v-main>
  </v-app>
</template>

<script>

import Chart from '@/components/chart.vue';

export default {
  name: 'App',

  components: {
    Chart,
  },

  data: () => ({
    //
  }),
};
</script>
