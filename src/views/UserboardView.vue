<template>
  <Navbar></Navbar>
  <div class="position-relative d-flex flex-column"
    style="background-color: rgba(42,62,51,.8); min-height: 100vh;">
    <ToastMessages></ToastMessages>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/UserNavbar.vue';
import Footer from '@/components/UserFooter.vue';

export default {
  components: {
    Navbar,
    Footer,
    ToastMessages,
  },
  created() {
  },
};
</script>
