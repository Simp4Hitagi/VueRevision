import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    setProducts(product, products) {
      product.products = products;
    },
  },
  actions: {
    fetchAllProducts(product) {
      return fetch("")
        .then((res) => res.json())
        .then((data) => {
          product.commit("setProducts", data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
