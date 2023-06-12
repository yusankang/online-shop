import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    product: {},
    pagination: {},
    category: 'all',
  }),

  getters: {

  },

  actions: {
    getProducts(category, page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        this.pagination = response.data.pagination;
        const { products } = response.data;
        this.filterCategory(category, products);
        console.log('got all products');
      });
    },
    filterCategory(category, products) {
      this.products = products;
      this.category = category;
      if (this.category !== 'all') {
        this.products = this.products.filter((item) => item.category === this.category);
        console.log('filtered products by category');
      }
    },
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        this.product = response.data.product;
        console.log('got product', this.product);
      });
    },
  },
});
