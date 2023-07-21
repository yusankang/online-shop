<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative">
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <Toast v-for="(msg, key) in messages" :key="key"
        :msg="msg"
      />
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import Toast from '@/components/ToastComponent.vue';
import statusStore from '@/stores/statusStore';

export default {
  components: { Toast },
  setup() {
    const status = statusStore();
    const { messages } = storeToRefs(status);

    return {
      messages,
    };
  },
  // data() {
  //   return {
  //     messages: [],
  //   };
  // },
  // inject: ['emitter'],
  // mounted() {
  //   this.emitter.on('push-message', (message) => {
  //     const { style = 'success', title, content } = message;
  //     this.messages.push({ style, title, content });
  //   });
  // },
};
</script>
