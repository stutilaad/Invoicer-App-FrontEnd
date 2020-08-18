<template>
  <section class="section has-background-white-ter">
    <div class="container box" style="width:40% ">
      <b-field label="Username">
        <b-input v-model="loginData.email"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="loginData.password"></b-input>
      </b-field>
      <button v-on:click="login" class="button is-medium is-primary">Log In</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.VUE_APP_API_SERVER;
export default {
  name: "Login",
  data() {
    return {
      loginData: { email: "", password: "" }
    };
  },
  methods: {
    login() {
      axios
        .post(baseUrl + "/login", this.loginData)
        .then(response => {
          console.log(response);
          this.$router.push({ path: "/dashboard" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
</style>