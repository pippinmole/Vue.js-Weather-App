<template>
  <div class="col-12 col-md-4 col-sm-12 col-xs-12">
    <div class="card p-4">
      <div class="d-flex">
        <h6 class="flex-grow-1">{{city}}</h6>
        <h6 v-if="weather_data">{{ new Date(weather_data.location.localtime_epoch * 1000).getTime() }}</h6>
      </div>

      <div class="d-flex flex-column temp mt-5 mb-3">
        <h1 class="mb-0 font-weight-bold" id="heading" v-if="weather_data">
          {{ weather_data.current.temp_c }}&deg; C
        </h1>
        <span class="small grey" v-if="weather_data">{{ weather_data.current.condition.text }}</span>
      </div>

      <div class="d-flex">
        <div class="temp-details flex-grow-1">
          <p class="my-1">
            <i class="bi bi-wind"></i>

            <span v-if="weather_data" class="m-lg-2">{{ weather_data.current.wind_kph }} km/h</span>
          </p>

          <p class="my-1">
            <i class="bi bi-moisture"></i>

            <span v-if="weather_data" class="m-lg-2"> {{ weather_data.current.humidity }}% </span>
          </p>

          <p class="my-1">
            <img src="https://i.imgur.com/wGSJ8C5.png" height="17px" >
            <span> 0.2h </span>
          </p>
        </div>

        <div>
          <img src="https://i.imgur.com/Qw7npIg.png" width="100px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "WeatherWidget",
  props: ["city"],
  data() {
    return {
      weather_data: null
    }
  },
  async created() {
    // await new Promise(res => setTimeout(res, 1000))
    const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=bf331a11a1f94c6d898170812221412&q=" + this.city + "&aqi=no",
        {crossDomain: true}
    )

    this.weather_data = response.data
  },
  methods: {

  }
}
</script>

<style scoped>

</style>