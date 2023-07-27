<template>
    <header class="about-header header-img mb-5 d-flex align-items-center">
        <div class="row d-flex align-items-center pt-5 w-100">
            <div class="col-md-6 text-center text-md-end px-4">
                <h2 class="text-white permanent-marker display-3 mb-3">
                    About<br>Wilderness<br>Kitchen
                </h2>
            </div>
            <div class="col-md-6 text-center text-md-start">
                <div class="text-white px-4">
                    <p>關於我們</p>
                    <p style="font-size: 14px;">
                        野生廚房創辦人來自紐西蘭<br>
                        品牌概念結合了紐西蘭戶外生活美學和對於廚藝的熱愛<br>
                        一邊望著星空和家人圍繞著營火烤棉花糖<br>
                        或在大草原中和朋友享用野餐<br>
                        在大自然自己親手下廚是生活中一定要體驗的享受<br>
                        無論是露營、BBQ還是戶外聚餐<br>
                        野生廚房是你的好夥伴
                    </p>
                </div>
            </div>
        </div>
  </header>
    <section class="container">
        <div class="row d-flex align-items-center gy-3">
            <div class="col-md-6">
                <div class="mx-4">
                    <h5 class="text-white">聯絡我們</h5>
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
                            <td class="text-white">Mega City 板橋大遠百<br>新北市板橋區新展露28號</td>
                        </tr>
                    </table>
                </div>
                <ContactForm></ContactForm>
            </div>
            <div class="col-md-6">
                <div class="mx-4">
                    <GoogleMaps></GoogleMaps>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import GoogleMaps from '../components/GoogleMaps.vue';

export default {
  components: {
    GoogleMaps,
    ContactForm,
  },
};
</script>
