<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <WeatherWidget city="London"></WeatherWidget>
      <WeatherWidget city="Paris"></WeatherWidget>
      <WeatherWidget city="Aberdeen"></WeatherWidget>
      <WeatherWidget city="Texas"></WeatherWidget>
    </div>
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget.vue";

export default {
  name: "Homepage",
  components: {WeatherWidget}
}
</script>

<style scoped>

</style>