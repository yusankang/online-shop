<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單資料</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <h4 class="text-dark">用戶資料</h4>
                <table class="table">
                  <tbody v-if="tempOrder.user">
                    <tr>
                      <th>姓名</th>
                      <td>{{ tempOrder.user.name }}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{{ tempOrder.user.email }}</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>{{ tempOrder.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>地址</th>
                      <td>{{ tempOrder.user.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-5">
                <h4 class="text-dark">訂單細節</h4>
                <table class="table">
                  <tbody>
                    <tr>
                      <th width="100">訂單編號</th>
                      <td>{{ tempOrder.id }}</td>
                    </tr>
                    <tr>
                      <th>下單時間</th>
                      <td>{{ $filters.date(tempOrder.create_at) }}</td>
                    </tr>
                    <tr v-if="is_paid">
                      <th>付款時間</th>
                      <td>{{ $filters.date(tempOrder.paid_date) }}</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <strong v-if="is_paid" class="text-success">已付款</strong>
                        <span v-else class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>${{ $filters.currency(tempOrder.total) }} NTD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mb-3">
                <h4 class="text-dark">選購商品</h4>
                <table class="table">
                  <thead>
                    <th>商品</th>
                    <th>數量</th>
                    <th>編號</th>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr v-for="product in tempOrder.products" :key="product.id">
                      <td>{{ product.product.title }}</td>
                      <td>
                        {{ product.qty }} /
                        {{ product.product.unit }}
                      </td>
                      <td>{{ product.id }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
        >
            關閉
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  watch: {
    order() {
      this.tempOrder = this.order;
      this.is_paid = this.tempOrder.is_paid;
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      modal: {},
      tempOrder: {},
      is_paid: false,
    };
  },
};
</script>
