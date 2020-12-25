<!-- eslint-disable -->
<template>
  <b-col cols="12" lg="8" class="container-menu">
    <b-row class="menu-row">
      <b-col cols="12" class="option">
        <b-form inline>
          <b-input placeholder="Enter keyword" v-model="keyword"></b-input>
          <b-button variant="info" type="submit" class="ml-md-2">Search</b-button>

          <b-dropdown
            id="sort"
            :text="sortDrop"
            class="m-2 sort-btn"
            variant="info"
            v-show="!isSearch"
          >
            <b-dropdown-item-button >Category</b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group id="dropdown-group-1" header="Name">
              <b-dropdown-item-button >A-Z</b-dropdown-item-button>
              <b-dropdown-item-button >Z-A</b-dropdown-item-button>
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group id="dropdown-group-2" header="Date">
              <b-dropdown-item-button >Oldest</b-dropdown-item-button>
              <b-dropdown-item-button >Newest</b-dropdown-item-button>
            </b-dropdown-group>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-group id="dropdown-group-3" header="Price">
              <b-dropdown-item-button >Lowest</b-dropdown-item-button>
              <b-dropdown-item-button >Highest</b-dropdown-item-button>
            </b-dropdown-group>
          </b-dropdown>
        </b-form>
      </b-col>

      <b-col
        cols="12"
        lg="3"
        md="4"
        v-for="(value, index) in product"
        :key="index"
        class="product-list"
      >
        <!-- <b-img :src="url + '/' + value.product_image" fluid /> -->
        <b-img :src="value.image" fluid />
        <p>{{ value.name }}</p>
        <p>
          <strong>
            {{ formatPrice(value.price) }}
          </strong>
        </p>
        <b-button
          class="add-cart"
          variant="info"
          @click="addCart(value)"
          v-if="!checkCart(value)"
        >Add to cart</b-button>
        <b-button
          class="remove-cart"
          variant="danger"
          @click="removeCart(value)"
          v-else
        >Remove from cart</b-button>
      </b-col>
    </b-row>

    <div class="mt-3 pageInvent">
      <b-pagination
      ></b-pagination>
    </div>
  </b-col>
</template>
<!-- eslint-disable -->
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Inventory',
  data() {
    return {
      keyword: '',
      sortDrop: 'Sort',
      isSearch: false,
      currPage: 1
    }
  },
  methods: {
    ...mapMutations(['addCart', 'removeCart']),
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"
    },
    checkCart(value) {
      return this.cart.some((item) => item.id == value.id);
    }
  },
  computed: {
    ...mapGetters({ cart: 'getCart', product: 'getProduct', totalRows: 'getTotalRows', perPage: 'getLimit', page: 'getPage', sort: 'getSort' })
  }
}
</script>

<style scoped src="~/assets/css/style.css"></style>
