<template>
    <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title">
                    <span v-if="selectedItem.title">刪除 {{selectedItem.title}}</span>
                    <span v-if="!selectedItem.title && !selectedItem.product">
                        刪除訂單 {{selectedItem.id}}</span>
                    <span v-if="selectedItem.product">刪除品項 {{selectedItem.product.title}}</span>
                </h5>
                <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <p v-if="selectedItem.title">確定要刪除 <strong>{{selectedItem.title}}</strong>?</p>
                <p v-if="!selectedItem.title && !selectedItem.product">
                    確定要刪除訂單 <strong>{{selectedItem.id}}</strong>?</p>
                <p v-if="selectedItem.product">確定刪除品項
                    <strong>{{selectedItem.product.title}}</strong>?</p>
                <p>刪除後將無法恢復</p>
            </div>
            <div class="modal-footer">
                <button type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >不刪除</button>
                <button type="button"
                    class="btn btn-danger"
                    @click="$emit('deleteItem', selectedItem), $emit('hideDeleteModal')"
                >確定刪除</button>
            </div>
            </div>
        </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  mixins: [modalMixin],
  props: {
    selectedItem: {},
  },
};
</script>
