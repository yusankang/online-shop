<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <Navbar></Navbar>
    <div class="container pt-5">
      <h3 class="text-white text-center pt-5 permanent-marker">Create Order</h3>
      <CartProgressBar :progressBar="progressBar"></CartProgressBar>
      <div class="row d-flex flex-md-row-reverse">
        <!-- Order total -->
        <div class="col-md-5 mb-3">
          <div class="card mb-3 border-0">
            <OrderItemsTotal :progress="progressBar"></OrderItemsTotal>
            <OrderPriceTotal :progress="progressBar"></OrderPriceTotal>
          </div>
        </div>
        <!-- order form -->
        <div class="col-md-7 mb-3">
          <Form class="justify-content-center bg-white rounded p-3"
            v-slot="{ errors }"
            @submit="createOrder">
            <h5 class="text-center mb-3">建立訂單</h5>
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
                <button class="btn btn-warning w-100">前往付款</button>
              </div>
          </Form>
        </div>
      </div>
    </div>
  <Footer></Footer>
</template>

<script>
import CartProgressBar from '../components/CartProgressBar.vue';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';
import OrderPriceTotal from '../components/OrderPriceTotal.vue';
import OrderItemsTotal from '../components/OrderItemsTotal.vue';

export default {
  components: {
    Navbar,
    Footer,
    CartProgressBar,
    OrderPriceTotal,
    OrderItemsTotal,
  },

  inject: ['emitter', 'pushMessageState'],

  data() {
    return {
      isLoading: false,
      progressBar: 2,
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
    createOrder() {
      console.log('creating order for', this.form.user);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.isLoading = true;
      this.$http.post(api, { data: order }).then((response) => {
        this.isLoading = false;
        console.log(response.data.orderId);
        this.$router.push(`/user/checkout/${response.data.orderId}`);
      });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
};
</script>
