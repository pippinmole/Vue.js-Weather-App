<template>

  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="John Doe" v-model="person_name">
    <label for="floatingInput">What is your name?</label>
  </div>

  <p>Your name is {{ person_name }}</p>

</template>

<script>
export default {
  name: "TextInputField",
  data() {
    return {
      person_name: "test"
    }
  }
}
</script>

<style scoped>

</style>