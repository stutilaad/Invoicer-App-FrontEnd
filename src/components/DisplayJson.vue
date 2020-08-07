<template>
  <section class="section has-background-white-ter">
    <div class="container box">
      <b-table :data="billers">
        <template slot-scope="props">
          <b-table-column field="id" label="ID">{{ props.row.id }}</b-table-column>
          <b-table-column
            field="name"
            label="Name"
          >{{ props.row.name.firstName }} {{props.row.name.lastName}}</b-table-column>
          <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column>
          <b-table-column field="phone" label="Phone">{{ props.row.phone }}</b-table-column>
          <b-table-column
            field="address"
            label="Address"
          >{{ props.row.address.street }}{{props.row.address.houseNo}}{{props.row.address.city}}{{props.row.address.postalCode}}{{props.row.address.country}}</b-table-column>
          <b-table-column field="iban" label="IBAN">{{ props.row.iban }}</b-table-column>
          <b-table-column field="company" label="Company">{{ props.row.company }}</b-table-column>
          <b-table-column field="website" label="Website">{{ props.row.website }}</b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.VUE_APP_API_SERVER;
export default {
  name: "DisplayJson",
  data() {
    return {
      billers: []
      // selected: billers[1],
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
  },
  mounted() {
    this.displayBillers();
  }
};
</script>
<style scoped></style>
