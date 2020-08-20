<template>
  <section class="section has-background-white-ter">
    <div class="columns">
      <div class="column box is-half is-offset-one-quarter" style="padding:2%">
        <h1 class="title has-text-centered has-text-primary">Let's get you Registered!</h1>
        <br />
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
          <div class="column">
            <b-field label="Phone">
              <b-input v-model="biller.phone"></b-input>
            </b-field>
          </div>
        </div>

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
          <div class="column">
            <b-field label="Country">
              <b-select placeholder="Select a Country" required expanded>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </b-select>
            </b-field>
          </div>
        </div>
        <hr
          class="has-background-primary"
          style="height:1px ;width: 80%; margin-left:auto ; margin-right:auto"
        />

        <b-field label="IBAN">
          <b-input v-model="biller.iban"></b-input>
        </b-field>

        <b-field label="Company">
          <b-input v-model="biller.company"></b-input>
        </b-field>

        <b-field label="Website">
          <b-input v-model="biller.website"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input v-model="biller.password"></b-input>
        </b-field>

        <b-field label="Confirm Password">
          <b-input></b-input>
        </b-field>

        <div class="columns">
          <div class="column has-text-centered">
            <button
              v-on:click="registerbiller"
              class="button is-medium is-primary"
              @click="success"
            >Submit</button>
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered">
            <a href="/#/login">Already a user?</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.VUE_APP_API_SERVER;

export default {
  name: "RegisterBiller",
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
        website: "",
        password: ""
      }
    };
  },
  methods: {
    success() {
      this.$buefy.toast.open({
        message: "Registered successfully!",
        type: "is-success"
      });
    },
    registerbiller() {
      axios
        .post(baseUrl + "/biller", this.$data.biller)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkBiller() {
      console.log(this.$route.query.billerId);
      if (this.$route.query.billerId != undefined) {
        axios
          .get(baseUrl + "/biller/" + this.$route.query.billerId)
          .then(response => {
            console.log(response);
            this.$data.biller = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    this.checkBiller();
  }
};
</script>
<style scoped >
</style>