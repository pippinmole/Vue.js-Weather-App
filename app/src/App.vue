<script setup>
import Header from "@/components/HeaderComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent></HeaderComponent>
  </header>

  <main>
    <router-view />
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
