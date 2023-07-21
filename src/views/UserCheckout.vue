<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="container pt-5">
    <h3 class="text-white text-center pt-5 permanent-marker">Your Order</h3>
    <CartProgressBar :progressBar="progressBar"></CartProgressBar>
      <form @submit.prevent="payOrder">
        <div class="row d-flex flex-md-row-reverse">
          <!-- order details -->
          <div class="col-md-5 mb-3">
            <div class="card border-0">
              <div class="card-body border-0">
                <h5 class="text-center mb-3">訂單明細</h5>
                <table class="table table-sm align-middle">
                  <tbody class="table-group-divider">
                      <tr v-for="item in order.products" :key="item.id">
                        <td>
                          <img :src="item.product.imageUrl" alt="product image"
                          class="img-fluid" style="max-width:80px;">
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
                      <td class="text-success text-end">${{ $filters.currency(order.total) }} NTD
                      </td>
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
                      <td v-if="order.total >= 2000"
                        class="text-end">
                        ${{ $filters.currency(order.total) }} NTD
                      </td>
                      <td v-if="order.total < 2000"
                        class="text-end">
                        ${{ $filters.currency(order.total + shippingFee) }} NTD
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <!-- customer info -->
            <div class="card border-0 mb-3">
              <div class="card-body border-0">
                <h5 class="text-center mb-3">收件人資料</h5>
                <table class="table">
                    <tbody>
                        <tr>
                            <th width="120">訂單號碼</th>
                            <td>{{ order.id }}</td>
                        </tr>
                        <tr>
                            <th width="120">Email</th>
                            <td>{{ order.user.email }}</td>
                        </tr>
                        <tr>
                            <th>姓名</th>
                            <td>{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <th>收件人電話</th>
                            <td>{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <th>收件人地址</th>
                            <td>{{ order.user.address }}</td>
                        </tr>
                        <tr>
                            <th>付款狀態</th>
                            <td v-if="!order.is_paid" class="text-danger">尚未付款</td>
                            <td v-else class="text-success">付款完成</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>

            <!-- payment -->
            <div class="card border-0 mb-3"
              v-if="!order.is_paid">
              <div class="card-body">
                <Payment></Payment>
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
import CartProgressBar from '../components/CartProgressBar.vue';
import Payment from '../components/UserPayment.vue';

export default {
  components: {
    CartProgressBar,
    Payment,
  },
  computed: {
    ...mapState(orderStore, ['order', 'shippingFee', 'isUseCoupon', 'couponCode', 'couponPercent', 'subTotal', 'orderIsPaid']),
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
    await this.getCart();
    this.isPaid();
    this.scrollToTop();
  },
};
</script>
