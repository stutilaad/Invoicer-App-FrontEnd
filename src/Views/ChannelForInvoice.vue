<template>
  <section class="section">
    <b-collapse aria-id="contentIdForA11y2" class="panel" animation="slide" v-model="isOpen">
      <div slot="trigger" class="panel-heading" role="button" aria-controls="contentIdForA11y2">
        <div class="field">
          <div class="columns">
            <div class="column">
              <strong>Title</strong>
            </div>
            <div class="column has-text-right">
              <b-switch></b-switch>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-block">
        <div class="columns">
          <div class="column is-half">
            <span>The payer will recieve the mail shown in image from -</span>
            <span class="has-text-primary">noreply@invoicer.com</span>
          </div>
          <div class="column is-offset-6">col2</div>
        </div>
      </div>
    </b-collapse>
  </section>
</template>
<script>
export default {
  name: "ChannelForInvoice",
  data() {
    return {
      isOpen: true
    };
  }
};
</script>
<style scoped>
</style>