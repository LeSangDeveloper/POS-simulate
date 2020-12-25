<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="8" class="header">
        <Header text="Menu" />
      </b-col>
      <Counter />
    </b-row>

    <b-row>
      <Inventory />
      <Cart />
      <CartEmpty />
    </b-row>

  </b-container>
</template>

<script>
import Header from '~/components/Header'
import Counter from '~/components/Counter'
import Inventory from '~/components/Inventory'
import Cart from '~/components/Cart'
import CartEmpty from '~/components/CartEmpty'

export default {
  components: {
    Header,
    Counter,
    Inventory,
    Cart,
    CartEmpty
  }
}
</script>

<style scoped src="~/assets/css/style.css">

</style>