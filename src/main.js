import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { register } from 'swiper/element/bundle';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';

library.add(fas);

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.use(VueAxios, axios);
app.use(register);
app.component('LoadingOverlay', Loading);
app.component('font-awesome-icon', FontAwesomeIcon);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.mount('#app');
