<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<Navbar></Navbar>
  <div class="pt-5">
    <div class="container py-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/user/products">商品列表</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
        </nav>
        <!-- product image carousel-->
        <div class="row mb-4 gy-4">
          <div class="col-md-7 d-flex align-items-center" style="height: 400px; overflow: hidden;">
            <Carousel :product="product"></Carousel>
          </div>

          <!-- product add to cart -->
          <div class="col-md-5">
            <div class="card">
                <div class="card-body">
                  <h2 class="card-title mb-3">{{product.title}}</h2>
                    <div class="h5 card-text" v-if="!product.price">{{product.origin_price}} 元</div>
                    <del class="h6 card-text"
                      v-if="product.price">原價 ${{$filters.currency(product.origin_price)}}</del>
                      <div class="d-flex justify-content-between align-items-center mb-5">
                        <p class="h5 card-text m-0"
                          v-if="product.price">現在只要 ${{$filters.currency(product.price)}}</p>
                        <a href="#"><i class="bi bi-suit-heart"></i></a>
                      </div>

                    <div class="mb-4">
                        <label for="qty" class="w-100">
                            <input type="number" id="qty" v-model="qty"
                              class="w-100">
                        </label>
                    </div>
                      <div class="d-grid">
                        <button type="button"
                            class="btn btn-warning"
                            @click="addCart(product.id)"
                            :disabled="this.status.loadingItem === product.id">
                            <div class="spinner-grow spinner-grow-sm text-dander"
                            role="status"
                            v-if="this.status.loadingItem === product.id">
                                <span class="visually-hidden">Loading...</span>
                            </div>加到購物
                        </button>
                      </div>
                </div>
            </div>
          </div>
        </div>

       <!-- product description -->
        <div class="row">
          <article class="col-lg-7 text-white">
            <div class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores odio omnis, earum praesentium molestiae sequi. Beatae porro dolorum
              consequatur delectus.</div>
            <div class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tenetur, possimus!</div>
          </article>
        </div>
    </div>

     <!-- product recommendation -->
    <section>
      <h2 class="text-white mb-4 text-center">其他人也看過</h2>
      <SwiperSlider></SwiperSlider>
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-light btn-sm me-5">看更多</button>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import pushMessageState from '@/methods/pushMessageState';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';
import Carousel from '../components/CarouselComponent.vue';
import SwiperSlider from '../components/SwiperSlider.vue';

export default {
  components: {
    Navbar,
    Footer,
    Carousel,
    SwiperSlider,
  },
  data() {
    return {
      isLoading: false,
      product: {},
      id: '',
      status: {
        loadingItem: '',
      },
      qty: 1,
      swiperOptions: {
        slidesPerView: 1,
        pagination: {
          dynamicBullets: true,
        },
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.product = response.data.product;
        console.log(this.product);
      });
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      cart.qty = this.qty;
      this.$http.post(api, { data: cart }).then((response) => {
        console.log(cart);
        this.status.loadingItem = '';
        pushMessageState(response, '加入購物車');
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
