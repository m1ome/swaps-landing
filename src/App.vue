<template>
  <div id="app">
    <div class="circles">
      <div class="top"></div>
    </div>

    <!-- Header stuff -->
    <div class="header">
        <div class="regulation">
            <p>regulated by EU</p>
            <div class="logo"></div>
        </div>
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
    </div>    
    
    <router-view></router-view>

    <div class="footer">
      <div class="content">
        <div class="links">
          <router-link to="/terms">Terms</router-link>
          <router-link to="/limits">Limits</router-link>
          <router-link to="/privacy">Privacy Policy</router-link>
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
export default {
  name: 'App'
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

.header {
    height: 150px;
    position: relative;
}

.header .logo {
    position: absolute;
    width: 98px;
    height: 92px;
    left: calc(50% - 98px/2);
    top: calc(50% - 92px/2);

    background: url("./assets/images/logo.svg");
}

.header .regulation {
    display: flex;
    flex-direction: row;
    padding: 0px;

    position: absolute;
    width: 156px;
    height: 24px;
    left: 91px;
    top: 63px;
}

.header .regulation p {
    position: static;
    width: 124px;
    height: 24px;
    left: 0px;
    top: 0px;
    padding-right: 3px;
    padding-top: 2px;

    /* Desktop / Default */
    font-family: ALS Sector;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height, or 150% */
    letter-spacing: 0.02em;

    /* Main / Black 50 */
    color: #8C979F;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: center;
    margin: 8px 0px;
}

.header .regulation .logo {
    position: static;
    width: 24px;
    height: 24px;
    left: 132px;
    top: 0px;

    background: url("./assets/images/flag.svg");

    /* Inside Auto Layout */
    flex: none;
    order: 1;
    align-self: center;
    margin: 8px 0px;
  
}

#app {
  position: relative;
  width: 100%;
  font-family: "ALS Sector";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
