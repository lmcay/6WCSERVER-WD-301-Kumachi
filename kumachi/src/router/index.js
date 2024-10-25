import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import Featured from '../components/Featured.vue'
import Contact from '../components/Contact.vue'
import Confirmation from '@/components/Confirmation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: `Kumachi Coffee and Pastries | Home` }
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    meta: {title: `Kumachi Coffee and Pastries | Products`}

  },
  {
    path: '/featured',
    name: 'featured',
    component: Featured,
    meta: {title: `Kumachi Coffee and Pastries | Featured`}
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {title: `Kumachi Coffee and Pastries | Contact`}
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation,
    meta: {title: `Kumachi Coffee and Pastries | Order Confirmation`}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
  
})

router.beforeEach((to, from, next) => {
  document.title = 
  to.meta.title || "Kumachi Coffee and Pastries";
  next();
});


export default router
