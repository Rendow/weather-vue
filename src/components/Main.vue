<template>
      <main>
        <div class="search-box">
          <input
              v-model="query"
              @keydown.enter="fetchWeather"
              type="text"
              class="search-bar"
              placeholder="Type the name of your city"/>
        </div>
        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="error" v-if="error">Your response is not valid. Please, try again</div>
            <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>
          <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}&#176;С</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
          </div>
          <div class="link">
            More detail you can find
            <span @click="$router.push({name:'about'})">here</span>
          </div>
        </div>
      </main>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      api_key: 'cb2e1df0d33dbe14cc2bcb17d5bd28ea',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: 'london',
      weather: {},
      error: false,
    }
  },
  methods: {
   async fetchWeather() {
      try {
        const res = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`);
        const data = await res.json();
        if (data.cod === 200) {
          this.error = false
           this.weather = data
          this.$store.state.theme = data.main.temp > 16 ? 'warm' : 'cold'
          console.log(this.$store.theme)
           this.$store.state.weather = data
            return
        }
        this.error = true
      } catch (e) {
        console.log(e)
      }

    },
    dateBuilder() {
      const d = new Date();
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  },
  created() {
    this.fetchWeather()
    this.query = ''

  },
}
</script>

<style>

main {

}

.search-box {
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  display: block;
  width: 100%;
  max-width: 650px;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;

}

.search-bar:focus {
  box-shadow: 0 0 16px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0 16px 0;
}

.location, .error, .link{
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.error, .link {
  color: #f9bbbb;
  font-size: 18px;
  padding: 10px 0 20px 0;
}
.link{
  color: #afafaf;
  padding-top: 15px;
}
.link span{
 cursor: pointer;
  color: #d0cece;
  transition: 0.3s;
}
.link span:hover{
  transition: 0.3s;
  color: #fff;
}
.date {
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;

}

.weather-box {
  text-align: center;
}

.temp, .about-weather {
  display: inline-block;
  padding: 10px 25px;
  color: #ffffff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
