<template>
<div>
  <treeselect
    v-model="value" :multiple="true" :options="data" match-keys="title"/>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      value: null,
      baseURL: '/api/filter-excel'
    }
  },
  mounted(){
    this.fetchListData().then(()=> this.$toast.success('success'))
  },
  methods: {
    async fetchListData() {
      return await axios.post(this.baseURL+'/listdata').then( response => {
        this.data = response.data
        console.log(this.data)
      }).catch(err => console.error(err) )
    },
  },
}
</script>