<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <Form v-slot="{ errors }" @submit="sendMessage"
        class="card border-0 mx-4" ref="contactForm">
        <div class="card-body">
            <div class="mb-2">
                <label for="email" class="form-label">Email</label>
                <Field type="email" class="form-control" name="email"
                    id="email" placeholder="請填寫Email"
                    :class="{ 'is-invalid': errors['email'] }"
                    rules="email|required"
                    v-model="contactForm.email">
                </Field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
                <label for="name" class="form-label">姓名</label>
                <Field type="text" class="form-control" name="姓名"
                    id="name" placeholder="請填寫姓名"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    rules="required"
                    v-model="contactForm.name">
                </Field>
                <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
                <label for="message" class="form-label">留言</label>
                <Field as="textarea" name="留言" id="message"
                    class="form-control" cols="30" rows="3"
                    :class="{ 'is-invalid': errors['留言'] }"
                    rules="required"
                    v-model="contactForm.message">
                </Field>
                <ErrorMessage name="留言" class="invalid-feedback"></ErrorMessage>
            </div>
            <button class="btn btn-sm btn-warning">送出</button>
        </div>
    </Form>
</template>

<script>
import { mapActions } from 'pinia';
import statusStore from '@/stores/statusStore';

export default {
  data() {
    return {
      contactForm: {
        email: '',
        name: '',
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),

    sendMessage() {
      this.pushMessage({ title: '留言已送出' });
      this.$refs.contactForm.resetForm();
    },
  },
};
</script>
