import WeatherLocation from "@/views/WeatherLocation.vue";
import Homepage from "@/views/Homepage.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export const routes = [
    { path: '/', component: Homepage },
    { path: '/location/:id', component: WeatherLocation },
    { path: '/:catchAll(.*)*', component: PageNotFound }
]