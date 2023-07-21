<template>
  <h5 class="text-center mt-4">優惠卷列表</h5>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="d-grid d-md-flex justify-content-md-end">
    <button type="button" class="btn btn-outline-dark mt-3"
      @click="openCouponModal(true)">
      新增優惠卷
    </button>
  </div>
  <table v-if="screenLg" class="table table-sm table-hover mt-4">
      <thead>
          <tr>
              <th>名稱</th>
              <th width="200">折扣</th>
              <th width="200">到期日</th>
              <th width="200">是否啟用</th>
              <th width="200">編輯</th>
          </tr>
      </thead>
      <tbody class="table-group-divider">
          <tr v-for="item in coupons" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.percent/10 }}折</td>
              <td>{{ $filters.date(item.due_date) }}</td>
              <td>
                  <span class="text-success" v-if="item.is_enabled">啟用</span>
                  <span class="text-mute" v-else>未啟用</span>
              </td>
              <td>
                  <div class="btn-group">
                  <button class="btn btn-outline-dark btn-sm"
                    @click.prevent="openCouponModal(false, item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm"
                    @click.prevent="openDeleteModal(item)">刪除</button>
                  </div>
              </td>
          </tr>
      </tbody>
  </table>
  <table v-else class="table table-sm mt-4 table-bordered border-dark">
    <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-between">
              <strong>{{ item.title }}</strong>
              <div class="btn-group">
                <button class="btn btn-outline-dark btn-sm"
                  @click="openCouponModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                  @click="openDeleteModal(item)">刪除</button>
              </div>
            </div>
            <span>折扣：{{ item.percent/10 }}折</span>
            <span>到期日：{{ $filters.date(item.due_date) }}</span>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-mute" v-else>未啟用</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal"
    :coupon="tempCoupon"
    @update-coupon="updateCoupon"
    @hideCouponModal="hideCouponModal">
  </CouponModal>
  <DeleteModal ref="deleteModal"
    :selectedItem="tempCoupon"
    @deleteItem="deleteCoupon"
    @hideDeleteModal="hideDeleteModal">
  </DeleteModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import dashboardStore from '@/stores/dashboardStore';
import statusStore from '@/stores/statusStore';
import DeleteModal from '../components/DeleteModal.vue';
import CouponModal from '../components/CouponModal.vue';

export default {
  components: {
    CouponModal,
    DeleteModal,
  },
  computed: {
    ...mapState(dashboardStore, ['coupons', 'screenLg']),
    ...mapState(statusStore, ['isLoading']),
  },
  data() {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
    };
  },
  methods: {
    ...mapActions(dashboardStore, ['getCoupons', 'sendUpdate', 'deleteItem', 'onScreenResize', 'updateScreenWidth', 'setActivePage']),

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
    hideCouponModal() {
      const couponComponent = this.$refs.couponModal;
      couponComponent.hideModal();
    },
    updateCoupon(item) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      const type = 'coupon';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = 'put';
      }
      this.sendUpdate(type, api, httpMethod, item);
    },
    openDeleteModal(item) {
      this.tempCoupon = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteCoupon(selectedItem) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${selectedItem.id}`;
      const type = 'coupon';
      this.deleteItem(type, api);
    },
    hideDeleteModal() {
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.hideModal();
    },
  },
  created() {
    this.getCoupons();
    this.setActivePage('coupons');
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
};
</script>
