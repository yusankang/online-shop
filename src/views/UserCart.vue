<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
        <div class="row mt-4">
            <!-- <div class="col-md-7">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>商品圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in products" :key="item.id">
                            <td style="width: 200px">
                                <div style="height: 100px,
                                    background=size: cover,
                                    background-position: center">
                                    <img :src="item.imageUrl" alt=""
                                        class="img-thumbnail">
                                </div>
                            </td>
                            <td><a href="#" class="text-dark">{{item.title}}</a></td>
                            <td>
                                <div v-if="!item.price">{{item.origin_price}} 元</div>
                                <del v-if="item.price">原價 {{item.origin_price}} 元</del>
                                <div v-if="item.price">現在只要 {{item.price}} 元</div>
                            </td>
                            <td>
                                <div class="btn-group btn-group-sm"
                                    role="group"
                                    aria-label="Basic outlined example">
                                        <button type="button"
                                            class="btn btn-outline-secondary"
                                            @click="getProduct(item.id)">
                                            查看更多
                                        </button>
                                        <button type="button"
                                            class="btn btn-outline-danger"
                                            @click="addCart(item.id)"
                                            :disabled="this.status.loadingItem === item.id">
                                            <div class="spinner-grow spinner-grow-sm
                                                text-danger" role="status"
                                                v-if="this.status.loadingItem === item.id">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                            加到購物車
                                        </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> -->

            <!-- items in cart -->
            <div class="col-md-5">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td style="width: 70px">
                        <button type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="openDeleteModal(item)">
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </td>
                      <td>{{item.product.title}}</td>
                      <td style="width: 100px">

                          <label for="qty" class="input-group input-group-sm">
                            <input type="number"
                              min="1"
                              :disabled = "status.loadingItem === item.id"
                              @change="updateCart(item)"
                              id="qty"
                              class="form-control"
                              v-model.number="item.qty"/>
                              <div class="input-group-text">/ {{ item.product.unit }}</div>
                          </label>

                      </td>
                      <td style="width: 150px">{{item.total}} 元</td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td>{{ $filters.currency(cart.total) }}</td>
                  </tr>
                  <tr v-if="isUseCoupon">
                    <td colspan="3" class="text-end text-success">已套用優惠卷</td>
                    <td class="text-success"> {{ coupon_code }}</td>
                  </tr>
                  <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-end text-success">折扣價</td>
                    <td class="text-success">{{ $filters.currency(cart.final_total) }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="input-group mb-3">
                <input type="text"
                  class="form-control"
                  placeholder="輸入優惠碼"
                  aria-label="Coupon code"
                  aria-describedby="coupon-button"
                  v-model="coupon_code">
                <button class="btn btn-outline-secondary"
                  type="button"
                  id="coupon-button"
                  @click="addCouponCode">套用優惠碼</button>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-danger"
                  @click="deleteAll">刪除購物車</button>
              </div>
            </div>
        </div>

        <!-- order form -->
        <Form class="row justify-content-center my-5"
          v-slot="{ errors }"
          @submit="createOrder">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
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
              <textarea name="" id="message" class="form-control" cols="30" rows="10"
                v-model="form.message">
              </textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-outline-primary">送出訂單</button>
            </div>
          </div>
        </Form>
      </div>
    <DeleteModal ref="deleteModal"
    :deleteItem="tempItem"
    @deleteItem="deleteItem"></DeleteModal>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      cart: {},
      tempItem: {},
      coupon_code: '',
      isUseCoupon: false,
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
  components: {
    DeleteModal,
  },
  inject: ['emitter', 'pushMessageState'],
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
