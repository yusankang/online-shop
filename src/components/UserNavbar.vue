<template>
    <nav class="navbar navbar-expand-lg fixed-top"
        :class="navbarClass"
        style="transition: all 1s;">
        <div class="container-fluid">
            <a href="#" class="navbar-brand hvr-grow">
                <h1>
                    <img :src="require(`../assets/images/${logoUrl}`)" alt="野生廚房"
                        style="height: 50px">
                </h1>
            </a>
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-3">
                        <router-link to="/" class="nav-link fs-6"
                          aria-current="page"
                          :class="navLinksClass">Home</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/user/products" class="nav-link fs-6"
                          :class="navLinksClass">商品列表</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/user/recipes" class="nav-link fs-6"
                          :class="navLinksClass">野生菜單</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/user/favorites" class="nav-link fs-6 hvr-bob"
                          :class="navLinksClass">
                            <i class="bi bi-suit-heart"></i>
                        </router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link to="/user/cart" class="nav-link fs-6 hvr-bob"
                          :class="navLinksClass">
                            <i class="bi bi-cart3"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
  .nav-item a { border-bottom: 3px solid transparent }
  .nav-item a:hover{ border-bottom: 3px solid };
</style>

<script>
export default {
  data() {
    return {
      logoUrl: 'logos/logo-white.png',
      navbarClass: {
        'bg-transparent': true,
        'bg-white': false,
      },
      navLinksClass: {
        'text-white': true,
        'text-dark': false,
      },
    };
  },
  methods: {
    changeNavBg() {
      const scrollValue = window.scrollY;
      if (scrollValue > 100) {
        this.logoUrl = 'logos/logo-black.png';
        this.navbarClass = { 'bg-transparent': false, 'bg-white': true };
        this.navLinksClass = { 'text-white': false, 'text-dark': true };
      } else {
        this.logoUrl = 'logos/logo-white.png';
        this.navbarClass = { 'bg-transparent': true, 'bg-white': false };
        this.navLinksClass = { 'text-white': true, 'text-dark': false };
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavBg);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.changeNavBg);
  },
};
</script>
