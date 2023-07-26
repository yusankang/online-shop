import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('dashboardStore', {
  state: () => ({
    products: [],
    coupons: [],
    orders: [],
    pagination: {},
    screenLg: false,
    screenWidth: 0,
    activePage: '',
  }),
  actions: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        const { message } = response.data;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      })
        .catch((error) => {
          throw new Error(error);
        });
    },
    getCoupons() {
      status.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      axios.get(api).then((response) => {
        status.isLoading = false;
        const { message } = response.data;
        if (response.data.success) {
          this.coupons = response.data.coupons;
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        const { message } = response.data;
        if (response.data.success) {
          this.orders = response.data.orders;
          this.pagination = response.data.pagination;
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    deleteItem(type, api) {
      status.isLoading = true;
      axios.delete(api).then((response) => {
        const { message } = response.data;
        if (response.data.success) {
          status.isLoading = false;
          status.pushMessage({ title: message });
          if (type === 'product') {
            this.getProducts();
          } else if (type === 'coupon') {
            this.getCoupons();
          } else if (type === 'order') {
            this.getOrders();
          }
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    sendUpdate(type, api, httpMethod, item) {
      status.isLoading = true;
      axios[httpMethod](api, { data: item }).then((response) => {
        status.isLoading = false;
        const { message } = response.data;
        if (response.data.success) {
          status.pushMessage({ title: message });
          if (type === 'product') {
            this.getProducts();
          } else if (type === 'coupon') {
            this.getCoupons();
          } else if (type === 'paid') {
            this.getOrders();
          }
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    onScreenResize() {
      window.addEventListener('resize', () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth >= 768) {
        this.screenLg = true;
      } else if (this.screenWidth < 768) {
        this.screenLg = false;
      }
    },
    setActivePage(thisPage) {
      this.activePage = thisPage;
    },
  },
});
