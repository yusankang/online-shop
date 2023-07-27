import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('orderStore', {
  state: () => ({
    orders: [],
    orderIsPaid: false,
    orderId: '',
    order: {
      user: {},
    },
    shippingFee: 100,
    isUseCoupon: false,
    couponCode: '',
    couponPercent: 100,
    subTotal: 0,
    creditNumError: false,
    cvvNumError: false,
    accNumError: false,
    searchMessage: false,
    orderFound: false,
  }),
  actions: {
    async getOrder(orderId) {
      this.orderId = orderId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${orderId}`;
      status.isLoading = true;
      const response = await axios.get(api);
      status.isLoading = false;
      if (response.data.success && response.data.order !== null) {
        this.order = response.data.order;
        this.checkCouponCode();
        this.calcSubtotal();
      } else if (response.data.order === null) {
        this.searchMessage = true;
      }
    },
    checkCouponCode() {
      const item = this.order.products[Object.keys(this.order.products)[0]];
      if (item.coupon) {
        this.isUseCoupon = true;
        this.couponCode = item.coupon.code;
        this.couponPercent = item.coupon.percent;
      } else if (!item.coupon) {
        this.isUseCoupon = false;
        this.couponCode = '';
        this.couponPercent = 100;
      }
    },
    calcSubtotal() {
      let subTotal = 0;
      Object.keys(this.order.products).forEach((key) => {
        subTotal += this.order.products[key].total;
      });
      this.subTotal = subTotal;
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      status.isLoading = true;
      axios.post(api).then((response) => {
        status.isLoading = false;
        const { message } = response.data;
        if (response.data.success) {
          status.pushMessage({ title: message });
          this.orderIsPaid = true;
          this.router.push({ name: 'orderComplete' });
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    checkCreditNum(numLength) {
      if (numLength < 16 && numLength >= 1) {
        this.creditNumError = true;
      }
    },
    checkCvvNum(numLength) {
      if (numLength < 3 && numLength >= 1) {
        this.cvvNumError = true;
      }
    },
    checkAccNum(numLength) {
      if (numLength < 5 && numLength >= 1) {
        this.accNumError = true;
      }
    },
    clearErrorMessage() {
      this.creditNumError = false;
      this.cvvNumError = false;
      this.accNumError = false;
    },
    clearSearchMessage() {
      this.searchMessage = false;
    },
  },
});
