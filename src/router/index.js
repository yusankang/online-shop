import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/user-views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin-views/LogIn.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/admin-views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin-views/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin-views/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/admin-views/CouponsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/user-views/UserboardView.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/user-views/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/user-views/UserProduct.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/user-views/UserCheckout.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/user-views/UserProductsList.vue'),
      },
      {
        path: 'orderform',
        component: () => import('../views/user-views/UserOrderForm.vue'),
      },
      {
        path: 'ordercomplete',
        name: 'orderComplete',
        component: () => import('../views/user-views/UserOrderComplete.vue'),
      },
      {
        path: 'ordersearch',
        component: () => import('../views/user-views/UserOrderSearch.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/user-views/UserAboutUs.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
