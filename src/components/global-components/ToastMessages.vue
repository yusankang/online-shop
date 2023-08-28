<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative">
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import statusStore from '@/stores/statusStore';
import Toast from './ToastComponent.vue';

export default {
  components: { Toast },
  setup() {
    const status = statusStore();
    const { messages } = storeToRefs(status);
    status.$reset();

    return {
      messages,
    };
  },
};
</script>
