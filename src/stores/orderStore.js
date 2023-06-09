import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('orderStore', {
  state: () => ({
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
  }),

  actions: {
    getOrder(orderId) {
      this.orderId = orderId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${orderId}`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        this.order = response.data.order;
        console.log(this.order);
        this.checkCouponCode();
        this.calcSubtotal();
      });
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
      console.log('checked coupon code');
      console.log(this.couponPercent, this.isUseCoupon);
    },
    calcSubtotal() {
      let subTotal = 0;
      Object.keys(this.order.products).forEach((key) => {
        subTotal += this.order.products[key].total;
      });
      this.subTotal = subTotal;
      console.log('calculated subtotal');
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      status.isLoading = true;
      axios.post(api).then((response) => {
        status.isLoading = false;
        if (response.data.success) {
          this.orderIsPaid = this.order.is_paid;
        }
        console.log('paid order');
      });
    },
  },
});
