<script setup>
import Header from "@/components/Header.vue";
import TextInputField from "@/components/TextInputField.vue";
</script>

<template>
  <header>
      <Header></Header>
  </header>

  <main>
    <TextInputField></TextInputField>

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
