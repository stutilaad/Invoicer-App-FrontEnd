<template>
  <section>
    <div class="columns">
      <div class="column is-2">
        <side-bar></side-bar>
      </div>
      <div class="column has-background-white-ter">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
<script>
import SideBar from "./SideBar";

export default {
  name: "DashBoard",

  components: {
    SideBar
  }
};
</script>
<style scoped>
</style>