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
                            v-model="orderNumber">
                        <button class="btn btn-outline-warning"
                            @click.prevent="goToOrder()">Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {

  data() {
    return {
      orderNumber: '',
    };
  },
  methods: {
    goToOrder() {
      this.$router.push(`/user/checkout/${this.orderNumber}`);
    },
  },
};
</script>
