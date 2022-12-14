<template>

  <h4>Weather for {{ $route.params.id }}</h4>


</template>

<script>
import axios from 'axios'

export default {
  name: "WeatherLocation",
  data() {
    return {
      weather_data: "Loading..."
    }
  },
  async created() {
    console.log("Getting weather data...")
    this.weather_data = "Loading..."

    axios.get("https://geocoding-api.open-meteo.com/v1/search?name=" + this.$route.params.id).then((response) => {
      const latitude = response.data.results[0].latitude
      const longitude = response.data.results[0].longitude

      axios.get("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m")
        .then((response) => {
          this.weather_data = response.data
          console.log("Got weather data:" + this.weather_data)
        }).catch(e => {
          console.log("Failed to find weather data...", e)
        });
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>