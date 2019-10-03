import Vue from 'vue'
import './axios'
import './notification'
import './progressbar'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';

// Vue ui (Element)
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/vi';
import locale from 'element-ui/lib/locale';
const ElementUI = require('element-ui');
// configure language
locale.use(lang);
// Init ElementUI components
Vue.use(ElementUI);

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);

// google analytic
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-145038313-1',
  autoTracking: {
    screenview: true
  }
})