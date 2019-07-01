import Vue from 'vue'

let components = [
	'ButtonUpdate.vue',
	'HideColumns.vue',
	'VueUpload.vue'
]

components.forEach( item => {
	Vue.component(item.replace('.vue', ''), require(`./${item}`).default)
});