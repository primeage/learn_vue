import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import home from '@/components/home'
import about from '@/components/about'
import user from '@/components/User'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'hello',
    // component: HelloWorld
    component: Hello,
    children: [
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/about',
        name: 'about',
        component: about
      },
      {
        path: '/user/:id',
        name: 'user',
        component: user
      }
    ]
  }
]

var routerExample = new Router(
  {
    routes: routes
  }
)

export default routerExample
