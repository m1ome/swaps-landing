<template>
  <div id="app">
    <div class="circles">
      <div class="top"></div>
    </div>
    
    <Index/>

    <div class="footer">
      <div class="content">
        <div class="links">
          <a href="#">Terms</a>
          <a href="#">Limits</a>
          <a href="#">Privacy Policy</a>
          <br style="clear: both">
        </div>
        <div class="text">
          Crypto asset services are provided by Octo Liquidity OU under virtual currency exchange license no FVR001321 and wallet service provider license no FRK001202 issued by Estonian FIU.
        </div>
      </div>
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
}

.footer .content {
  width: 1000px;
  margin: 0 auto;
}

.footer .content a {
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
  color: #193040;
  opacity: 0.5;
  display: block;
  float: left;
  margin-right: 48px;
}

.footer .content .text {
  font-size: 12px;
  line-height: 16px;
  color: #193040;
  opacity: 0.25;
  letter-spacing: 0.02em;
  margin-top: 10px;
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
