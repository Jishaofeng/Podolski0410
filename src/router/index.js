import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import teams from '@/components/teams'
import mine from '@/components/mine'
import news from '@/components/news'
import bobao from '@/components/bobao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/teams',
      name: 'teams',
      component: teams
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
