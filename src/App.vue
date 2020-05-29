<template>
  <div id="app">
    <div class="circles">
      <div class="top"></div>
    </div>
    
    <Index/>

    <div class="footer">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
@font-face {
  font-family: "ALS Sector";
  src: url("./assets/fonts/acl_regular.otf");
}
body {
  overflow-x: hidden;
}
.footer {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
  background: red;
}
.circles {
  position: relative;
  width: 100%;
  height: auto;
  background: red;
}
.circles .top {
    position: absolute;
    width: 1956px;
    height: 1956px;
    right: -978px;
    top: -978px;

    background: #2595DF;
    opacity: 0.1;    

    border-radius: 50%;
}

#app {
  position: relative;
  width: 100%;
  font-family: "ALS Sector";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
