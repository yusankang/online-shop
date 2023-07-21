<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div style="background-color: rgba(42,62,51,.8); min-height: 100vh;">
      <Form class="row justify-content-center pt-5 m-0"
      v-slot="{ errors }"
        @submit="signIn(user)">
        <div class="col-md-6">
            <h1 class="h3 mb-3 text-white">管理員請先登入</h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only w-100 text-white">Email address</label>
              <Field type="email" id="email" class="form-control"
                placeholder="Email address" name="email"
                :class="{ 'is-invalid' : errors['email'] }"
                rules="email|required"
                v-model="user.username"
                @focus="clearMessage"></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="sr-only w-100 text-white">登入密碼</label>
              <Field type="password" id="password" class="form-control"
                placeholder="Password" name="密碼"
                rules="required"
                :class="{ 'is-invalid' : errors['密碼'] }"
                v-model="user.password"
                @focus="clearMessage"></Field>
                <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
            </div>
            <div v-if="message" class="text-warning">
              {{ message }}
            </div>
            <div class="text-end mt-4">
              <button class="btn btn-warning px-4">登入</button>
            </div>
        </div>
       </Form>
</div>
</template>

<script>

export default {

  data() {
    return {
      isLoading: false,
      message: '',
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn(user) {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, user).then((response) => {
        const { message } = response.data;
        this.isLoading = false;
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/dashboard/products');
        } else if (!response.data.success) {
          this.message = message;
        }
      });
    },
    clearMessage() {
      console.log('hello');
      this.message = '';
    },
  },
};
</script>
