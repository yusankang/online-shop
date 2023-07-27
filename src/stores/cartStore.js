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
    message: '',
    couponMessage: '',
    itemId: '',
  }),
  actions: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      status.isLoading = true;
      axios.get(api).then((response) => {
        status.isLoading = false;
        this.cart = response.data.data;
        this.checkCouponCode();
        localStorage.setItem('cart', JSON.stringify(this.cart));
      })
        .catch((error) => {
          throw new Error(error);
        });
    },
    checkQty(item, action) {
      let qtyNum = item.qty;
      this.message = '';
      this.itemId = '';
      if (action === 'add' && qtyNum >= 1 && qtyNum < 20) {
        qtyNum += 1;
        this.updateCart(item, qtyNum);
      } else if (action === 'subtract' && qtyNum > 1 && qtyNum <= 20) {
        qtyNum -= 1;
        this.updateCart(item, qtyNum);
      } else if (action === 'add' && qtyNum === 20) {
        this.itemId = item.id;
        this.message = '最多數量限20';
      } else if (action === 'subtract' && qtyNum === 1) {
        this.itemId = item.id;
        this.message = '最少數量限1';
      }
    },
    updateCart(item, qtyNum) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      status.isLoading = true;
      status.cartLoadingItem = item.id;
      const cart = {
        product_id: item.product.id,
        qty: qtyNum,
      };
      axios.put(api, { data: cart }).then(() => {
        status.isLoading = false;
        status.cartLoadingItem = '';
        this.getCart();
      })
        .catch((error) => {
          throw new Error(error);
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
      axios.post(api, { data: cart }).then(() => {
        status.cartLoadingItem = '';
        status.pushMessage({ title: '加入購物車' });
        if (this.isUseCoupon) {
          this.addCouponCode(this.couponCode);
        }
        this.getCart();
      })
        .catch((error) => {
          throw new Error(error);
        });
    },
    deleteItem(selectedItem) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${selectedItem.id}`;
      status.isLoading = true;
      axios.delete(api).then((response) => {
        const { message } = response.data;
        status.isLoading = false;
        if (response.data.success) {
          status.pushMessage({ title: '刪除品項' });
          this.getCart();
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    deleteCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      status.isLoading = true;
      this.message = '';
      axios.delete(api).then((response) => {
        const { message } = response.data;
        status.isLoading = false;
        if (response.data.success) {
          status.pushMessage({ title: `購物車${message}` });
          this.getCart();
        } else if (!response.data.success) {
          status.pushMessage({ title: message, style: 'danger' });
        }
      });
    },
    addCouponCode(couponCodeInput) {
      if (couponCodeInput === '') {
        this.couponMessage = '請輸入優惠碼';
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
        const coupon = {
          code: couponCodeInput,
        };
        status.isLoading = true;
        axios.post(api, { data: coupon }).then((response) => {
          status.isLoading = false;
          if (response.data.success) {
            this.CouponMessage = '';
            this.getCart();
          } else if (!response.data.success) {
            this.couponMessage = response.data.message;
          }
        });
      }
    },
    clearMessage() {
      this.couponMessage = '';
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
    },
  },
});
