<template>
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
                    {{ item.origin_price }}
                </td>
                <td class="text-right">
                    {{ item.price }}
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
    <ProductModal ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"></ProductModal>
    <DeleteModal ref="deleteModal"
    :deleteProduct="tempProduct"
    @deleteProduct="deleteProduct"></DeleteModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';
import DeleteModal from '../components/DeleteModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
    };
  },
  components: {
    ProductModal,
    DeleteModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http.get(api)
        .then((response) => {
          if (response.data.success) {
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
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          console.log(response);
          productComponent.hideModal();
          this.getProducts();
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
          if (response.data.success) {
            this.getProducts();
            console.log(response.data.message);
          }
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
