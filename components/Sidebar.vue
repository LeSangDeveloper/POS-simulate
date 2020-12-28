<!-- eslint-disable -->
<template>
  <b-sidebar id="sidebar-backdrop" backdrop-variant="dark" backdrop shadow>
    <b-img class="avatar" fluid />
    <div class="user">
      <p></p>
    </div>
    <hr />
    <b-navbar variant="faded" type="light">
      <router-link to="/">
        <b-navbar-brand>
          <img src="~/assets/img/waiter.png" class="mr-2 d-inline-block align-top" alt="foods" />
          Food and Drink
        </b-navbar-brand>
      </router-link>
    </b-navbar>
    <b-navbar variant="faded" type="light" >
      <router-link to="/statistic">
        <b-navbar-brand>
          <img
            src="~/assets/img/dashboard.png"
            class="mr-2 d-inline-block align-top"
            alt="statistic"
          />
          Statistic
        </b-navbar-brand>
      </router-link>
    </b-navbar>
    <b-navbar variant="faded" type="light" >
      <router-link to="/setting">
        <b-navbar-brand>
          <img src="~/assets/img/settings.png" class="mr-2 d-inline-block align-top" alt="setting" />
          Setting
        </b-navbar-brand>
      </router-link>
    </b-navbar>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand class="logout">
        <img src="~/assets/img/logout.png" class="mr-2 d-inline-block align-top" alt="setting" />
        Logout
      </b-navbar-brand>
    </b-navbar>
  </b-sidebar>
</template>
<!-- eslint-disable -->
<script>

export default {
  name: 'Sidebar',
}
</script>
<!-- eslint-disable -->
<style scoped src="~/assets/css/style.css"></style>
