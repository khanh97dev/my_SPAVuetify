<template>
	<VSwitch label="Ẩn cột:" v-model="model" color="blue darken-1"></VSwitch>
</template>
<script>
export default {
	watch: {
		model(val) {
			if(val === true){
				this.setColumnHide(this.columns)
			}else{
				this.setColumnHide([])
			}
			return val
		},
	},
	mounted () {
		this.setColumnHide(this.columns)
	},
	data() {
		return {
			model: true
		}
	},
	props: {
		columns: {
			default: () => []
		},
	},
	methods: {
		setColumnHide(val) {
			this.$emit('setColumnHide', val) 
		}
	},
}
</script>

