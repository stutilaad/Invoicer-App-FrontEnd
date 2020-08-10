<template>
  <section>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <!-- <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />-->
          <a href="#">
            <strong>INVOICER-APP</strong>
          </a>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Biller-List</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="section has-background-white-ter">
      <div class="container box" style="width:40%">
        <label class="label">Name</label>
        <div class="columns">
          <div class="column">
            <b-field label="First Name">
              <b-input v-model="biller.name.firstName"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label=" Last Name">
              <b-input v-model="biller.name.lastName"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Email">
              <b-input type="email" v-model="biller.email"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Phone">
              <b-input v-model="biller.phone"></b-input>
            </b-field>
          </div>
        </div>
        <label class="label">Address</label>
        <div class="columns">
          <div class="column">
            <b-field label=" Street">
              <b-input v-model="biller.address.street"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label=" House No.">
              <b-input v-model="biller.address.houseNo"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="City">
              <b-input v-model="biller.address.city"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Postal Code">
              <b-input v-model="biller.address.postalCode"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label=" Country">
              <b-input v-model="biller.address.country"></b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="IBAN">
              <b-input v-model="biller.iban"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Company">
              <b-input v-model="biller.company"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Website">
              <b-input v-model="biller.website"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <button v-on:click="registerbiller">Submit</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.VUE_APP_API_SERVER;

export default {
  name: "Registerbiller",

  data() {
    return {
      biller: {
        name: {
          firstName: "",
          lastName: ""
        },
        email: "",
        phone: "",
        address: {
          street: "",
          houseNo: "",
          city: "",
          postalCode: "",
          country: ""
        },
        iban: "",
        company: "",
        website: ""
      }
    };
  },
  methods: {
    registerbiller() {
      // console.log(this.name.firstName);
      axios
        .post(baseUrl + "/biller", this.$data.biller)
        .then(response => {
          console.log(response);
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