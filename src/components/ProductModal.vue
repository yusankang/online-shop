<template>

<!-- Modal -->
  <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
  >
<!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                  >
                </label>
              </div>
              <div class="mb-3">
                <label for="mainImage" class="form-label">上傳主要圖片
                  <i class="fas fa-spinner fa-spin"></i>
                  <input
                    type="file"
                    id="mainImage"
                    name="file-to-upload"
                    class="form-control"
                    ref="mainImageFileInput"
                    @change="uploadFile('main')">
                </label>
              </div>
                <img class="mb-3 img-thumbnail"
                v-if="tempProduct.imageUrl"
                style="max-height: 120px; max-width: 120px; object-fit: cover;"
                :src="tempProduct.imageUrl"
                alt="product image"/>

              <!-- secondary images -->
              <div class="mb-3">
                <label for="secondaryImages" class="form-label">上傳次要圖片（限2張）
                  <i class="fas fa-spinner fa-spin"></i>
                  <input
                    type="file"
                    id="secondaryImages"
                    name="file-to-upload"
                    class="form-control"
                    ref="secondaryImagesFileInput"
                    @change="uploadFile('secondary')">
                </label>
              </div>
              <div class="d-flex flex-wrap"
                v-if="secondaryImages">
                <div v-for="(item, key) in tempProduct.imagesUrl" :key="key">
                  <img class="me-2 mb-3 img-thumbnail"
                    style="max-height: 120px; max-width: 120px; object-fit: cover;"
                    :src="item"
                    alt="product image"/>
                </div>
              </div>

              <div class="mt-5">
                <div class="mb-3 input-group" >
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                    v-model="tempImagesUrl"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  />
                </label>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </label>
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model.number="tempProduct.origin_price"
                    />
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model.number="tempProduct.price"
                    />
                  </label>
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </label>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </label>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      modal: {},
      tempProduct: {},
      secondaryImages: false,
    };
  },
  methods: {
    uploadFile(type) {
      const uploadedFile = type === 'main' ? this.$refs.mainImageFileInput.files[0] : this.$refs.secondaryImagesFileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((response) => {
        if (response.data.success) {
          if (type === 'main') {
            this.tempProduct.imageUrl = response.data.imageUrl;
          } else if (type === 'secondary') {
            this.secondaryImages = true;
            const secondaryImage = response.data.imageUrl;
            this.tempProduct.imagesUrl.push(secondaryImage);
            if (this.tempProduct.imagesUrl.length > 2) {
              this.tempProduct.imagesUrl.shift();
            }
          }
        }
      });
    },

    // uploadFile() {
    //   const uploadedFile = this.$refs.fileInput.files[0];
    //   const formData = new FormData();
    //   formData.append('file-to-upload', uploadedFile);
    //   const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
    //   this.$http.post(api, formData)
    //     .then((response) => {
    //       console.log(response.data);
    //       if (response.data.success) {
    //         this.tempProduct.imageUrl = response.data.imageUrl;
    //       }
    //     });
    // },
  },
};
</script>
