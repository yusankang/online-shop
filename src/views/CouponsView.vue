<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
<div class="text-end">
    <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
    >
    建立新的優惠卷
    </button>
</div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>名稱</th>
                <th width="200">折扣百分比</th>
                <th width="200">到期日</th>
                <th width="200">是否啟用</th>
                <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in coupons" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}%</td>
                <td>{{ $filters.date(item.due_date) }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-mute" v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm"
                    @click.prevent="openCouponModal(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm"
                    @click.prevent="openDeleteModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <CouponModal ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"></CouponModal>
    <DeleteModal ref="deleteModal"
    :deleteItem="tempCoupon"
    @deleteItem="deleteCoupon"></DeleteModal>
</template>

<script>
import DeleteModal from '../components/DeleteModal.vue';
import CouponModal from '../components/CouponModal.vue';

export default {
  data() {
    return {
      coupons: {
        // {
        //   due_date: 1555459200,
        //   id: '-L9u5Cgodczattv-7i8D',
        //   is_enabled: 1,
        //   percent: 70,
        //   title: '超級特惠價格2',
        //   code: 'test Code',
        // },
        // {
        //   due_date: 6547658,
        //   id: '123456',
        //   is_enabled: 1,
        //   percent: 80,
        //   title: '超級特惠價格',
        //   code: 'test Code 2',
        // },
      },
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponModal,
    DeleteModal,
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getCoupons() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(api, this.tempProduct)
        .then((response) => {
          this.isLoading = false;
          console.log(response.data);
          this.coupons = response.data.coupons;
        });
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    updateCoupon(item) {
      this.tempCoupon = item;
      if (this.isNew) {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(api, { data: this.tempCoupon }).then((response) => {
          console.log(response, this.tempCoupon);
          this.pushMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(api, { data: this.tempCoupon }).then((response) => {
          console.log(response);
          this.pushMessageState(response, '更新優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    openDeleteModal(item) {
      this.tempCoupon = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((response) => {
          this.isLoading = false;
          const deleteComponent = this.$refs.deleteModal;
          deleteComponent.hideModal();
          this.pushMessageState(response, '刪除優惠卷');
          this.getCoupons();
        });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
