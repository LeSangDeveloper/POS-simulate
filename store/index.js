/* eslint-disable */
import Vuex from 'vuex'
import Product from './modules/product/'
import Category from './modules/category/'
import Partner from './modules/partner/'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      Product,
      Category,
      Partner
    }
  });
};

export default createStore