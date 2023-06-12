<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <!-- order total -->
  <div class="card-body border-0"
    v-if="cart.final_total > 0">
    <h5 class="text-center card-title mb-3">訂單價格</h5>
    <table class="w-100">
      <tbody>
        <tr>
          <th>小計</th>
          <td class="text-end">$ {{ $filters.currency(cart.total) }} NTD</td>
        </tr>
        <tr v-if="isUseCoupon">
          <td class="text-success">已套用優惠卷 '{{ couponCode }}'</td>
          <td class="text-success text-end">{{ couponPercent / 10 }} 折</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <th class="text-success">折扣價</th>
          <td class="text-success text-end">${{ $filters.currency(cart.final_total) }} NTD
          </td>
        </tr>
        <tr v-if="cart.final_total > 0 && cart.final_total < 2000">
          <th>運費</th>
          <td class="text-end">${{ shippingFee }} NTD</td>
        </tr>
        <tr v-if="cart.final_total >= 2000">
          <th>運費</th>
          <td class="text-end">已達到免運金額</td>
        </tr>
      </tbody>
      <tfoot class="table-group-divider">
        <tr>
          <th>總計</th>
          <td v-if="cart.final_total !== cart.total && cart.final_total >= 2000"
            class="text-end">
            ${{ $filters.currency(cart.final_total) }} NTD
          </td>
          <td v-if="cart.final_total !== cart.total && cart.final_total < 2000"
            class="text-end">
            ${{ $filters.currency(cart.final_total + shippingFee) }} NTD
          </td>
          <td v-if="cart.final_total === cart.total && cart.final_total >= 2000"
            class="text-end">${{ $filters.currency(cart.final_total) }} NTD
          </td>
          <td v-if="cart.final_total === cart.total && cart.final_total < 2000"
            class="text-end">${{ $filters.currency(cart.final_total + shippingFee) }} NTD
          </td>
        </tr>
        <tr v-if="progress === 1">
          <td colspan="2">
            <div class="input-group my-3">
              <input type="text"
                class="form-control"
                placeholder="輸入優惠碼"
                aria-label="Coupon code"
                aria-describedby="coupon-button"
                v-model="couponCodeInput">
              <button class="btn btn-outline-secondary"
                v-if="!isUseCoupon"
                type="button"
                id="coupon-button"
                @click="addCouponCode(couponCodeInput)">套用優惠碼</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="d-grid" v-if="progress === 1">
      <router-link to="/user/orderform" class="btn btn-warning">結帳</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import orderStore from '@/stores/orderStore';

export default {
  props: ['progress'],
  computed: {
    ...mapState(cartStore, ['cart', 'isUseCoupon', 'couponPercent', 'couponCode', 'shippingFee']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem', 'pushMessage']),
    ...mapState(orderStore, ['order']),
  },
  data() {
    return {
      couponCodeInput: '',
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'addCouponCode']),
  },
};
</script>
