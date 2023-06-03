<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<Navbar></Navbar>
    <div class="container pt-5">
      <h3 class="text-white text-center pt-5 permanent-marker">Create Order</h3>
      <CartProgressBar :progressBar="progressBar"></CartProgressBar>
      <div class="row">
        <!-- order form -->
        <div class="col-md-7">
          <h5 class="text-white text-center">建立訂單</h5>
          <Form class="justify-content-center bg-white rounded p-3"
            v-slot="{ errors }"
            @submit="createOrder">
              <div class="mb-3">
                <label for="email" class="form-label">收件人 Email</label>
                <Field type="email" class="form-control" name="email"
                  id="email" placeholder="請輸入Email"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email|required"
                  v-model="form.user.email"></Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <Field type="text" class="form-control" name="姓名"
                  id="name" placeholder="請輸入姓名"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  rules="required"
                  v-model="form.user.name"></Field>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <Field type="text" class="form-control" name="電話" id="tel"
                  placeholder="請輸入電話"
                  :class="{ 'is-invalid': errors['電話'] }"
                  :rules="isPhone"
                  v-model="form.user.tel"></Field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <Field type="text" class="form-control" id="address" name="地址"
                  placeholder="請輸入地址"
                  :class="{ 'is-invalid': errors['地址'] }"
                  rules="required"
                  v-model="form.user.address"></Field>
                <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="5"
                  v-model="form.message">
                </textarea>
              </div>
              <div class="text-end">
                <button class="btn btn-warning w-100">送出訂單</button>
              </div>
          </Form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <DeleteModal ref="deleteModal"
    :deleteItem="tempItem"
    @deleteItem="deleteItem"></DeleteModal>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';
import CartProgressBar from '../components/CartProgressBar.vue';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';

export default {
  components: {
    DeleteModal,
    Navbar,
    Footer,
    CartProgressBar,
  },

  inject: ['emitter', 'pushMessageState'],

  data() {
    return {
      isLoading: false,
      products: [],
      cart: {},
      tempItem: {},
      coupon_code: '',
      isUseCoupon: false,
      progressBar: 2,
      status: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },

  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        this.pushMessageState(response, '加入購物車');
        this.getCart();
      });
    },
    openDeleteModal(item) {
      this.tempItem = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteItem() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempItem.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        const deleteComponent = this.$refs.deleteModal;
        deleteComponent.hideModal();
        this.pushMessageState(response, '刪除品項');
        this.getCart();
      });
    },
    deleteAll() {
      console.log('deleting all items');
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.cart = (response.data.data);
        if (this.cart.carts.length >= 1) {
          if (this.cart.carts[0].coupon) {
            this.coupon_code = this.cart.carts[0].coupon.code;
            this.isUseCoupon = true;
          }
        } else {
          this.coupon_code = '';
          this.isUseCoupon = false;
        }
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((response) => {
        this.isLoading = false;
        this.status.loadingItem = '';
        this.pushMessageState(response, '購物車更新');
        this.getCart();
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.isUseCoupon = true;
        }
        this.getCart();
      });
    },
    createOrder() {
      console.log('creating order for', this.form.user);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order }).then((response) => {
        console.log(response);
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
