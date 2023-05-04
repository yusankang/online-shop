<template>
    <Navbar></Navbar>
    <div class="container-fluid">
        <router-view/>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Navbar from '../components/NavbarComponent.vue';

export default {
  components: {
    Navbar,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((result) => {
      if (!result.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
