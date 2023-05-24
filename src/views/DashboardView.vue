<template>
    <Navbar></Navbar>
    <div class="container-fluid">
      <ToastMessages></ToastMessages>
      <router-view/>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import ToastMessages from '../components/ToastMessages.vue';
import Navbar from '../components/DashboardNavbar.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      pushMessageState,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((response) => {
      if (!response.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
