import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '~/store/index'
import routes from './routes'
import { api } from '~/config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (store.getters['auth/token'] && !store.getters['auth/check']) {
    try {
      await store.dispatch('auth/fetchUser')
    } catch (e) {}
  }

  let route = reroute(to)
  if (route) {
    next(route)
  }
  else {
    next()
  }
})

const rules = {
  guest: { failToRouteName: 'Admin', check: () => (!store.getters['auth/check']) },
  auth: { failToRouteName: 'Login', check: () => (store.getters['auth/check']) }
}

function reroute(to) {
  let failRouteName = false,
      checkResult = false

  to.meta.rules && to.meta.rules.forEach(rule => {
    let check = false
    if (Array.isArray(rule)) {
      let checks = []
      for (let i in rule) {
        checks[i] = rules[rule[i]].check()
        check = check || checks[i]
      }
      if (!check && !failRouteName) {
        failRouteName = rules[rule[checks.indexOf(false)]].failToRouteName
      }
    }
    else {
      check = rules[rule].check()
      if (!check && !failRouteName) {
        failRouteName = rules[rule].failToRouteName
      }
    }

    checkResult = checkResult && check
  })

  if (!checkResult && failRouteName) {
    return { name: failRouteName }
  }

  return false
}

export default router
