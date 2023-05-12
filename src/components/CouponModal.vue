<template>
<!-- Modal -->
    <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="modal"
    >
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title">新增優惠卷</h5>
                <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="title">
                        優惠卷名稱
                        <input
                            type="text"
                            class="form-control"
                            id="title"
                            placeholder="請輸入優惠卷名稱"
                            v-model="tempCoupon.title"
                        />
                    </label>
                  </div>
                  <div class="mb-3">
                      <label for="percent">
                          折扣百分比
                          <input
                              type="number"
                              class="form-control"
                              id="percent"
                              placeholder="請輸入折扣百分比"
                              v-model="tempCoupon.percent"
                          />
                      </label>
                  </div>
                  <div class="mb-3">
                      <label for="due-date">
                          到期日
                          <input
                              type="date"
                              class="form-control"
                              id="due-date"
                              placeholder="請輸入到期日"
                              v-model="due_date"
                          />
                      </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="code">
                        優惠卷密碼
                        <input
                            type="text"
                            class="form-control"
                            id="code"
                            placeholder="請輸入優惠卷密碼"
                            v-model.number="tempCoupon.code"
                        />
                    </label>
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
                <button type="button"
                    class="btn btn-secondary" data-bs-dismiss="modal"
                >取消</button>
                <button type="button"
                    class="btn btn-primary"
                    @click="$emit('update-coupon', tempCoupon)"
                >確認</button>
            </div>
            </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
      console.log(this.due_date);
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
      due_date: '',
    };
  },
  mixins: [modalMixin],
};
</script>
