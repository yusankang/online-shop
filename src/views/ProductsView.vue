<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<h5 class="text-center mt-4">商品列表</h5>
<div class="d-grid d-md-flex justify-content-md-end">
    <button type="button" class="btn btn-outline-dark mt-3"
      @click="openProductModal(true)">
     新增商品
    </button>
</div>
    <table v-if="screenLg" class="table table-sm table-hover mt-4">
        <thead>
            <tr>
                <th width="80">分類</th>
                <th>產品名稱</th>
                <th width="100">原價</th>
                <th width="100">售價</th>
                <th width="100">是否啟用</th>
                <th width="160">編輯</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-right">
                    {{ $filters.currency(item.origin_price) }}
                </td>
                <td class="text-right">
                    {{ $filters.currency(item.price) }}
                </td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span class="text-mute" v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                    <button class="btn btn-outline-dark btn-sm"
                    @click="openProductModal(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <table v-else class="table table-sm mt-4 table-bordered border-dark">
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-between">
                <strong>{{ item.title }}</strong>
                <div class="btn-group">
                  <button class="btn btn-outline-dark btn-sm"
                    @click="openProductModal(false, item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal(item)">刪除</button>
                </div>
              </div>
              <span class="me-3">分類： {{ item.category }}</span>
              <span>單價： ${{ $filters.currency(item.origin_price) }}</span>
              <span>售價： ${{ $filters.currency(item.price) }}</span>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-mute" v-else>未啟用</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <ProductModal ref="productModal"
      :product="tempProduct"
      @update-product="updateProduct"
      @hideProductModal="hideProductModal">
    </ProductModal>
    <DeleteModal ref="deleteModal"
      :selectedItem="tempProduct"
      @deleteItem="deleteProduct"
      @hideDeleteModal="hideDeleteModal">
    </DeleteModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import dashboardStore from '@/stores/dashboardStore';
import statusStore from '@/stores/statusStore';
import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import Pagination from '../components/PaginationComponent.vue';

export default {
  components: {
    ProductModal,
    DeleteModal,
    Pagination,
  },
  computed: {
    ...mapState(dashboardStore, ['products', 'pagination', 'screenLg']),
    ...mapState(statusStore, ['isLoading']),
  },
  data() {
    return {
      tempProduct: {},
      isNew: false,
    };
  },
  methods: {
    ...mapActions(dashboardStore, ['getProducts', 'deleteItem', 'sendUpdate', 'onScreenResize', 'updateScreenWidth', 'setActivePage']),
    ...mapActions(statusStore, ['pushMessage']),

    openProductModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    hideProductModal() {
      const productComponent = this.$refs.productModal;
      productComponent.hideModal();
    },
    updateProduct(item) {
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      const type = 'product';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      this.sendUpdate(type, api, httpMethod, item);
    },
    openDeleteModal(item) {
      this.tempProduct = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteProduct(selectedItem) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${selectedItem.id}`;
      const type = 'product';
      this.deleteItem(type, api);
    },
    hideDeleteModal() {
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.hideModal();
    },
  },
  created() {
    this.getProducts();
    this.setActivePage('products');
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
};
</script>
