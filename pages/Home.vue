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

    <Sidebar />

  </b-container>
</template>

<script>
import Header from '~/components/Header'
import Counter from '~/components/Counter'
import Inventory from '~/components/Inventory'
import Cart from '~/components/Cart'
import CartEmpty from '~/components/CartEmpty'
import Sidebar from '~/components/Sidebar'
import axios from 'axios'

export default {
  data() {
    return {
      info: null
    }
  },
  components: {
    Header,
    Counter,
    Inventory,
    Cart,
    CartEmpty,
    Sidebar
  },
  mounted () {
	setInterval(() => {
    axios
      .get('http://localhost:8000/api/test/read')
      .then(response => (this.info = JSON.parse(JSON.stringify(response.data))))
    console.log(this.info)
	}, 3000)
 }
}
</script>

<style scoped src="~/assets/css/style.css">

</style>