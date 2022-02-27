<template>
  <div id="app" :class="getTheme">
    <div class="wrap">
      <div class="container">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    getTheme(){
      return this.$store.state.theme === 'cold' ? '' : 'warm'
    }
  },
  watch:{

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

#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}

.wrap {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  min-height: 100vh;
  max-width: 950px;
  padding: 60px 25px;
  flex-grow: 1;
}

</style>
