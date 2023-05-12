<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <table class="table">
  <thead>
    <tr>
      <th width="100">購買時間</th>
      <th width="250">Email</th>
      <th>購買管項</th>
      <th width="120">應付金額</th>
      <th width="100">是否付款</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="item in orders" :key="item.id">
        <tr>
            <td>{{$filters.date(item.create_at)}}</td>
            <td>{{item.user.email}}</td>
            <td>
                <ul class="unstyled">
                    <li v-for="(product, key) in item.products" :key="key">
                    {{product.product.title}} 數量：{{product.qty}} {{product.product.unit}}
                    </li>
                </ul>
            </td>
            <td>{{$filters.currency(item.total)}}</td>
            <td>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="`paidSwitch${item.id}`">
                        <input
                            type="checkbox"
                            id="`paidSwitch${item.id}`"
                            class="form-check-input"
                            @change="updatePaid(item)"
                        >
                        <span v-if="item.is_paid">已付款</span>
                        <span v-else>未付款</span>
                    </label>
                </div>
            </td>
            <td>
                <div class="btn-group">
                    <button class="btn btn-outline-primary btn-sm"
                    @click="openModal(item)">編輯</button>
                    <button class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal(item)">刪除</button>
                </div>
            </td>
        </tr>
    </template>

  </tbody>
</table>
<Pagination :pages="pagination"
@emit-pages="getOrders"></Pagination>
<OrderModal ref="orderModal"
:order="tempOrder"></OrderModal>
<DeleteModal ref="deleteModal"
:deleteItem="tempOrder"
@deleteItem="deleteOrder"></DeleteModal>
</template>

<script>
import OrderModal from '../components/OrderModal.vue';
import DeleteModal from '../components/DeleteModal.vue';
import Pagination from '../components/PaginationComponent.vue';

export default {
  data() {
    return {
      tempOrder: {},
      orders: [
        {
          create_at: 1523539834,
          id: '-L9u2EUkQSoEmW7QzGLF',
          is_paid: true,
          message: '這是留言',
          paid_date: 1523539924,
          payment_method: 'credit_card',
          products: {
            L8nBrq8Ym4ARI1Kog4t: {
              product: {
                title: 'Birdy',
                unit: 'Dog',
              },
              id: 'L8nBrq8Ym4ARI1Kog4t',
              product_id: '-L8moRfPlDZZ2e-1ritQ',
              qty: 1,
            },
            L8nBrq8Ym4ARI1Kog5t: {
              product: {
                title: 'Luna',
                unit: 'Cat',
              },
              id: 'L8nBrq8Ym4ARI1Kog5t',
              product_id: '-L8moRfPlDZZ2e-1catQ',
              qty: 1,
            },
          },
          total: 24600,
          user: {
            address: 'kaohsiung',
            email: 'test@gmail.com',
            name: 'test',
            tel: '0912346768',
          },
          num: 1,
        },
        {
          create_at: 1523539519,
          id: '-L9u11NAE0m0SpSBUDIq',
          is_paid: false,
          message: '這是留言',
          paid_date: 1523539519,
          payment_method: 'credit_card',
          products: {
            L8nBrq8Ym4ARI1Kog4t: {
              product: {
                title: 'Crumb',
                unit: 'Dog',
              },
              id: 'L8nBrq8Ym4ARI1Kog4t',
              product_id: '-L8moRfPlDZZ2e-1ritQ',
              qty: 1,
            },
          },
          total: 26700,
          user: {
            address: 'kaohsiung',
            email: 'test@gmail.com',
            name: 'test',
            tel: '0912346768',
          },
          num: 2,
        }],
      pagination: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: null,
      },
      isLoading: false,
    };
  },
  components: {
    OrderModal,
    DeleteModal,
    Pagination,

  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getOrders(page = 1) {
      console.log('getting orders');
      console.log(page);
    },
    // getOrders(page = 1) {
    //   const api = `${process.env.VUE_APP_API}api/
    // ${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
    //   this.isLoading = true;
    //   this.$http.get(api).then((response) => {
    //     this.isLoading = false;
    //     if (response.data.success) {
    //       console.log(response.data);
    //       this.orders = response.data.orders;
    //       this.pagination = response.data.pagination;
    //     }
    //   });
    // },
    updatePaid(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          console.log(response);
          this.pushMessageState(response, '付款狀態更新');
        //   this.getOrders();
        }
      });
    },
    openModal(item) {
      console.log('open modal');
      this.tempOrder = { ...item };
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDeleteModal(item) {
      console.log('open delete modal');
      this.tempOrder = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },
    deleteOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(api)
        .then((response) => {
          this.isLoading = false;
          const deleteComponent = this.$refs.deleteModal;
          deleteComponent.hideModal();
          console.log(response.data.success);
          this.pushMessageState(response, '刪除訂單');
          // this.getProducts();
        });
    },
  },
  created() {
    // this.getOrders();
  },
};
</script>
