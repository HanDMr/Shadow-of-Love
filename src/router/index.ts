import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    children: [
      {
        path: '/tsStudy',
        name: 'tsStudy', 
        component: () => import('../views/tsStudy/index.vue'),
      },
      {
        path: '/toParams',
        name: 'toParams', 
        component: () => import('../views/toParams/index.vue'),
      },
      {
        path: '/myMap',
        name: 'myMap', 
        component: () => import('../views/myMap/index.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
