<template>
  <LoadingOverlay :active="isLoading" />
  <div
    class="card border-0"
    :class="{ 'd-md-none': progress === 1 }"
    v-if="cart.final_total > 0"
  >
    <div class="card-body border-0">
      <h5 class="text-center mb-3" v-if="progress === 1">購物車品項</h5>
      <h5 class="text-center mb-3" v-else>訂單品項</h5>
      <table class="table table-sm align-middle">
        <tbody class="table-group-divider">
          <tr v-for="item in cart.carts" :key="item.id">
            <td style="width: 90px" class="ps-0">
              <img :src="item.product.imageUrl" alt="product image" class="img-fluid" />
            </td>
            <td class="py-3">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="fs-6 mt-2"><strong>{{ item.product.title }}</strong></h5>
                  <button
                    type="button"
                    v-if="progress === 1"
                    class="btn btn-sm text-warning p-0"
                    @click="openDeleteModal(item)"
                    style="width: 44px; height: 44px;"
                  >
                    <i class="bi bi-trash3" style="font-size: 22px;"></i>
                  </button>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span>單價 ${{ $filters.currency(item.product.price) }}</span>
                  <div v-if="progress > 1">{{ item.qty }}/{{ item.product.unit }}</div>
                </div>
                <div v-if="progress === 1">
                  <label for="qty" class="input-group input-group-sm my-2">
                    <button
                      class="btn btn-outline-warning"
                      type="button"
                      @click.prevent="checkQty(item, 'subtract')"
                    >
                      <i class="bi bi-dash"></i>
                    </button>
                    <input
                      type="text"
                      id="qty"
                      class="form-control bg-white"
                      v-model.number="item.qty"
                      disabled
                    />
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                    <button
                      class="btn btn-outline-warning"
                      type="button"
                      @click.prevent="checkQty(item, 'add')"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </label>
                </div>
                <div class="d-flex justify-content-between">
                  <strong>${{ $filters.currency(item.total) }}</strong>
                  <span v-if="message && itemId === item.id" class="text-danger">
                    {{ message }}{{ item.product.unit }}
                  </span>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div
    class="card mb-3 d-none border-0"
    :class="{ 'd-md-block': progress === 1 }"
    v-for="item in cart.carts"
    :key="item.id"
  >
    <div class="row g-0">
      <div class="col-4" style="max-height: 200px">
        <img
          :src="item.product.imageUrl"
          alt="product image"
          class="rounded-start h-100 w-100"
          style="object-fit: cover"
        />
      </div>
      <div class="col-8">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">{{ item.product.title }}</h5>
            <button
              type="button"
              class="btn btn-sm text-warning border-0"
              @click="openDeleteModal(item)"
              style="width: 44px; height: 44px;"
            >
              <i class="bi bi-trash3" style="font-size: 22px;"></i>
            </button>
          </div>
          <p class="card-text">單價 ${{ $filters.currency(item.product.price) }}</p>
          <label for="qty" class="input-group input-group-sm mb-3">
            <button
              class="btn btn-outline-warning"
              type="button"
              @click.prevent="checkQty(item, 'subtract')"
            >
              <i class="bi bi-dash"></i>
            </button>
            <input
              type="text"
              id="qty"
              class="form-control bg-white"
              v-model.number="item.qty"
              disabled
            />
            <div class="input-group-text">/ {{ item.product.unit }}</div>
            <button
              class="btn btn-outline-warning"
              type="button"
              @click.prevent="checkQty(item, 'add')"
            >
              <i class="bi bi-plus"></i>
            </button>
          </label>
          <div class="d-flex justify-content-between">
            <strong class="d-block">${{ $filters.currency(item.total) }}</strong>
            <span v-if="message && itemId === item.id" class="text-danger"
              >{{ message }}{{ item.product.unit }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DeleteModal
    ref="deleteModal"
    :selected-item="tempItem"
    @delete-item="deleteItem"
    @hide-delete-modal="hideDeleteModal"
  />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import DeleteModal from '../admin-components/DeleteModal.vue';

export default {
  components: {
    DeleteModal,
  },
  props: {
    progress: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  computed: {
    ...mapState(cartStore, ['cart', 'message', 'itemId']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem', 'pushMessage']),
  },
  data() {
    return {
      tempItem: {},
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'checkQty', 'deleteCart', 'deleteItem']),

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
