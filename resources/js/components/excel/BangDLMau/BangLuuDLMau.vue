<template>
  <div>

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
      }).catch(err => console.error(err) )
    },
  },
}
</script>