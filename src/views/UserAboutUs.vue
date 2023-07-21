<template>
    <header class="about-header header-img mb-5 d-flex align-items-center">
        <div class="row d-flex align-items-center">
            <div class="col-md-6 text-center text-md-end p-4">
                <h2 class="text-white permanent-marker display-3">
                    About Wilderness Kitchen
                </h2>
            </div>
            <div class="col-md-6 text-center text-md-start">
                <div class="bg-none text-white p-4">
                    <p>關於我們</p>
                    <p>Lorem ipsum dolor sit amet consectetur nulla<br>
                    adipisicing elit. Amet cumque tenetur laudantium<br>
                    consequatur commodi id eius, eligendi omnis? Alias, nulla.<br>
                    Adipisicing elit. Amet cumque tenetur laudantium.
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
