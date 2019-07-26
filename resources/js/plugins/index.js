import Vue from 'vue'
import './axios'
import './notification'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);