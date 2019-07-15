<template>
	<div>
		<VLayout wrap row>
			<VFlex>
				<VSwitch label="Bật Chỉnh Sửa:" v-model="model"></VSwitch>
			</VFlex>
			<VFlex v-if="model" mt-1>
				<VBtn color="success" @click="()=> { $emit('update') }" :loading="loading">Cập nhật</VBtn>
			</VFlex>
		</VLayout>
	</div>
</template>
<script>
export default {
	watch: {
		model(val) {
			$hot.hotInstance.updateSettings({
				readOnly: !val
			})
		},
	},
	data() {
		return {
			model: false
		}
	},
	props: {
		loading: {
			default: () => false
		},
	},
}
</script>