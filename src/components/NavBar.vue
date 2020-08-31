<template>
  <b-navbar class="navbar">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/login' }">
        <img src="../assets/logo.png" alt="invoicer" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/billerlist' }">Biller-List</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div" v-if="token">
        <div class="buttons" @click="logout">
          <b-navbar-item class="button" tag="router-link" :to="{ path: '/login' }">
            <a class="is-primary">Logout</a>
          </b-navbar-item>
          <!-- <b-navbar-item class="button is-light" tag="router-link" :to="{ path: '/login' }">Log in</b-navbar-item> -->
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
// const token = localStorage.getItem("token");
export default {
  name: "NavBar",
  data() {
    return {
      token: localStorage.getItem("token")
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.token = "";
    }
  }
};
</script>
<style scoped>
</style>