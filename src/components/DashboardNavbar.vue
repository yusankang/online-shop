<template>
    <nav class="navbar navbar-expand-md"
      style="background-color: rgba(42,62,51,.8);">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>
                <img :src="require(`../assets/images/${logoUrl}`)" alt="野生廚房"
                    style="height: 40px">
            </h1>
          </a>
          <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav" ref="collapse">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#" @click.prevent="products('products')"
                        :class="{ active: activePage === 'products' }">商品列表
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#" @click.prevent="orders('orders')"
                        :class="{ active: activePage === 'orders' }">訂單列表
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#" @click.prevent="coupons('coupons')"
                        :class="{ active: activePage === 'coupons' }">優惠卷
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#" @click.prevent="logout">登出</a>
                  </li>
              </ul>
          </div>
    </div>
</nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';
import { mapState } from 'pinia';
import dashboardStore from '@/stores/dashboardStore';

export default {
  computed: {
    ...mapState(dashboardStore, ['activePage']),
  },
  data() {
    return {
      logoUrl: 'logos/logo-white.png',
    };
  },
  methods: {
    products() {
      this.$router.push('./products');
    },
    orders() {
      this.$router.push('./orders');
    },
    coupons() {
      this.$router.push('./coupons');
    },
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            this.$router.push({ name: 'login' });
          }
        })
        .catch((response) => {
          throw new Error(response.data.message);
        });
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse);
  },
};
</script>
