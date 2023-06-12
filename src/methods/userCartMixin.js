export default {
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.cart = (response.data.data);
        this.sendCart();
        console.log('step 1', this.isUseCoupon);
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((response) => {
        this.isLoading = false;
        this.status.loadingItem = '';
        this.pushMessageState(response, '購物車更新');
        this.getCart();
      });
    },
  },
};
