<!-- eslint-disable -->
<template>
  <b-col cols="12" lg="4" class="cart-header">
    <h2>
      Cart
      <b-badge>{{cartLength}}</b-badge>
    </h2>
  </b-col>
</template>

<!-- eslint-disable -->
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Counter',
  // created() {
  //   console.log(this.$store);
  // },
  // mounted() {
  //     this.$nextTick(() => {
  //     console.log(this.getCartLength);
  //     })
  // },
  computed: {
    ...mapGetters({
      cartLength: 'getCartLength'
    })
  }
}
</script>

<!-- eslint-disable -->
<style scoped src="~/assets/css/style.css"></style>