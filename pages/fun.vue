<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="8" class="header">
        <Header text="Menu" />
      </b-col>
      <Counter />
    </b-row>
  </b-container>
</template>
<script>
import Header from '~/components/Header'
import Counter from '~/components/Counter'

export default {
  components: {
    Header,
    Counter
  }
}
</script>
<style scoped src="~/assets/css/style.css">

</style>