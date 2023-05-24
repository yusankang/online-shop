<template>
    <div class="position-relative">
      <ToastMessages></ToastMessages>
      <router-view/>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import pushMessageState from '@/methods/pushMessageState';

export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      pushMessageState,
    };
  },
  created() {
  },
};
</script>
