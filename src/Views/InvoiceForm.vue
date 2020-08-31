<template>
  <section class="section">
    <div class="container box">
      <div class="columns">
        <div class="column">
          <b-field label="Payer Name">
            <b-input v-model="invoice.payerName"></b-input>
          </b-field>
          <b-field label="Payer Email">
            <b-input v-model="invoice.payerEmail"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Due Date">
            <b-input v-model="invoice.dueDate"></b-input>
          </b-field>
          <b-field class="has-text-danger" label="Invoice Number">
            <b-input custom-class="has-text-primary" disabled v-model="invoice.invoiceNo"></b-input>
          </b-field>
        </div>
        <div class="column box has-text-centered" style="margin:1%">
          <br />
          <div class="has-text-centered">Choose Logo for invoice</div>
          <br />

          <b-field class="file is-primary is-centered" :class="{'has-name': !!file}">
            <b-upload v-model="file" class="file-label">
              <span class="file-cta">
                <b-icon class="file-icon" icon="upload"></b-icon>
                <span class="file-label">Click to upload</span>
              </span>
              <span class="file-name" v-if="file">{{ file.name }}</span>
            </b-upload>
          </b-field>
        </div>
      </div>
    </div>
    <div class="container box" v-if="this.$route.query.template==1">
      <b-field label="Free Text">
        <b-input maxlength="500" type="textarea" v-model="invoice.freeTextOne"></b-input>
      </b-field>
    </div>
    <div class="container box">
      <b-table :data="invoice.products">
        <template slot-scope="props">
          <b-table-column label="S.No." width="40">{{props.row.productSerialNo}}</b-table-column>
          <b-table-column label="Name">
            <b-field>
              <b-input v-model="props.row.name"></b-input>
            </b-field>
          </b-table-column>
          <b-table-column label="Description">
            <b-field>
              <b-input v-model="props.row.description"></b-input>
            </b-field>
          </b-table-column>
          <b-table-column label="Price">
            <b-field>
              <b-input v-model="props.row.price" @input="calculateTotal"></b-input>
            </b-field>
          </b-table-column>
          <b-table-column label="Quantity">
            <b-field>
              <b-input v-model="props.row.quantity" @input="calculateTotal"></b-input>
            </b-field>
          </b-table-column>
          <b-table-column label="Total">
            <b-field>{{ props.row.quantity * props.row.price }}</b-field>
          </b-table-column>
          <b-table-column label="Remove">
            <font-awesome-icon icon="trash" @click="removeProduct(props.row.productSerialNo)"></font-awesome-icon>
          </b-table-column>
        </template>
      </b-table>

      <div class="column is-2 is-offset-10">
        <button class="button is-primary" icon="add" @click="addProduct">Add product</button>
      </div>
    </div>
    <div class="container box" v-if="this.$route.query.template==1">
      <b-field label="Free Text">
        <b-input maxlength="500" type="textarea" v-model="invoice.freeTextTwo"></b-input>
      </b-field>
    </div>
    <div class="container box">
      <div class="columns">
        <div class="column is-three-quarters">
          <b-field label="Footer">
            <b-input maxlength="500" type="textarea" v-model="invoice.footer"></b-input>
          </b-field>
        </div>
        <div class="column" style="margin:1%">
          <b-field label="Discount">
            <b-select expanded>
              <option value="10">10%</option>
              <option value="20">20%</option>
            </b-select>
          </b-field>
          <hr
            class="has-background-primary"
            style="height:1px ;width: 80%; margin-left:auto ; margin-right:auto"
          />
          <div class="columns">
            <div class="column is-2">
              <span>Total:</span>
            </div>
            <div class="column is-2 is-offset-7">
              <span class="has-text-primary">{{invoice.total}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      style="
             position: fixed;
             bottom: 0;
             left: 0;
             width: 100%;"
    >
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column has-text-right">
          <button
            class="button is-primary"
            style="margin-right:1rem; margin-bottom:1rem;"
            @click="saveInvoice"
          >Continue</button>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import axios from "axios";
const baseUrl = process.env.VUE_APP_API_SERVER;
export default {
  name: "TemplateOne",
  data() {
    return {
      file: null,
      invoice: {
        payerName: "",
        payerEmail: "",
        dueDate: "",
        products: [],
        freeTextOne: "",
        freeTextTwo: "",
        footer: "",
        total: 0.0,
        invoiceNo: ""
      }
      // ,
      // productSerialNo: ""
    };
  },
  methods: {
    getInvoiceNo() {
      axios
        .get(baseUrl + "/newinvoicenumber", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => {
          console.log(response);
          this.$data.invoice.invoiceNo = response.data.invoiceNo;
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveInvoice() {
      axios
        .post(baseUrl + "/saveinvoice", this.$data.invoice, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addProduct() {
      let product = {
        productSerialNo: this.$data.invoice.products.length + 1,
        name: "",
        description: "",
        price: 0.0,
        quantity: 0.0,
        total: 0.0
      };
      this.$data.invoice.products.push(product);
    },
    calculateTotal() {
      var i;
      this.$data.invoice.total = 0;
      for (i = 0; i < this.$data.invoice.products.length; i++) {
        this.$data.invoice.total +=
          this.$data.invoice.products[i].price *
          this.$data.invoice.products[i].quantity;
      }
    },
    removeProduct(productSerialNo) {
      this.invoice.products.splice(productSerialNo - 1);
    }
  },
  mounted() {
    this.addProduct(), this.getInvoiceNo();
  }
};
</script>
<style scoped>
</style>