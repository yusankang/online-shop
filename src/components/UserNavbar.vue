<template>
    <nav class="navbar navbar-expand-lg fixed-top"
        :class="`${navbar.bgColor}`">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <h1>
                    <img src="../assets/images/logos/logo-white.png" alt="野生廚房"
                        style="height: 80px">
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
                        <a class="nav-link text-white fs-6" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link text-white fs-6" href="#">商品列表</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link text-white fs-6" href="#">野生菜單</a>
                    </li>
                    <li class="nav-item mx-3">
                        <button class="nav-link text-white fs-6">
                            <i class="bi bi-suit-heart"></i>
                        </button>
                    </li>
                    <li class="nav-item mx-3">
                        <button class="nav-link text-white fs-6">
                            <i class="bi bi-cart3"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navbar: {
        bgColor: 'bg-transparent',
        opacity: 'opacity-75',
      },
      navLinks: {
        textColor: 'text-white',
      },
    };
  },
  methods: {
    changeNavBg() {
      const scrollValue = window.scrollY;
      console.log(scrollValue);
      if (scrollValue > 200) {
        this.bgTransparent = 'bg-white';
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
