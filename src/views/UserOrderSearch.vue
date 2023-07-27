<template>
    <div class="container pt-5">
        <h3 class="text-white permanent-marker text-center pt-5">Search Order</h3>
        <div class="row d-flex justify-content-center align-items-center"
            style="height: 40vh;">
            <div class="col-8">
                <h5 class="text-white">查詢訂單</h5>
                <form role="search">
                    <div class="d-flex">
                        <input class="form-control me-2" type="search" id="search" name="search"
                            placeholder="輸入訂單號碼" aria-label="Search"
                            @focus="clearSearchMessage()"
                            v-model="orderNumber">
                        <button class="btn btn-outline-warning"
                            @click.prevent="getOrder(orderNumber), clearSearchMessage()">Search
                        </button>
                    </div>
                    <span v-if="searchMessage" class="text-danger">沒有訂單資料</span>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import orderStore from '@/stores/orderStore';

export default {
  computed: {
    ...mapState(orderStore, ['searchMessage', 'order']),
  },
  watch: {
    order() {
      if (this.order !== null) {
        this.goToOrder();
      }
    },
  },
  data() {
    return {
      orderNumber: '',
    };
  },
  methods: {
    ...mapActions(orderStore, ['getOrder', 'clearSearchMessage']),

    goToOrder() {
      this.$router.push(`/user/checkout/${this.order.id}`);
    },
  },
};
</script>
