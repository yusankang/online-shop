<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <Form
        class="modal-content border-0"
        ref="couponForm"
        v-slot="{ errors }"
        @submit="
          $emit('update-coupon', tempCoupon);
          $emit('hideCouponModal');
          clearResetHandler()"
      >
        <div class="modal-header bg-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.prevent="clearResetHandler"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-3">
                <label for="title">優惠卷名稱</label>
                <Field
                  type="text"
                  class="form-control"
                  id="title"
                  name="名稱"
                  placeholder="請輸入優惠卷名稱"
                  :class="{ 'is-invalid': errors['名稱'] }"
                  rules="required"
                  v-model="tempCoupon.title"
                />
                <ErrorMessage name="名稱" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="percent">折扣百分比(e.g. 80 = 8折) </label>
                <Field
                  type="number"
                  class="form-control"
                  id="percent"
                  name="折扣"
                  :class="{ 'is-invalid': errors['折扣'] }"
                  rules="required"
                  v-model.number="tempCoupon.percent"
                />
                <ErrorMessage name="折扣" class="invalid-feedback" />
              </div>
              <div class="mb-3">
                <label for="due-date">到期日</label>
                <input
                  type="text"
                  class="form-control"
                  ref="dateInput"
                  id="due-date"
                  name="到期日"
                  :placeholder="datePlaceholder"
                  onfocus="type='date'"
                  onblur="type='text'"
                  v-model="due_date"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mb-3">
                <label for="code">優惠卷密碼</label>
                <Field
                  type="text"
                  class="form-control"
                  id="code"
                  name="密碼"
                  placeholder="請輸入優惠卷密碼"
                  :class="{ 'is-invalid': errors['密碼'] }"
                  rules="required"
                  v-model="tempCoupon.code"
                />
                <ErrorMessage name="密碼" class="invalid-feedback" />
              </div>
              <div class="form-check">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempCoupon.is_enabled"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-danger"
            data-bs-dismiss="modal"
            @click.prevent="clearResetHandler"
          >
            取消
          </button>
          <button class="btn btn-secondary">確認</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  mixins: [modalMixin],
  props: {
    coupon: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    datePlaceholder() {
      const date = new Date(this.displayDate * 1000);
      return date.toLocaleDateString('en-US');
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      this.displayDate = this.coupon.due_date;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
      this.displayDate = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: '',
      displayDate: '',
    };
  },
  methods: {
    clearResetHandler() {
      this.clearInput();
      this.reset();
    },
    clearInput() {
      this.due_date = '';
    },
    reset() {
      this.$refs.couponForm.resetForm();
    },
  },
};
</script>
