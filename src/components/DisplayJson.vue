<template>
  <div class="container">
    <button type="button" v-on:click="displayBillers">List of Billers</button>
    <b-table :data="billers">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>
      </template>
    </b-table>
  </div>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.API_SERVER;
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
        .get(baseUrl + '/biller')
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
