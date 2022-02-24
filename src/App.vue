<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <div class="search-box">
        <input
            v-model="query"
            @keydown.enter="fetchWeather"
            type="text"
            class="search-bar"
            placeholder="Search..."/>
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{weather.name}}, {{weather.sys.country}}</div>
          <div class="date">{{dateBuilder()}}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{Math.round(weather.main.temp)}}&#176;С</div>
          <div class="weather">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      api_key: 'cb2e1df0d33dbe14cc2bcb17d5bd28ea',
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{},
    }
  },
  methods:{
    async fetchWeather() {
      const res = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`);
      this.weather = await res.json();
    },
    dateBuilder () {
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

}
</script>

<style>
@font-face {
  font-family: "JetBrains";
  src: local("JetBrains"), url(./fonts/JetBrainsMono-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "JetBrains";
  src: local("JetBrains"), url(./fonts/JetBrainsMono-Italic.ttf) format("truetype");
  font-style: italic;
}
@font-face {
  font-family: "JetBrains";
  src: local("JetBrains"), url(./fonts/JetBrainsMonoNL-Bold.ttf) format("truetype");
  font-weight: bold;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  font-family: 'JetBrains';
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-position: bottom;
  background-size: cover;
  transition: 0.4s;
}
#app.warm{
  background-image: url('./assets/warm-bg.jpg');
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-bar {
  display: block;
  width: 100%;
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
 .location{
   color: #ffffff;
   font-size: 32px;
   font-weight: 500;
   text-align: center;
   text-shadow: 1px 3px rgba(0,0,0,0.25);
 }
 .date{
   color: #ffffff;
   font-size: 20px;
   font-weight: 300;
   font-style: italic;
   text-align: center;

 }
.weather-box{
  text-align: center;
}
.temp{
  display: inline-block;
  padding: 10px 25px;
  color: #ffffff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0,0,0,0.25);
}
.weather{
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
}
</style>
