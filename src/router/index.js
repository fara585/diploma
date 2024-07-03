import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/meal/:id',
      name: 'meal',
      component: () => import('@/pages/MealAboutPage.vue')
    },
    {
      path: '/category/:category',
      name: 'category',
      component: () => import("@/pages/CategoryPage.vue")
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('@/pages/FavouritePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 PageNotFound',
      component: () => import("@/pages/NotFoundPage.vue")
    },
    {
      path: '/foods',
      name: 'foods',
      component: () => import("@/views/foodsView/FoodsView.vue")
    },{
      path: '/products',
      name: 'products',
      component: () => import("@/components/cart/Cart.vue")
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import("@/pages/BasketPage.vue")
    },
  ]
})

export default router
