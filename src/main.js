import { createApp, markRaw } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'hover.css/css/hover.css';
import { register } from 'swiper/element/bundle';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
pinia.use(({ store }) => {
  // eslint-disable-next-line no-param-reassign
  store.router = markRaw(router);
});
app.use(pinia);
app.use(VueAxios, axios);
app.use(register);
app.component('LoadingOverlay', Loading);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.mount('#app');
