<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="columns">
      <div class="column is-2">
        <side-bar></side-bar>
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

export default {
  name: "App",
  components: {
    NavBar,
    SideBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
