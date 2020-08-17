<template>
  <section class="section has-background-white-ter">
    <div class="container box">
      <b-table :data="billers">
        <template slot-scope="props">
          <b-table-column
            field="name"
            label="Name"
          >{{ props.row.name.firstName }} {{props.row.name.lastName}}</b-table-column>
          <b-table-column field="email" label="Email">{{ props.row.email }}</b-table-column>
          <b-table-column field="phone" label="Phone">{{ props.row.phone }}</b-table-column>
          <b-table-column
            field="address"
            label="Address"
          >{{ props.row.address.street }}, {{props.row.address.houseNo}}, {{props.row.address.city}} - {{props.row.address.postalCode}}, {{props.row.address.country}}</b-table-column>
          <b-table-column field="iban" label="IBAN">{{ props.row.iban }}</b-table-column>
          <b-table-column field="company" label="Company">{{ props.row.company }}</b-table-column>
          <b-table-column field="website" label="Website">{{ props.row.website }}</b-table-column>
          <b-table-column field="action" label="Update">
            <font-awesome-icon icon="edit" @click="updateBiller(props.row.id)"></font-awesome-icon>
          </b-table-column>
          <b-table-column field="action" label="Delete">
            <font-awesome-icon icon="trash" @click="deleteBiller(props.row.id)"></font-awesome-icon>
          </b-table-column>
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
    },
    updateBiller(billerId) {
      console.log("Update called");
      console.log(billerId);
      this.$router.push({ path: "/register?billerId=" + billerId });
    },
    deleteBiller(billerId) {
      console.log("delete called");
      console.log(billerId);
      axios
        .delete(baseUrl + "/biller/" + billerId)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.displayBillers();
    }
  },
  mounted() {
    this.displayBillers();
  }
};
</script>
<style scoped></style>
