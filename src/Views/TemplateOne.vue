<template>
  <section>
    <br />
    <br />
    <div class="container box has-background-secondprimary">
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
            <b-input disabled v-model="invoice.invoiceNo"></b-input>
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
    <div class="container box has-background-secondprimary">
      <b-field label="Free Text">
        <b-input maxlength="500" type="textarea" v-model="invoice.freeTextOne"></b-input>
      </b-field>
    </div>
    <div class="container box has-background-secondprimary">
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
              <b-input v-model="props.row.price"></b-input>
            </b-field>
          </b-table-column>
          <b-table-column label="Quantity">
            <b-field>
              <b-input v-model="props.row.total"></b-input>
            </b-field>
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
    <div class="container box has-background-secondprimary">
      <b-field label="Free Text">
        <b-input maxlength="500" type="textarea" v-model="invoice.freeTextTwo"></b-input>
      </b-field>
    </div>
    <div class="container box has-background-secondprimary">
      <div class="columns">
        <div class="column is-three-quarters">
          <b-field label="Footer">
            <b-input maxlength="500" type="textarea" v-model="invoice.footer"></b-input>
          </b-field>
        </div>
        <div class="column" style="margin:1%">
          <b-field label="Discount">
            <b-select expanded>
              <!-- <option value="discount">India</option>
              <option value="USA">USA</option>-->
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
    <div class="has-background-primary">
      <div class="column is-2 is-offset-10">
        <button class="button is-light">Continue</button>
      </div>
    </div>
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
        total: "123.00",
        invoiceNo: ""
      },
      productSerialNo: ""
    };
  },
  methods: {
    getInvoiceNo() {
      axios
        .get(baseUrl + "/newinvoicenumber")
        .then(response => {
          console.log(response);
          this.$data.invoice.invoiceNo = response.data;
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
        price: "",
        quantity: "",
        total: ""
      };
      this.$data.invoice.products.push(product);
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