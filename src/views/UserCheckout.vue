<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <Navbar></Navbar>
  <div class="container pt-5">
    <h3 class="text-white text-center pt-5 permanent-marker">Payment</h3>
    <CartProgressBar :progressBar="progressBar"></CartProgressBar>
      <form @submit.prevent="payOrder">
        <div class="row d-flex flex-md-row-reverse">
          <!-- order details -->
          <div class="col-md-5 mb-3">
            <div class="card border-0">
              <div class="card-body border-0">
                <h5 class="text-center mb-3">訂單明細</h5>
                <table class="table">
                  <thead>
                    <tr>
                    <th>圖</th>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th>
                    <th>金額</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in order.products" :key="item.id">
                        <td width="70px" class="ps-0">
                          <img :src="item.product.imageUrl" alt="product image"
                          class="img-fluid"></td>
                        <td>{{ item.product.title }}</td>
                        <td width="50px">{{ item.qty }}/ {{ item.product.unit }}</td>
                        <td width="50px">${{ $filters.currency(item.product.price) }}</td>
                        <td width="50px">${{ $filters.currency(item.total) }}</td>
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
                            <td v-if="!order.is_paid">尚未付款</td>
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
    <Footer></Footer>
</template>

<script>

import { mapState, mapActions } from 'pinia';
import orderStore from '@/stores/orderStore';
import statusStore from '@/stores/statusStore';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';
import CartProgressBar from '../components/CartProgressBar.vue';
import Payment from '../components/UserPayment.vue';

export default {
  components: {
    Navbar,
    Footer,
    CartProgressBar,
    Payment,
  },
  computed: {
    ...mapState(orderStore, ['order', 'shippingFee', 'isUseCoupon', 'couponCode', 'couponPercent', 'subTotal']),
    ...mapState(statusStore, ['isLoading']),
  },
  data() {
    return {
      progressBar: 3,
    };
  },
  methods: {
    ...mapActions(orderStore, ['getOrder']),
  },
  created() {
    const { orderId } = this.$route.params;
    this.getOrder(orderId);
  },
};
</script>
