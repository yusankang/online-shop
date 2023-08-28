<template>
  <header class="about-header header-img d-flex align-items-center">
    <h2 class="text-white permanent-marker display-3 mb-3 text-center w-100">
      About Wilderness Kitchen
    </h2>
  </header>
  <section class="container">
    <div class="px-4 pt-5 pb-3 d-flex justify-content-center" style="font-size: 20px">
      <div class="text-white text-center">
        <p>野生廚房創辦人來自紐西蘭，品牌概念結合了紐西蘭戶外生活美學和對於廚藝的熱愛。</p>
        <p>一邊望著星空和家人圍繞著營火烤棉花糖，或在大草原中和朋友享用野餐 -</p>
        <p>
          在大自然自己親手下廚是生活中一定要體驗的享受，無論是露營、BBQ還是戶外聚餐，野生廚房是你的好夥伴。
        </p>
      </div>
    </div>
    <hr style="border-top: 2px solid white" />
    <div class="row d-flex align-items-center gy-3 mb-4">
      <div class="col-md-6">
        <div class="mx-4 mb-4">
          <h5 class="text-white my-4">聯絡我們</h5>
          <table class="table table-borderless text-white table-sm">
            <tr>
              <th><i class="bi bi-telephone-fill"></i></th>
              <td class="text-white">02 1234 5678</td>
            </tr>
            <tr>
              <th><i class="bi bi-envelope-fill"></i></th>
              <td class="text-white">info@wildkitchen.com.tw</td>
            </tr>
            <tr>
              <th><i class="bi bi-geo-alt-fill"></i></th>
              <td class="text-white">Mega City 板橋大遠百<br />新北市板橋區新展露28號</td>
            </tr>
          </table>
        </div>
        <ContactForm />
      </div>
      <div class="col-md-6">
        <div class="mx-4">
          <GoogleMaps />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '../../components/user-components/ContactForm.vue';
import GoogleMaps from '../../components/user-components/GoogleMaps.vue';

export default {
  components: {
    GoogleMaps,
    ContactForm,
  },
};
</script>
