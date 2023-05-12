<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<div class="text-end">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
    Add new product
    </button>
</div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="100">是否啟用</th>
                <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
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
                    <button class="btn btn-outline-primary btn-sm"
                    @click="openModal(false, item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal(item)">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :pages="pagination"
    @emit-pages="getProducts"></Pagination>
    <ProductModal ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"></ProductModal>
    <DeleteModal ref="deleteModal"
    :deleteItem="tempProduct"
    @deleteItem="deleteProduct"></DeleteModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import Pagination from '../components/PaginationComponent.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DeleteModal,
    Pagination,
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((response) => {
          this.isLoading = false;
          if (response.data.success) {
            console.log(response.data);
            this.products = response.data.products;
            this.pagination = response.data.pagination;
          }
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          this.isLoading = false;
          console.log(response.data.success);
          this.pushMessageState(response, '更新');
          this.getProducts();
          productComponent.hideModal();
        });
    },
    openDeleteModal(item) {
      this.tempProduct = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api)
        .then((response) => {
          const deleteComponent = this.$refs.deleteModal;
          deleteComponent.hideModal();
          console.log(response.data.message);
          this.pushMessageState(response, '刪除商品');
          this.getProducts();
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
