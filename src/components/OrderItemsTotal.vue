<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <!-- items in cart table -->
      <div class="card border-0" :class="{'d-md-none': progress === 1}"
        v-if="cart.final_total > 0">
        <div class="card-body border-0">
          <h5 class="text-center mb-3" v-if="progress === 1">購物車品項</h5>
          <h5 class="text-center mb-3" v-else>訂單品項</h5>
          <table class="table table-sm align-middle">
          <thead>
              <tr>
              <th>圖</th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
              <th v-if="progress > 1">金額</th>
              <th></th>
              </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="item in cart.carts" :key="item.id">
                <td style="width: 70px;" class="ps-0">
                <img :src="item.product.imageUrl" alt="product image"
                class="img-fluid"></td>
                <td class="fs-6">{{item.product.title}}</td>
                <td style="width: 95px"
                  v-if="progress === 1">
                <label for="qty" class="input-group input-group-sm">
                    <input type="number"
                    min="1"
                    :disabled = "cartLoadingItem === item.id"
                    @change="updateCart(item)"
                    id="qty"
                    class="form-control"
                    v-model.number="item.qty"/>
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                </label>
                </td>
                <td width="50px"
                  v-if="progress > 1">
                  {{item.qty}}/{{ item.product.unit }}
                </td>
                <td style="width: 50px">${{$filters.currency(item.product.price)}}</td>
                <td width="50px">${{ $filters.currency(item.total) }}</td>
                <td class="pe-0">
                <button type="button"
                    v-if="progress === 1"
                    class="btn btn-sm text-warning pe-0"
                    @click="openDeleteModal(item)">
                    <i class="bi bi-trash3"></i>
                </button>
                </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>

    <!-- items in cart cards -->
    <div class="card mb-3 d-none border-0"
      :class="{'d-md-block': progress === 1}"
      style="max-width: 540px;"
        v-for="item in cart.carts" :key="item.id">
        <div class="row g-0">
            <div class="col-4" style="max-height: 200px;">
            <img :src="item.product.imageUrl" alt="product image"
                class="rounded-start h-100 w-100"
                style="object-fit: cover;">
            </div>
            <div class="col-8">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ item.product.title }}</h5>
                <button type="button"
                    class="btn btn-outline-warning btn-sm"
                    @click="openDeleteModal(item)">
                    <i class="bi bi-trash3"></i>
                </button>
                </div>
                <p class="card-text">單價 ${{ $filters.currency(item.product.price) }}</p>
                <label for="qty" class="input-group input-group-sm">
                <input type="number"
                    min="1"
                    :disabled = "cartLoadingItem === item.id"
                    @change="updateCart(item)"
                    id="qty"
                    class="form-control"
                    v-model.number="item.qty"/>
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                </label>
            </div>
            </div>
        </div>
    </div>

    <DeleteModal ref="deleteModal"
        :selectedItem="tempItem"
        @deleteItem="deleteItem"
        @hideDeleteModal="hideDeleteModal">
    </DeleteModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  components: {
    DeleteModal,
  },
  props: ['progress'],
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem', 'pushMessage']),
  },
  data() {
    return {
      tempItem: {},
      // qty: 1,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'updateCart', 'deleteCart', 'deleteItem']),

    openDeleteModal(item) {
      this.tempItem = item;
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    hideDeleteModal() {
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.hideModal();
    },
  },
  created() {
    this.getCart();
  },
};
</script>
