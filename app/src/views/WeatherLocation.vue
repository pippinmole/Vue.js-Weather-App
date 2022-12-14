<template>
  <div v-if="weather_data">
    <h4>Weather for {{ weather_data.location.name }}</h4>
    Weather is available! {{JSON.stringify(weather_data)}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "WeatherLocation",
  data() {
    return {
      weather_data: null
    }
  },
  async created() {
    console.log("Getting weather data...")
    this.weather_data = null

    const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=bf331a11a1f94c6d898170812221412&q=" + this.$route.params.id + "&aqi=no",
        {crossDomain: true}
    )

    if(response.status === 200) {
      this.weather_data = response.data
    }

    console.log("Got weather data")
  },
  methods: {

  }
}
</script>

<style scoped>

</style>