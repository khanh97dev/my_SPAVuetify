<template>
    <v-container>
	<v-flex xs12 sm6 d-flex>
	  <v-flex xs12 sm12>
	    <v-combobox
	      z-index="1000"
	      v-model="getHideCol"
	      :items="colFirst"
	      :label="label"
	      multiple
	      chips
	    ></v-combobox>
	  </v-flex>
	</v-flex>
	</v-container>
</template>
<script>
	export default{
		name: 'combobox',
		props: {
			getHideCol: [],
			colFirst: [],
			label: {
				default: 'Lọc cột sản phẩm'
			}
		}
	}
</script>