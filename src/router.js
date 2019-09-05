import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Starship from './views/Starship.vue'
import starshipDetails from './views/starshipDetails.vue'
import Planet from './views/Planet.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/starship',
      name: 'starship',
      component: Starship
    },
    {
      path: '/starship-details',
      name: 'starship-details',
      component: starshipDetails
    },
    {
      path: '/character',
      name: 'character',
      component: () => import('./views/Character.vue')
    },
    {
      path: '/character-details',
      name: 'character-details',
      component: () => import('./views/characterDetails.vue')
    },
    {
      path: '/planet',
      name: 'planet',
      component: Planet
    },
    {
      path: '/planet-details',
      name: 'planet-details',
      component: () => import('./views/planetDetails.vue')
    },
  ]
})
