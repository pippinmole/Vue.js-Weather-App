<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <header>
    <h2>Homepage</h2>
  </header>

  <main>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/WeatherLocation">Go to About</router-link>

    <router-view></router-view>
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
