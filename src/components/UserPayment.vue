<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="mb-3">
      <h5 class="text-center mb-3">付款方式</h5>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio"
          name="paymentMethod" id="credit" value="credit"
          @change="paymentMethod($event)">
        <label class="form-check-label" for="credit">信用卡付款</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio"
          name="paymentMethod" id="atm" value="atm"
          @change="paymentMethod($event)">
        <label class="form-check-label" for="atm">ATM轉帳付款</label>
      </div>
    </div>

  <Form @submit="payOrder" v-slot="{ errors }"
    v-if="payment === 'credit'">
    <div class="mb-3">
      <label class="form-label" for="cardNumber">信用卡號碼</label>
      <Field class="form-control" type="text" id="cardNumber"
        name="信用卡號碼" maxlength="19"
        v-model="cardNumber" placeholder="0000 0000 0000 0000"
        :class="{ 'is-invalid': errors['信用卡號碼'] }"
        rules="required"></Field>
        <ErrorMessage name="信用卡號碼" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="mb-3">
      <label class="form-label" for="cardName">信用卡姓名</label>
      <Field class="form-control" type="text" id="cardName"
        name="信用卡姓名" v-model="customerCardInfo.cardName"
        :class="{ 'is-invalid':errors['信用卡姓名'] }"
        rules="required"></Field>
        <ErrorMessage name="信用卡姓名" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="row mb-3">
      <div class="col-9">
        <label for="cardMonth" class="form-label">信用卡到期月/年</label>
          <div class="row">
            <div class="col-6">
              <Field name="到期月份" as="select" id="cardMonth" class="form-select me-3"
                v-model="customerCardInfo.cardMonth" :class="{ 'is-invalid':errors['到期月份'] }"
                rules="required">
                <option value="" disabled selected>MM</option>
                <option :value="n < 10 ? '0' + n : n" v-for="n in 12" :key="n">
                  {{n < 10 ? '0' + n : n}}
                </option>
              </Field>
              <ErrorMessage name="到期月份" class="invalid-feedback"></ErrorMessage>
            </div>
              <div class="col-6">
              <Field name="到期年份" as="select" id="cardYear" class="form-select"
                v-model="customerCardInfo.cardYear" :class="{ 'is-invalid':errors['到期年份'] }"
                rules="required">
                <option value="" disabled selected>YY</option>
                <option :value="$index + minCardYear" v-for="(n, $index) in 12" :key="n">
                  {{$index + minCardYear}}
                </option>
              </Field>
              <ErrorMessage name="到期年份" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
      </div>
      <div class="col-3">
        <label for="cardCvv" class="form-label">CVV</label>
        <Field type="text" name="CVV號碼" id="cardCvv"
          class="form-control" maxlength="3" v-model="customerCardInfo.cardCvv"
          placeholder="000"
          :class="{ 'is-invalid':errors['CVV號碼'] }"
          rules="required"></Field>
        <ErrorMessage name="CVV號碼" class="invalid-feedback"></ErrorMessage>
      </div>
    </div>
    <div class="mb-3">
        <button class="btn btn-warning w-100">確認付款</button>
    </div>
  </Form>

  <Form @submit="payOrder" v-slot="{ errors }"
    v-if="payment === 'atm'">
    <div class="mb-3">
      <p>請匯款到以下帳號</p>
      <strong class="text-warning">您在匯款後，請告知我們匯款帳號末五碼</strong>
    </div>
    <table class="table">
      <tbody>
        <tr>
          <th>銀行代號</th>
           <td>123</td>
        </tr>
        <tr>
          <th>銀行</th>
           <td>Good Bank 銀行</td>
        </tr>
        <tr>
          <th>分行</th>
          <td>台北分行</td>
        </tr>
        <tr>
          <th>銀行帳號</th>
          <td>987 654321234</td>
        </tr>
      </tbody>
    </table>
    <div class="mb-3">
      <label for="paymentAcc" class="form-label">匯款帳號末五碼</label>
      <Field type="text" name="帳號末五碼" class="form-control" id="paymentAcc"
        placeholder="00000" maxlength="5"
        v-model="customerAccInfo.paymentAcc"
        :class="{ 'is-invalid': errors['帳號末五碼'] }"
        rules="required"></Field>
        <ErrorMessage name="帳號末五碼" class="invalid-feedback"></ErrorMessage>
    </div>
    <div class="mb-3">
        <button class="btn btn-warning w-100">通知已匯款</button>
    </div>
  </Form>
  <PaidOrderModal ref="paidModal"></PaidOrderModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import orderStore from '@/stores/orderStore';
import statusStore from '@/stores/statusStore';
import PaidOrderModal from './PaidOrderModal.vue';

export default {
  components: {
    PaidOrderModal,
  },
  computed: {
    ...mapState(orderStore, ['order', 'orderIsPaid']),
    ...mapState(statusStore, ['isLoading']),
  },
  watch: {
    cardNumber() {
      const realNumber = this.cardNumber.replace(/ /gi, '');
      const formattedNumber = realNumber.match(/.{1,4}/g);
      this.cardNumber = formattedNumber.join(' ');
      this.customerCardInfo.realCardNumber = realNumber;
    },
    orderIsPaid() {
      this.$router.push('./ordercomplete');
    },
  },
  methods: {
    ...mapActions(orderStore, ['payOrder']),
    paymentMethod(event) {
      const paymentMethod = event.target.value;
      this.payment = paymentMethod;
      console.log(this.payment);
    },
  },
  data() {
    return {
      payment: '',
      cardNumber: '',
      customerCardInfo: {
        realCardNumber: '',
        cardName: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: '',
      },
      customerAccInfo: {
        paymentAcc: '',
      },
      minCardYear: new Date().getFullYear(),
    };
  },
};
</script>
