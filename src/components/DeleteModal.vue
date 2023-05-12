<template>
    <div class="modal" tabindex="-1" ref="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark text-white">
                <h5 class="modal-title">
                    <span v-if="deleteItem.title">刪除 {{deleteItem.title}}</span>
                    <span v-else>刪除訂單 {{deleteItem.id}}</span>
                </h5>
                <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <p v-if="deleteItem.title">確定要刪除 <strong>{{deleteItem.title}}</strong>?</p>
                <p v-else>確定要刪除訂單 <strong>{{deleteItem.id}}</strong>?</p>
                <p>刪除後將無法恢復</p>
            </div>
            <div class="modal-footer">
                <button type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >不刪除</button>
                <button type="button"
                    class="btn btn-danger"
                    @click="$emit('deleteItem')"
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
    deleteItem: {},
  },
};
</script>
