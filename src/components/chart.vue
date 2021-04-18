<template>
  <v-container fluid>
    <v-sparkline
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>
  </v-container>
</template>

<script>
import valueService from '@/services/valueService';

const gradients = ['#2044f7', '#ea1f4e'];
export default {
  name: 'chart',
  data() {
    return {
      fill: true,
      selectedGradient: gradients,
      gradients,
      padding: 8,
      radius: 10,
      value: [],
      width: 2,
    };
  },
  created() {
    valueService.getAllValuesByCapteur(56777777).then((res) => {
      this.value = res;
    });
  },
};
</script>

<style scoped>

</style>
