import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/TodaysRacing.vue')
    },
    {
      path: '/accountsummary',
      name: 'Account Summary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AccountSummary.vue')
    },
    {
      path: '/todaysracing',
      name: 'Todays Racing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/TodaysRacing.vue')
    }
    ,
    {
      path: '/messages',
      name: 'Messages',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Messages.vue')
    } ,
    {
      path: '/responsible',
      name: 'Responsible Gambling',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ResponsibleGambling.vue')
    },
    {
      path: '/betslip',
      name: 'Betslip',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BetSlip.vue')
    },
    {
      path: '/openbets',
      name: 'OpenBets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/OpenBets.vue')
    },
    {
      path: '/bethistory',
      name: 'OpenBets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/BetHistory.vue')
    },
    {
      path: '/deposit',
      name: 'Deposit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Deposit.vue')
    },
    {
      path: '/transactionhistory',
      name: 'TransactionHistory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/TransactionHistory.vue')
    }

  ]
})
