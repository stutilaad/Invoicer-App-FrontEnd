<template>
  <div class="container">
    <button type="button" v-on:click="displayBillers">List of Billers</button>
    <b-table :data="billers" :columns="columns"></b-table>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.API_SERVER;
export default {
  name: "DisplayJson",
  data() {
    return {
      billers: [],
      // selected: billers[1],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40"
        },
        {
          field: "'name.firstName'+'name.lastName'",
          label: "Name"
        },

        {
          field: "email",
          label: "Email",
          centered: true
        },
        {
          field: "phone",
          label: "Phone",
          centered: true
        },
        {
          field:
            "'address.street'+'address.houseNo'+'address.city'+'address.postalCode'+'address.country'",
          label: "Address",
          centered: true
        },
        {
          field: "iban",
          label: "IBAN",
          centered: true
        },
        {
          field: "company",
          label: "Company",
          centered: true
        },
        {
          field: "website",
          label: "Website",
          centered: true
        }
      ]
    };
  },
  methods: {
    displayBillers() {
      axios
        .get(baseUrl + "/biller")
        .then(response => {
          console.log(response);
          this.$data.billers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped></style>
