import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateForm from '@/views/CreateForm.vue'
import EditForm from '@/components/EditForm.vue'
import DetailForm from '@/views/DetailForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
       path: '/warranties/:id',
       name: 'detail',
       component: DetailForm
    },
    {
      path: '/create',
      name: 'create',
      component: CreateForm
    },
    {
    path: '/edit/:id',
    name: 'edit',
    component: EditForm
    }
  ]
})

export default router
