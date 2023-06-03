import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/LogIn.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/UserboardView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/UserProductsList.vue'),
      },
      {
        path: 'orderform',
        component: () => import('../views/UserOrderForm.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
