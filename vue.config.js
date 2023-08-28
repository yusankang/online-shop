const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: '/online-shop/dist/',
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
      }));
  },
};
