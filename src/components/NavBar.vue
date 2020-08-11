<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <a href="#">
          <strong>INVOICER-APP</strong>
        </a>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/billerlist' }">Biller-List</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-navbar-item class="button is-primary" tag="router-link" :to="{ path: '/register' }">
            <strong>Sign up</strong>
          </b-navbar-item>
          <b-navbar-item class="button is-light" tag="router-link" :to="{ path: '/login' }">Log in</b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
</style>