<!-- eslint-disable -->
<template>
  <b-col cols="12" lg="4" class="cart-list" v-if="cart.length > 0">
    <div class="cart-overflow">
      <b-row v-for="(value, index) in cart" :key="index" class="cart-items">
        <b-col cols="3" md="4">
          <b-img :src="value.image" fluid />
        </b-col>
        <b-col cols="5" md="5" style="padding: 0">
          <p class="name-cart"></p>
          <b-input-group>
            <b-button class="plus-minus" variant="success" @click="onMin(value)">-</b-button>
            <input type="text" v-model="value.qty" class="qty" />
            <b-button class="plus-minus" variant="success" @click="plusQty(value)">+</b-button>
          </b-input-group>
        </b-col>
        <b-col cols="4" md="3" style="padding: 0" align-self="end">
          <p
            class="price-cart"
          >{{formatPrice(value.price * value.qty)}}</p>
        </b-col>
      </b-row>
    </div>
    <b-row class="checkout">
      <b-col cols="6">
        <p>
          Total :
          <br />
          <span>*Tax not included</span>
        </p>
      </b-col>
      <b-col cols="6" style="text-align: end;">
        <p>{{ formatPrice(countTotal()) }} *</p>
      </b-col>
      <b-button
        class="checkout-btn"
        variant="info"
        style="background: #57cad5;"
        @click="checkout(cart)"
      >Checkout</b-button>
      <b-button
        class="cancel-btn"
        variant="danger"
        @click="cancelCart()"
      >Cancel</b-button>
      <b-card v-if="qrCodeData.link.length > 0">
        <qr-code :text="qrCodeData.link"> {{qrCodeData.link}} </qr-code>
      </b-card>
    </b-row>
  </b-col>
</template>
<!-- eslint-disable -->
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

const uuidv1 = require('uuid/v1')
const crypto = require('crypto');

export default {
  name: 'Cart',
  data() {
    return {
      domain: 'https://test-payment.momo.vn',
      qrCodeData: {
        amount: 0,
        link: ''
      }
    }
  },
  methods: {
    ...mapMutations(['removeCart' ,'minQty', 'plusQty', 'cancelCart']),
    onMin(data) {
      if (data.qty === 1) {
        this.removeCart(data)
      } else {
        this.minQty(data)
      }
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"
      },
    countTotal() {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price * this.cart[i].qty
      }
      this.qrCodeData.amount = total
      return total
    },
    checkout(data) {
      console.log('Create New Dynamic QR Code...');

      const storeSlug = this.partner.storeSlug;
      const amount = this.qrCodeData.amount;
      const billId = uuidv1();

      const rawSignature = `storeSlug=${storeSlug}&amount=${amount}&billId=${billId}`;
      console.log('--------------------RAW SIGNATURE----------------');
      console.log(rawSignature);
      const signature = crypto.createHmac('sha256', this.partner.secretKey)
        .update(rawSignature)
        .digest('hex');
      console.log('--------------------SIGNATURE----------------');
      console.log(signature);

      this.qrCodeData.link = `${this.domain}/pay/store/${storeSlug}?a=${amount}&b=${billId}&s=${signature}`;
      console.log(`QR Code Data: ${this.qrCodeData.link}`);
    }
  },
  computed: {
    ...mapGetters({ cart: 'getCart', partner: 'getPartnerInfo' })
  }
}
</script>
<!-- eslint-disable -->
<style scoped src="@/assets/css/style.css"></style>
