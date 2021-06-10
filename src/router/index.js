import { createRouter, createWebHistory } from 'vue-router'


const routes = [

{
 path: '/catalog',
 component: () => import('../views/Catalog.vue'),
 children: [
   {
     path: ':category',
     component: () => import('../views/catalog/Model.vue'),
    
   }
 ]
},
{
  path: '/basket',
  component: () => import('../views/Basket.vue')
  
},
{
  path: '/authorization',
  component: () => import('../views/Authorization.vue')
  
},
{
  path: '/:pathMatch(.*)*',//если маршрут ни один не найдет то выйдет NotFound
  redirect: '/404'// переадресация
  // component: () => import('../views/NotFound.vue')
},
{
path: '/404',
component: () => import('../views/NotFound.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
