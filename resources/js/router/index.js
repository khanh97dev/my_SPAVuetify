import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'vue-auto-routing'
import store from '~/store/index'
// import routes from './routes'
import { api } from '~/config'
const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  setTitle(to);

  let isAuth = to.path.match(/\/admin.*/g);
  let isGuest = to.path.match(/\/login.*|\/register.*/g);

  if (isGuest && store.getters['auth/token']) return next('/admin/');

  if (isAuth && !store.getters['auth/token']) {
    try {
      return await store.dispatch('auth/fetchUser')
        .then( status => {
          if(status) return next();
          next('/login');
        });
    } catch (e) {}
  } else {
    next();
  }


  // let route = reroute(to)
  // if (route) {
  //   next(route)
  // }
  // else {
  //   next()
  // }
});

function setTitle(to){
  document.title = to.name.replace('-', ' - ').toUpperCase();
}

// const rules = {
//   guest: { failToRouteName: 'Admin', check: () => (!store.getters['auth/check']) },
//   auth: { failToRouteName: 'Login', check: () => (store.getters['auth/check']) }
// }

// function reroute(to) {
//   let failRouteName = false,
//       checkResult = false

//   to.meta.rules && to.meta.rules.forEach(rule => {
//     let check = false
//     if (Array.isArray(rule)) {
//       let checks = []
//       for (let i in rule) {
//         checks[i] = rules[rule[i]].check()
//         check = check || checks[i]
//       }
//       if (!check && !failRouteName) {
//         failRouteName = rules[rule[checks.indexOf(false)]].failToRouteName
//       }
//     }
//     else {
//       check = rules[rule].check()
//       if (!check && !failRouteName) {
//         failRouteName = rules[rule].failToRouteName
//       }
//     }

//     checkResult = checkResult && check
//   })

//   if (!checkResult && failRouteName) {
//     return { name: failRouteName }
//   }

//   return false
// }

export default router
