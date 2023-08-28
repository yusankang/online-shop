<template>
  <Navbar />
  <div
    class="position-relative d-flex flex-column"
    style="background-color: rgba(42, 62, 51, 0.8); min-height: 100vh"
  >
    <ToastMessages />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/user-components/UserNavbar.vue';
import Footer from '../../components/user-components/UserFooter.vue';
import ToastMessages from '../../components/global-components/ToastMessages.vue';

export default {
  components: {
    Navbar,
    Footer,
    ToastMessages,
  },
};
</script>
