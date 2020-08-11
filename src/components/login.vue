<template>
  <section class="section has-background-white-ter">
    <div class="container box" style="width:40% ">
      <b-field label="Username">
        <b-input v-model="userName"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
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
      userName: "",
      password: "",
      available: 0
    };
  },
  methods: {
    checkIfUserNameIsAvailable() {
      axios
        .get(baseUrl + "/login", this.userName)
        .then(response => {
          console.log(response);
          this.available = 1;
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