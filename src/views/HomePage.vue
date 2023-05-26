<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
<Navbar></Navbar>
  <header class="header-img d-flex align-items-center justify-content-center mb-5">
    <div>
      <h2 class="text-white text-center display-6">Wilderness kitchen<br>
      在大自然中享受美食</h2>
      <div class="d-grid gap-2 col-5 mx-auto">
        <button class="btn btn-light"
          type="button">Start shopping</button>
      </div>
    </div>
  </header>
  <!-- <header class="header">
    <div class="header-text">
      <div>Wilderness Kitchen</div>
      <div><span>在大自然中享受美食</span></div>
    </div>
    <Carousel :images="this.images"></Carousel>
  </header> -->

  <section class="mb-5">
    <div class="my-5 container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem voluptate ipsa eligendi in illo repellendus eveniet
        suscipit blanditiis vero voluptatum. Quisquam, maxime culpa
        exercitationem suscipit mollitia delectus eum accusamus.
        Dolorum inventore dolore ut expedita quasi repellat, beatae
        natus excepturi doloremque ab aspernatur sit enim harum,
        alias praesentium saepe vel? Et.</p>
    </div>

    <div class="row my-4 g-0">
      <div class="col-12 col-md-6 product-menu"
        v-for="item in productMenu" :key="item.title">
        <div class="menu-item">
          <div class="menu-img">
            <img :src="require(`../assets/images/${item.imgUrl}`)"
            class="img-fluid" alt=""/>
            <span class="color-overlay"
              :style="`background-color: ${item.backgroundColor}`"></span>
          </div>
          <div class="menu-text d-flex align-items-center">
            <h5 class="m-0">{{item.title}}</h5>
            <i class="bi bi-arrow-right-short fs-3"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SwiperSlider></SwiperSlider>

<footer class="border-top my-5">
  <h2>This is the footer</h2>
</footer>

</template>

<script>
// import Carousel from '@/components/CarouselComponent.vue';
import Navbar from '../components/UserNavbar.vue';
import SwiperSlider from '../components/SwiperSlider.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    SwiperSlider,
  },
  mixins: [],
  data() {
    return {
      productMenu: [
        {
          title: '戶外廚具',
          imgUrl: 'layout-images/menu-image-cookware.jpg',
          height: 150,
          backgroundColor: 'rgba(42,62,51)',
        },
        {
          title: '戶外餐具',
          imgUrl: 'layout-images/menu-image-tableware.jpg',
          height: 150,
          backgroundColor: 'rgba(60,97,106)',
        },
        {
          title: '咖啡系列',
          imgUrl: 'layout-images/menu-image-coffee.jpg',
          height: 150,
          backgroundColor: 'rgba(111,66,37)',
        },
        {
          title: '野餐系列',
          imgUrl: 'layout-images/menu-image-picnic.jpg',
          height: 150,
          backgroundColor: 'rgba(188,121,53)',
        },
      ],

      images: [
        { imgUrl: 'layout-images/homepage-image-crop.jpg', height: 500 },
        { imgUrl: 'layout-images/homepage-image-coffee.jpg', height: 500 },
        { imgUrl: 'layout-images/homepage-image-picnic.jpg', height: 500 },
      ],
    };
  },
  methods: {
    carouselText() {
      console.log('hello text');
    },
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
