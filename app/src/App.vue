<script setup>
import Header from "@/components/Header.vue";
import WeatherWidget from "@/components/WeatherWidget.vue";
</script>

<template>
  <header>
    <h2>Header here</h2>
  </header>

  <main>
    <router-view />

    <div class="container-fluid">
      <div class="row justify-content-center">
        <WeatherWidget city="London"></WeatherWidget>
        <WeatherWidget city="Paris"></WeatherWidget>
        <WeatherWidget city="Aberdeen"></WeatherWidget>
        <WeatherWidget city="Texas"></WeatherWidget>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
}
</style>
