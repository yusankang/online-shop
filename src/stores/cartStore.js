import { defineStore } from 'pinia';
import axios from 'axios';
import statusStore from './statusStore';

const status = statusStore();

export default defineStore('cartStore', {
  state: () => ({
    cart: {},
    isUseCoupon: false,
    couponPercent: 100,
    couponCode: '',
    shippingFee: 100,
  }),
  actions: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        this.cart = (response.data.data);
        console.log('got cart', this.cart);
        this.checkCouponCode();
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      status.isLoading = true;
      status.cartLoadingItem = item.id;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      axios.put(api, { data: cart }).then((response) => {
        status.isLoading = false;
        status.cartLoadingItem = '';
        status.pushMessage({ title: '購物車更新' });
        console.log('updated cart', response);
        // if (this.isUseCoupon) {
        //   this.addCouponCode(this.couponCode);
        // } else {
        //   this.getCart();
        // }
        this.getCart();
      });
    },
    addCart(id, qty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      status.cartLoadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      cart.qty = qty;
      axios.post(api, { data: cart }).then((response) => {
        status.cartLoadingItem = '';
        status.pushMessage({ title: '加入購物車' });
        console.log('added to cart', response);
        if (this.isUseCoupon) {
          this.addCouponCode(this.couponCode);
        }
      });
    },
    deleteItem(selectedItem) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${selectedItem.id}`;
      status.isLoading = true;
      axios.delete(api).then((response) => {
        status.isLoading = false;
        status.pushMessage({ title: '刪除品項' });
        console.log('deleted item', response);
        this.getCart();
      });
    },
    addCouponCode(couponCodeInput) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: couponCodeInput,
      };
      status.isLoading = true;
      axios.post(api, { data: coupon }).then((response) => {
        status.isLoading = false;
        if (response.data.success) {
          console.log('applied coupon', response);
          this.getCart();
        }
      });
    },
    checkCouponCode() {
      if (this.cart.carts[0]) {
        if (this.cart.carts[0].coupon) {
          this.isUseCoupon = true;
          this.couponCode = this.cart.carts[0].coupon.code;
          this.couponPercent = this.cart.carts[0].coupon.percent;
        } else if (!this.cart.carts[0].coupon) {
          this.isUseCoupon = false;
          this.couponCode = '';
          this.couponPercent = 100;
        }
      } else if (!this.cart.carts[0]) {
        this.isUseCoupon = false;
        this.couponCode = '';
        this.couponPercent = 100;
      }
      console.log('checked coupon code');
      console.log(this.couponPercent, this.isUseCoupon);
    },
  },
});
