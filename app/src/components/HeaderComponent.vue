<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container">
      <router-link to="/" class="navbar-brand">Weather</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
<!--          <router-link to="/" class="nav-link active">Home</router-link>-->
<!--          <router-link to="/search" class="nav-link">Search</router-link>-->
        </div>
      </div>

      <form class="d-flex" role="search" @click.stop.prevent="">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
        <button class="btn btn-outline-success" type="submit" v-on:click="search()"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchQuery: ""
    }
  },
  methods: {
    search() {
      this.$router.push("/location/" + this.searchQuery)
    }
  }
}
</script>

<style scoped>

</style>