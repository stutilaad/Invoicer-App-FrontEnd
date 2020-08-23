<template>
  <section>
    <h1>This is template one</h1>
    <div class="container box has-background-secondprimary">
      <div class="columns">
        <div class="column">
          <b-field label="Payer Name">
            <b-input></b-input>
          </b-field>
          <b-field label="Payer Email">
            <b-input></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Due Date">
            <b-input></b-input>
          </b-field>
          <b-field label="Invoice Number">
            <b-input></b-input>
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
  </section>
</template>
<script>
export default {
  name: "TemplateOne",
  data() {
    return {
      file: null
    };
  }
};
</script>
<style scoped>
</style>