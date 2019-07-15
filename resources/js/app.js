import 'babel-polyfill'

import Vue from 'vue'
import axios from 'axios'
window.axios = axios; Vue.use(axios)
import Vuetify from 'vuetify'
import VuetifyToast from 'vuetify-toast-snackbar'

import router from '~/router/index'
import store from '~/store/index'
import App from '$comp/App'
import '~/plugins/index'
import './components/requires/index'

import { HotTable } from "@handsontable/vue";
Vue.component( 'HotTable', HotTable )
import Handsontable from "handsontable";
Vue.prototype.$Handsontable = Handsontable

// require('handsontable/dist/handsontable.full.css')
require('../style/style.css')

Vue.use(Vuetify)

Vue.use(VuetifyToast)

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
