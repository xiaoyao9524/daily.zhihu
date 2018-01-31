import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// import VArticle from '@/components/article'

Vue.use(Router)

const home = resolve => {
  import('@/components/home').then((module) => {
    resolve(module)
  })
}

const VArticle = resolve => {
  import('@/components/article').then((module) => {
    resolve(module)
  })
}

const Theme = resolve => {
  import('@/components/theme').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/article',
      name: 'article',
      component: VArticle
    },
    {
      path: '/theme',
      name: 'theme',
      component: Theme
    }
  ]
})
