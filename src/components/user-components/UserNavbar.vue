<template>
  <nav
    class="navbar navbar-expand-md fixed-top"
    :class="navbarClass"
    ref="navbar"
    style="transition: all 1s"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand hvr-grow p-0">
        <h1>
          <img :src="require(`../../assets/images/${logoUrl}`)"
            alt="野生廚房 logo"
            style="height: 40px"
          />
        </h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-3">
            <router-link
              to="/user/products"
              class="nav-link fs-6"
              :class="navLinksClass"
              @click.prevent="setCategory('all'), closeCollapse()"
              active
              >商品列表
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              to="/user/about"
              class="nav-link fs-6"
              :class="navLinksClass"
              @click.prevent="closeCollapse"
              >關於我們
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link
              to="/user/ordersearch"
              class="nav-link fs-6"
              :class="navLinksClass"
              @click.prevent="closeCollapse"
              >查詢訂單
            </router-link>
          </li>
          <li class="nav-item mx-3">
            <button
              class="nav-link fs-6 position-relative"
              @click.prevent="openOffcanvas, closeCollapse()"
              :class="navLinksClass"
              :disabled="isLoading"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <i class="bi bi-cart3"></i>
              <span
                v-if="currentCart.carts.length > 0"
                class="badge rounded-pill bg-warning text-dark
                position-absolute top-25 start-md-100 translate-middle"
              >
                {{ currentCart.carts.length }}</span
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <CartOffcanvas ref="cartOffcanvas" />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import productsStore from '@/stores/productsStore';
import statusStore from '@/stores/statusStore';
import Collapse from 'bootstrap/js/dist/collapse';
import CartOffcanvas from './CartOffcanvas.vue';

export default {
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(productsStore, ['favProducts']),
    ...mapState(statusStore, ['isLoading']),
  },
  components: {
    CartOffcanvas,
  },
  watch: {
    cart() {
      this.currentCart = this.cart;
    },
  },
  data() {
    return {
      collapse: {},
      screenWidth: 0,
      logoUrl: 'logos/logo-white.png',
      navbarClass: {
        'bg-transparent': true,
        'bg-white': false,
      },
      navLinksClass: {
        'text-white': true,
        'text-dark': false,
      },
      activeLinkClass: {
        'border-bottom': false,
        'border-3': true,
      },
      collapseOpen: false,
      currentCart: {},
    };
  },
  methods: {
    ...mapActions(productsStore, ['setCategory']),
    ...mapActions(cartStore, ['getCart']),

    changeNavBg() {
      const scrollValue = window.scrollY;
      if (this.collapseOpen === true || scrollValue > 100) {
        this.logoUrl = 'logos/logo-black.png';
        this.navbarClass = { 'bg-transparent': false, 'bg-white': true };
        this.navLinksClass = { 'text-white': false, 'text-dark': true };
      } else if (this.collapseOpen === false && scrollValue <= 100) {
        this.logoUrl = 'logos/logo-white.png';
        this.navbarClass = { 'bg-transparent': true, 'bg-white': false };
        this.navLinksClass = { 'text-white': true, 'text-dark': false };
      }
    },
    openOffcanvas() {
      const offcanvasComponent = this.$refs.cartOffcanvas;
      offcanvasComponent.showOffcanvas();
    },
    closeCollapse() {
      this.collapse.hide();
    },
    onScreenResize() {
      window.addEventListener('resize', () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth >= 768) {
        this.collapse.hide();
        this.collapseOpen = false;
        this.changeNavBg();
      } else if (this.screenWidth < 768) {
        this.updateCollapseState();
      }
    },
    updateCollapseState() {
      const { navbarCollapse } = this.$refs;
      if (navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', () => {
          this.collapseOpen = true;
          this.changeNavBg();
        });
        navbarCollapse.addEventListener('shown.bs.collapse', () => {
          this.collapseOpen = true;
          this.changeNavBg();
        });
        navbarCollapse.addEventListener('hide.bs.collapse', () => {
          this.collapseOpen = false;
          this.changeNavBg();
        });
        navbarCollapse.addEventListener('hidden.bs.collapse', () => {
          this.collapseOpen = false;
          this.changeNavBg();
        });
      }
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.navbarCollapse, { toggle: false });
    window.addEventListener('scroll', this.changeNavBg);
    this.updateScreenWidth();
    this.onScreenResize();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.changeNavBg);
  },
  created() {
    if (localStorage.getItem('cart') !== null) {
      this.currentCart = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.currentCart = { carts: [] };
    }
  },
};
</script>
