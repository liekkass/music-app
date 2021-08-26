import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Search from '@/views/search'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'
import SingerDetail from '@/views/singer-detail'
import Album from '@/views/album'
import TopDetail from '@/views/top-detail'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      hidden: true,
      title: '音乐播放器'
    },
    children: [
      {
        path: ':id',
        component: Album
      }
    ]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: TopDetail
      }
    ]
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
