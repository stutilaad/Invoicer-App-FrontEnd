<template>
  <div id="app">
    <nav-bar></nav-bar>
    <br />
    <br />
    <br />
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
</style>
