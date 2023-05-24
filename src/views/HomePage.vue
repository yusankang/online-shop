<template>
<Navbar></Navbar>
  <header class="header-img d-flex align-items-center justify-content-center">
    <h2 class="text-white text-center display-6">Wilderness kitchen<br>
      在大自然中享受美食</h2> -->
  </header>
<!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/images/layout-images/homepage-image-crop.jpg"
        class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/layout-images/homepage-image-crop.jpg"
        class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/layout-images/homepage-image-crop.jpg"
        class="d-block w-100" alt="...">
    </div>
  </div>
</div> -->

  <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur voluptate quaerat nihil explicabo provident
      nostrum fugit vitae ab pariatur id a ex perferendis
      adipisci praesentium labore atque quasi delectus,
      eius ratione. Dolorum, soluta cumque accusamus ipsa
      nobis amet totam magni impedit ab quidem at fugiat
      quos? Laudantium, laboriosam. Saepe cumque ipsam
      rror debitis in velit nostrum earum aut assumenda?
      Illum quidem hic nesciunt, recusandae unde exercitationem
      nobis magni! Exercitationem repellat perspiciatis libero! Modi
      quis id ipsum laudantium repellendus omnis ab magni
      commodi, corporis quia illo deleniti iure natus
      recusandae sed nulla quam sapiente. Vel, quidem odit
      similique quaerat eum autem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur voluptate quaerat nihil explicabo provident
      nostrum fugit vitae ab pariatur id a ex perferendis
      adipisci praesentium labore atque quasi delectus,
      eius ratione. Dolorum, soluta cumque accusamus ipsa
      nobis amet totam magni impedit ab quidem at fugiat
      quos? Laudantium, laboriosam. Saepe cumque ipsam
      rror debitis in velit nostrum earum aut assumenda?
      Illum quidem hic nesciunt, recusandae unde exercitationem
      nobis magni! Exercitationem repellat perspiciatis libero! Modi
      quis id ipsum laudantium repellendus omnis ab magni
      commodi, corporis quia illo deleniti iure natus
      recusandae sed nulla quam sapiente. Vel, quidem odit
      similique quaerat eum autem.</p>

  </section>

</template>

<script>
import Navbar from '../components/UserNavbar.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,

  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
