<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
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
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="products">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="orders">Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="coupons">Coupons</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">Log out</a>
                </li>
            </ul>
        </div>
  </div>
</nav>
</template>

<script>
export default {
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
            this.$router.push('./login');
          }
        });
    },
  },
};
</script>
