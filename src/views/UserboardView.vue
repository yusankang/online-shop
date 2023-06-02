<template>
    <div class="position-relative"
      style="background-color: rgba(42,62,51,.8)">
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
