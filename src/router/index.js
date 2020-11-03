import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import( '../views/Product.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import( '../views/Support.vue')
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: () => import( '../views/Auth/Signin.vue')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: () => import( '../views/Auth/Signup.vue')
  }, 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import( '../views/Account/Dashboard.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import( '../views/Account/Account.vue')
  },
  {
    path: '/account/affiliate/earnings',
    name: 'Earning',
    component: () => import( '../views/Account/Earning.vue')
  },
  {
    path: '/account/yourinfo',
    name: 'YourInfo',
    component: () => import( '../views/Account/YourInfo.vue')
  },
  {
    path: '/account/orderhistory',
    name: 'OrderHistory',
    component: () => import( '../views/Account/OrderHistory.vue')
  },
  {
    path: '/account/managepayment',
    name: 'ManagePayment',
    component: () => import( '../views/Account/ManagePayment.vue')
  },
  {
    path: '/account/servicessubscription',
    name: 'ServicesSubscription',
    component: () => import( '../views/Account/ServicesSubscription.vue')
  },
  {
    path: '/account/subscribeproduct',
    name: 'SubscribeProduct',
    component: () => import( '../views/Account/SubscribeProduct.vue')
  },
  {
    path: '/account/mycompanies',
    name: 'MyCompanies',
    component: () => import( '../views/Account/MyCompanies.vue')
  }
 
 

]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
