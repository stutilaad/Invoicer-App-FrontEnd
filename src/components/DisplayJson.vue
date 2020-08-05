<template>
  <div class="container">
    <button type="button" v-on:click="displayBillers">List of Billers</button>
    <b-table :data="billers" :columns="columns"></b-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DisplayJson",
  data() {
    return {
      billers: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40"
        },
        {
          field: "name.firstName",
          label: "First Name"
        },
        {
          field: "name.lastName",
          label: "Last Name"
        },
        {
          field: "email",
          label: "Email",
          centered: true
        }
      ]
    };
  },
  methods: {
    displayBillers() {
      axios
        .get("http://localhost:8080/billers")
        .then((response) => {
          console.log(response);
          this.$data.billers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped></style>
