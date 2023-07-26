import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('productsStore', {
  state: () => ({
    allProducts: [],
    filteredProducts: [],
    displayProducts: [],
    product: {},
    paginationLimit: 12,
    category: '',
    item: {},
  }),
  actions: {
    async getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      status.isLoading = true;
      try {
        const response = await axios.get(api);
        status.isLoading = false;
        this.allProducts = response.data.products;
        this.filterCategory();
      } catch (response) {
        throw new Error(response.data.message);
      }
    },
    setCategory(category) {
      localStorage.setItem('currentCategory', JSON.stringify(category));
    },
    filterCategory() {
      this.category = JSON.parse(localStorage.getItem('currentCategory'));
      if (this.category !== 'all' && this.category !== 'sale') {
        this.filteredProducts = this.allProducts.filter((item) => item.category === this.category);
      } else if (this.category === 'sale') {
        this.filteredProducts = this.allProducts.filter((item) => item.origin_price > item.price);
      } else {
        this.filteredProducts = this.allProducts;
      }
      this.setCurrentPage(1);
    },
    setCurrentPage(page) {
      this.displayProducts = [];
      const prevRange = (page - 1) * this.paginationLimit;
      const currRange = page * this.paginationLimit;
      this.filteredProducts.forEach((item, index) => {
        if (index >= prevRange && index < currRange) {
          this.displayProducts.push(item);
        }
      });
    },
    async getProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      status.isLoading = true;
      try {
        const response = await axios.get(api);
        status.isLoading = false;
        this.product = response.data.product;
      } catch (response) {
        throw new Error(response.data.message);
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
});
