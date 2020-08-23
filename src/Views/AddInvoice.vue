<template>
  <section class="section">
    <h1 class="title has-text-centered has-text-primary">Choose a Template for your Invoice.</h1>
    <br />
    <div class="columns">
      <div class="column has-text-centered">
        <a href>
          <img src="../assets/invoice_with_free_text.png" alt />
        </a>
        <br />
        <br />
        <br />
        <h1>With free text</h1>
      </div>
      <div class="column has-text-centered">
        <a href>
          <img src="../assets/invoice_without_free_text.png.png" alt />
        </a>
        <br />
        <br />
        <br />
        <h1>Without free text</h1>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AddInvoice"
};
</script>
<style  scoped>
img:hover {
  transform: scale(1.2);
}
</style>