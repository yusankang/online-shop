<template>
  <LoadingOverlay :active="isLoading" />
  <div class="container pt-5">
    <h3 class="text-white text-center pt-5 permanent-marker">Your Order</h3>
    <CartProgressBar :progress-bar="progressBar" />
    <form @submit.prevent="payOrder">
      <div class="row d-flex flex-md-row-reverse">
        <div class="col-md-5 mb-3">
          <div class="card border-0">
            <div class="card-body border-0">
              <h5 class="text-center mb-3">訂單明細</h5>
              <table class="table table-sm align-middle">
                <tbody class="table-group-divider">
                  <tr v-for="item in order.products" :key="item.id">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        alt="product image"
                        class="img-fluid"
                        style="max-width: 80px"
                      />
                    </td>
                    <td class="w-100">
                      <h5>{{ item.product.title }}</h5>
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <span>單價 ${{ $filters.currency(item.product.price) }}</span>
                        <span>{{ item.qty }}/ {{ item.product.unit }}</span>
                        <strong>${{ $filters.currency(item.total) }}</strong>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-100">
                <tbody>
                  <tr>
                    <th>小計</th>
                    <td class="text-end">$ {{ $filters.currency(subTotal) }} NTD</td>
                  </tr>
                  <tr v-if="isUseCoupon">
                    <td class="text-success">已套用優惠卷 '{{ couponCode }}'</td>
                    <td class="text-success text-end">{{ couponPercent / 10 }} 折</td>
                  </tr>
                  <tr v-if="order.total !== subTotal">
                    <th class="text-success">折扣價</th>
                    <td class="text-success text-end">${{ $filters.currency(order.total) }} NTD</td>
                  </tr>
                  <tr v-if="order.total > 0 && order.total < 2000">
                    <th>運費</th>
                    <td class="text-end">${{ shippingFee }} NTD</td>
                  </tr>
                  <tr v-if="order.total >= 2000">
                    <th>運費</th>
                    <td class="text-end">已達到免運金額</td>
                  </tr>
                </tbody>
                <tfoot class="table-group-divider">
                  <tr>
                    <th>總計</th>
                    <td v-if="order.total >= 2000" class="text-end">
                      ${{ $filters.currency(order.total) }} NTD
                    </td>
                    <td v-if="order.total < 2000" class="text-end">
                      ${{ $filters.currency(order.total + shippingFee) }} NTD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <div class="card border-0 mb-3">
            <div class="card-body border-0">
              <h5 class="text-center mb-3">收件人資料</h5>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <p><strong>訂單號碼</strong></p>
                      <p class="mb-2">{{ order.id }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>Email</strong></p>
                      <p class="mb-2">{{ order.user.email }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>姓名</strong></p>
                      <p class="mb-2">{{ order.user.name }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>收件人電話</strong></p>
                      <p class="mb-2">{{ order.user.tel }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>收件人地址</strong></p>
                      <p class="mb-2">{{ order.user.address }}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>付款狀態</strong></p>
                      <p v-if="!order.is_paid" class="text-danger mb-2">尚未付款</p>
                      <p v-else class="text-success mb-2">已付款</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card border-0 mb-3" v-if="!order.is_paid">
            <div class="card-body">
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import orderStore from '@/stores/orderStore';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import productsStore from '@/stores/productsStore';
import CartProgressBar from '../../components/user-components/CartProgressBar.vue';
import Payment from '../../components/user-components/UserPayment.vue';

export default {
  components: {
    CartProgressBar,
    Payment,
  },
  computed: {
    ...mapState(orderStore, [
      'order',
      'shippingFee',
      'isUseCoupon',
      'couponCode',
      'couponPercent',
      'subTotal',
      'orderIsPaid',
    ]),
    ...mapState(statusStore, ['isLoading']),
  },
  data() {
    return {
      progressBar: 3,
    };
  },
  methods: {
    ...mapActions(orderStore, ['getOrder']),
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(productsStore, ['scrollToTop']),
    isPaid() {
      if (this.order.is_paid) {
        this.progressBar = 4;
      }
    },
  },
  async created() {
    const { orderId } = this.$route.params;
    await this.getOrder(orderId);
    this.getCart();
    this.isPaid();
    this.scrollToTop();
  },
};
</script>
