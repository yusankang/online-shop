<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="row justify-content-center">
        <form class="col-md-6" @submit.prevent="payOrder">
            <table class="table">
                <thead class="bg-light">
                    <th>品項</th>
                    <th>數量</th>
                    <th class="text-end" width="150">單價</th>
                </thead>
                <tbody>
                    <tr v-for="item in order.products" :key="item.id">
                        <td>{{ item.product.title }}</td>
                        <td>{{ item.qty }}/ {{ item.product.unit }}</td>
                        <td class="text-end">
                            <span v-if="item.total !== item.final_total">
                                <s> ${{ $filters.currency(item.total) }}</s>
                            </span>
                            ${{ $filters.currency(item.final_total) }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="text-end">總計</td>
                        <td class="text-end">
                            <strong>${{ $filters.currency(order.total) }} NTD</strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <table class="table mt-5">
                <thead class="bg-light">
                    <th colspan="2">收件人資料</th>
                </thead>
                <tbody>
                    <tr>
                        <th width="120">Email</th>
                        <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                        <th>姓名</th>
                        <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                        <th>收件人電話</th>
                        <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                        <th>收件人地址</th>
                        <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                        <th>付款狀態</th>
                        <td v-if="!order.is_paid">尚未付款</td>
                        <td v-else class="text-success">付款完成</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-end">
                <button v-if="!order.is_paid" class="btn btn-danger">確認付款去</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api).then((response) => {
        this.order = response.data.order;
        console.log(this.order);
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
