<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <h5 class="text-center mt-4">訂單列表</h5>
  <div class="d-grid d-md-flex justify-content-md-end">
    <button type="button" class="btn btn-outline-dark mt-3"
      @click="openDeleteModal(deleteAllOrders)">
     刪除所有訂單
    </button>
  </div>
  <table v-if="screenLg" class="table table-hover mt-4">
    <thead>
      <tr>
        <th width="100">購買時間</th>
        <th width="180">Email</th>
        <th>購買品項</th>
        <th width="100">應付金額</th>
        <th width="120">是否付款</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <template v-for="item in orders" :key="item.id">
          <tr>
              <td>{{ $filters.date(item.create_at) }}</td>
              <td>{{ item.user.email }}</td>
              <td>
                  <ul>
                      <li v-for="(product, key) in item.products" :key="key">
                      {{ product.product.title }} <br>
                      數量：{{ product.qty }} {{ product.product.unit }}
                      </li>
                  </ul>
              </td>
              <td>${{ $filters.currency(item.total) }}</td>
              <td>
                  <div class="form-check">
                      <label class="form-check-label" for="`paidCheck${item.id}`"></label>
                      <input type="checkbox"
                        :checked="item.is_paid"
                        id="`paidCheck${item.id}`"
                        class="form-check-input"
                        @change="item.is_paid = !item.is_paid, updatePaid(item)">
                      <span v-if="item.is_paid">已付款</span>
                      <span v-else>未付款</span>
                  </div>
              </td>
              <td>
                  <div class="btn-group">
                      <button class="btn btn-outline-dark btn-sm"
                      @click="openModal(item)">細節</button>
                      <button class="btn btn-outline-danger btn-sm"
                      @click="openDeleteModal(item)">刪除</button>
                  </div>
              </td>
          </tr>
      </template>

    </tbody>
  </table>

  <table v-else class="table table-sm mt-4 table-bordered border-dark">
    <tbody>
      <tr v-for="item in orders" :key="item.id" class="border-0">
        <td class="d-flex flex-column border-top border-bottom border-dark">
          <div class="d-flex justify-content-between">
            <span>購買時間：{{ $filters.date(item.create_at) }}</span>
            <div class="btn-group">
              <button class="btn btn-outline-dark btn-sm"
                @click="openModal(item)">細節</button>
              <button class="btn btn-outline-danger btn-sm"
                @click="openDeleteModal(item)">刪除</button>
            </div>
          </div>
          <span>Email：{{ item.user.email }}</span>
          <span>應付金額：${{ $filters.currency(item.total) }}</span>
          <div class="d-flex">
              是否付款：
              <div class="form-check">
                <label class="form-check-label" for="`paidCheck${item.id}`"></label>
                <input type="checkbox"
                  :checked="item.is_paid"
                  id="`paidCheck${item.id}`"
                  class="form-check-input"
                  @change="item.is_paid = !item.is_paid, updatePaid(item)">
              </div>
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
          </div>
          <div class="d-flex border-top">
            購買品項：
            <ul>
                <li v-for="(product, key) in item.products" :key="key">
                {{ product.product.title }} <br>
                數量：{{ product.qty }} {{ product.product.unit }}
                </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  <OrderModal ref="orderModal" :order="tempOrder"></OrderModal>
  <DeleteModal ref="deleteModal"
    :selectedItem="tempOrder"
    @deleteItem="deleteOrder"
    @hideDeleteModal="hideDeleteModal">
  </DeleteModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import dashboardStore from '@/stores/dashboardStore';
import statusStore from '@/stores/statusStore';
import OrderModal from '../components/OrderModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import Pagination from '../components/PaginationComponent.vue';

export default {
  components: {
    OrderModal,
    DeleteModal,
    Pagination,
  },
  computed: {
    ...mapState(dashboardStore, ['orders', 'pagination', 'screenLg']),
    ...mapState(statusStore, ['isLoading']),
  },
  data() {
    return {
      tempOrder: {},
      deleteAllOrders: { title: '所有訂單' },
    };
  },
  methods: {
    ...mapActions(dashboardStore, ['getOrders', 'updatePaid', 'sendUpdate', 'deleteItem', 'onScreenResize', 'updateScreenWidth', 'setActivePage']),

    updatePaid(order) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`;
      const type = 'paid';
      const httpMethod = 'put';
      const item = {
        is_paid: order.is_paid,
      };
      this.sendUpdate(type, api, httpMethod, item);
    },
    openModal(item) {
      this.tempOrder = { ...item };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDeleteModal(item) {
      this.tempOrder = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteOrder(selectedItem) {
      if (selectedItem.title === '所有訂單') {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
        const type = 'order';
        this.deleteItem(type, api);
      } else {
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${selectedItem.id}`;
        const type = 'order';
        this.deleteItem(type, api);
      }
    },
    hideDeleteModal() {
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.hideModal();
    },
  },
  created() {
    this.getOrders();
    this.setActivePage('orders');
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
};
</script>
