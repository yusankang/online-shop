<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true"
      ref="modal" data-bs-backdrop="static" data-bs-keyboard="false">
    <Form class="modal-dialog modal-xl" role="document" ref="productForm"
      v-slot="{ errors }"
      @submit="reset(), $emit('update-product', tempProduct), $emit('hideProductModal')">
      <div class="modal-content border-0">
        <div class="modal-header bg-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"
            @click="reset()">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <p class="mb-2">商品圖檔</p>
              <div class="mb-3">
                <label for="mainImage" class="btn btn-outline-warning form-label w-100">
                  <div class="spinner-grow spinner-grow-sm text-dander"
                    role="status"
                    v-if="uploadingFile && fileType === 'main'">
                    <span class="visually-hidden">Loading...</span>
                  </div>上傳主要圖片
                </label>
                <input type="file" id="mainImage" name="file-to-upload"
                  class="form-control" ref="mainImageFileInput"
                  accept="image/*" placeholder="choose file"
                  style="display:none;"
                  @change="uploadFile('main')"/>
              </div>
              <img class="mb-3 img-thumbnail"
                v-if="tempProduct.imageUrl"
                style="max-height: 120px; max-width: 120px; object-fit: cover;"
                :src="tempProduct.imageUrl"
                alt="product image"/>

              <!-- secondary images -->
              <div class="mb-3">
                <label for="secondaryImages" class="btn btn-outline-warning form-label w-100">
                  <div class="spinner-grow spinner-grow-sm text-dander"
                    role="status"
                    v-if="uploadingFile && fileType === 'secondary'">
                    <span class="visually-hidden">Loading...</span>
                  </div>上傳次要圖片（限2張）
                </label>
                <input type="file" id="secondaryImages" name="file-to-upload"
                  class="form-control" ref="secondaryImagesFileInput"
                  accept="image/*" style="display:none;"
                  @change="uploadFile('secondary')"/>
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
            </div>

            <!-- product info -->
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                  <Field type="text" name="標題" class="form-control"
                    id="title" placeholder="請輸入標題"
                    rules="required"
                    :class="{ 'is-invalid' : errors['標題'] }"
                    v-model="tempProduct.title"></Field>
                  <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                    <Field as="select" class="form-select"
                      aria-label="product cateogry select"
                      id="category" name="分類"
                      :class="{ 'is-invalid': errors['分類'] }"
                      rules="required"
                      v-model="tempProduct.category">
                      <option selected disabled>請選分類</option>
                      <option value="廚具">廚具</option>
                      <option value="咖啡">咖啡</option>
                      <option value="野餐">野餐</option>
                    </Field>
                    <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                    <Field as="select" class="form-select"
                      aria-label="product cateogry select"
                      id="category" name="單位"
                      :class="{ 'is-invalid': errors['單位'] }"
                      rules="required"
                      v-model="tempProduct.unit">
                      <option selected disabled>請選商品單位</option>
                      <option value="件">件</option>
                      <option value="組">組</option>
                    </Field>
                    <ErrorMessage name="單位" class="invalid-feedback"></ErrorMessage>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                    <Field type="number" class="form-control"
                      id="origin_price" placeholder="請輸入原價"
                      name="原價"
                      :class="{ 'is-invalid': errors['原價'] }"
                      rules="required"
                      v-model.number="tempProduct.origin_price">
                    </Field>
                    <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                    <Field type="number" name="售價"
                      class="form-control"
                      id="price" placeholder="請輸入售價"
                      :class="{ 'is-invalid': errors['售價'] }"
                      rules="required"
                      v-model.number="tempProduct.price">
                    </Field>
                    <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label w-100">產品描述</label>
                <textarea type="text" class="form-control"
                  id="description" placeholder="請輸入產品描述"
                  v-model="tempProduct.description">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label w-100">說明內容</label>
                <textarea type="text" class="form-control"
                  id="content" placeholder="請輸入產品說明內容"
                  v-model="tempProduct.content">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                  <input class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger"
            data-bs-dismiss="modal" @click="reset()">取消
          </button>
          <button class="btn btn-secondary">確認</button>
        </div>
      </div>
    </Form>
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
      } else if (this.tempProduct.imagesUrl) {
        this.secondaryImages = true;
      }
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      modal: {},
      tempProduct: {},
      secondaryImages: false,
      uploadingFile: false,
      fileType: '',
    };
  },
  methods: {
    uploadFile(type) {
      this.fileType = type;
      const uploadedFile = type === 'main' ? this.$refs.mainImageFileInput.files[0] : this.$refs.secondaryImagesFileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.uploadingFile = true;
      this.$http.post(api, formData).then((response) => {
        this.uploadingFile = false;
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
    reset() {
      this.$refs.productForm.resetForm();
    },
  },
};
</script>
