<template>
    <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">野生廚房</a>
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
  methods: {
  },
};
</script>
