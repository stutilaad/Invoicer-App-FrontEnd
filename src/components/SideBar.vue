<template>
  <section class="section">
    <b-menu>
      <b-menu-list label="Menu">
        <!-- <b-menu-item icon="information-outline" label="Info"></b-menu-item> -->
        <b-menu-item label="Invoices">
          <b-menu-item label="List invoices"></b-menu-item>
          <b-menu-item label="Add invoices"></b-menu-item>
        </b-menu-item>
        <b-menu-item label="Products">
          <b-menu-item label="List products"></b-menu-item>
          <b-menu-item label="Add products"></b-menu-item>
        </b-menu-item>
        <b-menu-item label="Payers">
          <b-menu-item label="List payers"></b-menu-item>
          <b-menu-item label="Add payers"></b-menu-item>
        </b-menu-item>
      </b-menu-list>
      <!-- <b-menu-list>
        <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
      </b-menu-list>-->
      <b-menu-list label="Actions">
        <b-menu-item label="Logout"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </section>
</template>
<script>
export default {
  name: "SideBar"
};
</script>
<style scoped>
.menu-list a.is-active {
  background-color: #4ce4cfd8;
}
</style>