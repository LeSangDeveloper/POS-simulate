/* eslint-disable */
export default {
  setProduct(state, payload) {
    state.product = payload.data
    state.totalRows = payload.pagination.totalData
  },
  setProductItem(state, payload) {
    payload.data.map(value => {
      const setProduct = {
        ID: value.product_id,
            Name: value.product_name,
            Image: value.product_image,
            Price: `Rp. ${value.product_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`,
            price: value.product_price,
            category_id: value.category_id,
            Category: value.category_name,
            Created: value.product_created_at.slice(0, 10),
            Updated: value.product_updated_at.slice(0, 10)
        }
        state.productItem = [...state.productItem, setProduct]
        state.totalRows = payload.pagination.totalData
    })
  },
  clearProductItem(state) {
    state.productItem = []
  },
  setSearchResult(state, payload) {
    state.product = payload
  },
  addCart(state, payload) {
    const setCart = {
      id: payload.id,
      name: payload.name,
      image: payload.image,
      price: payload.price,
      qty: 1
      }
    state.cart = [...state.cart, setCart]
  },
  removeCart(state, payload) {
    state.cart.splice(
      state.cart.findIndex(item => item.id === payload.id),
      1
    )
  },
  sortProduct(state, payload) {
    state.sort = payload
  },
  pageChange(state, payload) {
    state.page = payload
  },
  minQty(state, payload) {
    const findCart = state.cart.find(
      value => value.id === payload.id
    )
    findCart.qty -= 1
  },
  plusQty(state, payload) {
    const findCart = state.cart.find(
      value => value.id === payload.id
    )
    findCart.qty += 1
  },
  cancelCart(state) {
    state.cart = []
  },
  setInvoice(state, payload) {
    state.invoice = payload
  }
}