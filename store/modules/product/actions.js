/* eslint-disable */
import axios from 'axios'

export default {
  getProduct(context) {
    axios.get(
      `${process.env.VUE_APP_BASE_URL}/product?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}`
    )
    .then(response => {
      context.commit('setProduct', response.data)
    })
    .catch(error => {
        console.log(error.reponse)
    })
  },
  getProductItem(context) {
    axios.get(
      `${process.env.VUE_APP_BASE_URL}/product?page=${context.state.page}&limit=100`
    )
    .then(reponse => {
      context.commit('setProductItem', reponse.data)
    })
    .catch(error => {
        console.log(error)
    })
  },
  searchProduct(context, payload) {
    axios.get(
      `${process.env.VUE_APP_BASE_URL}/product?page=${context.state.page}&limit=100`
    )
    .then(response => {
      context.commit('setSearchResult', response.data.data.searchResult)
      context.commit('sortProduct', 'product_id')
    })
    .catch(error => {
      console.log(error.response)
    })
  },
  patchProduct(context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .patch(
          `${process.env.VUE_APP_BASE_URL}/product/${payload.id}`,
          payload.form
        )
        .then(response => {
          context.commit('clearProductItem')
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
      })
  },
  deleteProduct(context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${process.env.VUE_APP_BASE_URL}/product/${payload}`)
        .then(response => {
          context.commit('clearProductItem')
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  },
  postOrder(context, payload) {
    axios
      .post(`${process.env.VUE_APP_BASE_URL}/order`, payload)
      .then(response => {
        context.commit('setInvoice', response.data.data.invoice)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}