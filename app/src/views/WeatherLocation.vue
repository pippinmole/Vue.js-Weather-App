<template>
  <h2>Test WeatherLocation</h2>

  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="John Doe" v-on:input="() => getWeatherData(input_location)" v-model="input_location">
    <label for="floatingInput">Location</label>
  </div>

  <p>Your name is {{ input_location }}</p>

</template>

<script>
import axios from 'axios'

export default {
  name: "WeatherLocation",
  data() {
    return {
      input_location: "Sheffield"
    }
  },
  methods: {
    getLongLatFor: async(location) => {
      axios({
        method: "GET",
        url: "https://geocoding-api.open-meteo.com/v1/search?name=" + location
      }).then((response) => {
        return response.data.results[0]
      }).catch(e => {
        console.log("Failed to find weather data...", e)
        return null
      });
    },
    getWeatherData: async (location) => {
      const locationData = await this.getLongLatFor(location)
      const latitude = location.latitude
      const longitude = locationData.longitude

      console.log("Getting weather data for " + location)
      axios({
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m"
      }).then((response) => {
        return response
      }).catch(e => {
        console.log("Failed to find weather data...", e)
        return null
      });
    }
  },
  async created() {
    console.log('The id is: ' + this.$route.params.id);


    await new Promise(res => setTimeout(res, 1000))

    this.input_location = await this.getWeatherData("Sheffield")
  }
}
</script>

<style scoped>

</style>