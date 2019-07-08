import Vue from 'vue'



let components = [
	'ButtonUpdate.vue',
	'HideColumns.vue',
	'VueUpload.vue',
  'DialogConfirmName.vue',
  'Handsontable.vue',
  'ButtonSpeedDials.vue',
  'BtnFixedUpdate.vue'
]

import Treeselect from '@riophae/vue-treeselect'
Vue.component('Treeselect', Treeselect)

components.forEach( item => {
	Vue.component(item.replace('.vue', ''), require(`./${item}`).default)
});

