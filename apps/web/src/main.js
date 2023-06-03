import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import Login from '@/pages/login';
import Home from '@/pages/home';
import Register from '@/pages/register'; 
import Welcome from '@/pages/welcome';
import AddProduct from '@/pages/product/add';
import ProductList from '@/pages/product/list';
import EditProduct from '@/pages/product/edit';
import ProductDetail from '@/pages/product/detail';
import store from '@/store';

const routes = [
  { path: '/', component: Welcome },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/product/add', component: AddProduct },
  { path: '/product/list', component: ProductList },
  { path: '/product/edit/:id', component: EditProduct },
  { path: '/product/detail/:id', component: ProductDetail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const whiteListPaths = [
  '/',
  '/login',
  '/register',
];

router.beforeEach(async (to, from, next) => {
  const loginUser = store.getters['user/userInfo'];
  const logged = !!loginUser?.id;

  // 跳转登录页时清空store
  if (logged) {
    if (to.path === '/login') {
      store.dispatch('user/logout');
      next();
    } else if (to.path === '/') {
      next('/home');
    } else {
      next();
    }
    return;
  }

  // 未登录时跳转到欢迎页
  if (!whiteListPaths.includes(to.path)) {
    next('/');
    return;
  }

  next();
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
