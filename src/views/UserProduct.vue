<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="pt-5">
    <div class="container py-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/user/products">商品列表</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
        </nav>
        <!-- product image carousel-->
        <div class="row mb-4 gy-4">
          <div class="col-md-7 d-flex align-items-center">
            <Carousel :product="product"></Carousel>
          </div>

          <!-- product add to cart -->
          <div class="col-md-5">
            <div class="card">
                <div class="card-body">
                  <h2 class="card-title mb-3">{{product.title}}</h2>
                    <div class="h5 card-text" v-if="!product.price">{{product.origin_price}} 元</div>
                    <del class="h6 card-text"
                      v-if="product.price !== product.origin_price">
                      原價 ${{$filters.currency(product.origin_price)}}
                    </del>
                    <p class="h5 card-text mb-3" v-if="product.price">
                      <span v-if="product.price !== product.origin_price">現在只要</span>
                      ${{$filters.currency(product.price)}}
                    </p>
                    <div class="mb-3">
                        <label for="qty" class="input-group">
                            <button class="btn btn-outline-warning" type="button"
                              @click.prevent="subtractQty">
                              <i class="bi bi-dash"></i>
                            </button>
                            <input type="text" id="qty" class="form-control"
                              min="1" v-model.number="qty"
                              onfocus="this.blur()"
                              @change="inputNumValidation()">
                            <button class="btn btn-outline-warning" type="button"
                              @click.prevent="addQty">
                              <i class="bi bi-plus"></i>
                            </button>
                        </label>
                        <span v-if="message" class="text-danger">
                          {{message}}{{product.unit}}
                        </span>

                    </div>
                      <div class="d-grid">
                        <button type="button"
                            class="btn btn-warning"
                            @click="addCart(product.id, qty)"
                            :disabled="cartLoadingItem === product.id || disabled">
                            <div class="spinner-grow spinner-grow-sm text-dander"
                            role="status"
                            v-if="cartLoadingItem === product.id">
                                <span class="visually-hidden">Loading...</span>
                            </div>加到購物
                        </button>
                      </div>
                </div>
            </div>
          </div>
        </div>

       <!-- product description -->
        <article class="row">
          <div class="col-lg-7 text-white">
            <p class="mb-3">{{ product.description }}</p>
            <p class="mb-3">{{ product.content }}</p>
          </div>
        </article>
    </div>

     <!-- product recommendation -->
    <section>
      <h2 class="text-white mb-4 text-center">其他人也看過</h2>
      <SwiperSlider :category="'other'" @productId="checkProduct"></SwiperSlider>
      <div class="d-flex justify-content-end">
        <router-link to="/user/products" class="btn btn-outline-light btn-sm me-5">看更多</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import productStore from '@/stores/productsStore';
import statusStore from '@/stores/statusStore';
import Carousel from '../components/CarouselComponent.vue';
import SwiperSlider from '../components/SwiperSlider.vue';

export default {
  components: {
    Carousel,
    SwiperSlider,
  },
  computed: {
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
    ...mapState(productStore, ['product']),
  },
  data() {
    return {
      id: '',
      qty: 1,
      message: '',
      disabled: false,
      swiperOptions: {
        slidesPerView: 1,
        pagination: {
          dynamicBullets: true,
        },
      },
    };
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    ...mapActions(productStore, ['getProduct', 'scrollToTop']),
    checkProduct(productId) {
      if (this.id !== productId) {
        this.getProduct(productId);
        this.scrollToTop();
      }
    },
    addQty() {
      this.message = '';
      if (this.qty >= 1 && this.qty < 20) {
        this.qty += 1;
      } else if (this.qty === 20) {
        this.message = '最多數量限20';
      }
    },
    subtractQty() {
      this.message = '';
      if (this.qty > 1 && this.qty <= 20) {
        this.qty -= 1;
      } else if (this.qty === 1) {
        this.message = '最少數量限1';
      }
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct(this.id);
    this.scrollToTop();
  },
};
</script>
