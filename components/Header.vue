<!-- eslint-disable -->
<template>
  <b-row>
    <b-col cols="2" class="header-icon">
      <img src="~/assets/img/menu.png" alt="toggle-menu" v-b-toggle.sidebar-backdrop />
    </b-col>
    <b-col cols="8" class="header-text">
      <h1>{{text}}</h1>
    </b-col>
    <b-col cols="2"></b-col>
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['text'],
}
</script>
<!-- eslint-disable -->
<style scoped src="~/assets/css/style.css">
</style>