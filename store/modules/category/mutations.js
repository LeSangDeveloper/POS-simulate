/* eslint-disable */
export default {
setCategory(state, payload) {
    state.category = payload
    state.category.map(value => {
      value.category_created_at = value.category_created_at.slice(0, 10)
      value.category_updated_at = value.category_updated_at.slice(0, 10)
    })
  },
  clearCategory(state) {
    state.category = []
  }
}