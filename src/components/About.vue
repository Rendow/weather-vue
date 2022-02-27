<template>
  <div class="about-wrap">
  <div class="about-weather">
    <h1> Weather forecast </h1>
    <div><div>Temperature: </div><div>{{data.main.temp}}&#176;С</div></div>
    <div><div>Feels Like: </div><div>{{data.main.feels_like}}&#176;С</div></div>
    <div><div>Atmospheric pressure: </div><div>{{data.main.pressure}} hPa</div></div>
    <div><div>Humidity: </div><div>{{data.main.humidity}}%</div></div>
    <div><div>Cloudiness: </div><div>{{data.clouds.all}}%</div></div>
    <div><div>Wind speed: </div><div>{{data.wind.speed}} m/s</div></div>
    <span class="link"> Go to <span @click="$router.push({name:'main'})">home</span> page</span>
  </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      data: null,
    }
  },
  methods: {},
  created() {
    this.data = this.$store.state.weather
  },
}
</script>

<style scoped>

.link{
  padding-top: 25px;
}
.about-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.about-weather {
  display: flex;
  flex-direction: column;
  text-shadow: none;
  font-size: 24px;
}
.about-weather h1{
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
  padding-bottom: 30px;
}
.about-weather > div{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  text-align: left;
  padding: 5px 0;
}
</style>
