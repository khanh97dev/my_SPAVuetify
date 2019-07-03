<template>
	<VSwitch label="Ẩn Cột Không Cần Thiết" v-model="model" color="blue darken-1"></VSwitch>
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

