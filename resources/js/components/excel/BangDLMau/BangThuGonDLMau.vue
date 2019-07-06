<template>
  <Handsontable
    v-if="data.length"
    :key="keyHotTable"
    :changeTable="data"
    :colWidths="colWidths"
    :colHeaders="colHeaders"
    :hiddenRows="0"
    :columns="columns"
    :width="'100%'"
  ></Handsontable>
</template>
<script>
export default{
  data(){
    return {
      data: [],
      id: 60,
      keyHotTable: 0,
      colWidths: [
        210, 150, 100, 100, 100,
        100, 100, 110, 100, 100,
        100, 100, 100, 110, 100,
        100,
        // Nhà cc và Giá gốc (giá nhập)
        100,100,
        100,100,
        100,100,
        100,100,
        100,100,
        // other
        100, 100, 100, 100, 100
      ],
      colHeaders: false,
      columns: false,
      baseURL: "/api/excel/data",
    }
  },//data
  mounted() {
    this.fetchData()
  },
  methods:{
    async fetchData(){
      let id = this.id
      return await axios.post(this.baseURL, {id}).then( response => {
        let data = JSON.parse(response.data.json)
        this.handleData(data)
      }).catch( err => console.error(err))
    },
    handleData(data){
      let getData = data.data
      let getHeaders = data.headers
      let colHeaders = getHeaders.colHeaders
      let columns = []
      getData.forEach( item => {
        item.forEach( (itemChild, index) => {
          if(
            index == 16 ||
            index == 20 ||
            index == 24 ||
            index == 28 ||
            index == 32
          ){
            item[index] = `<a target="_blank" href="${item[index+1]}">${item[index]}</a>`
          }
          if(
            index == 19 ||
            index == 23 ||
            index == 27 ||
            index == 31 ||
            index == 35
          ){
            item[index] = `${item[index-1]}(${item[index]})`
          }
        })
        item.splice(17, 2)
        item.splice(19, 2)
        item.splice(21, 2)
        item.splice(23, 2)
        item.splice(25, 2)
        return item
      })
      //  handle: header and widths
      colHeaders.splice(17, 2)
      colHeaders.splice(19, 2)
      colHeaders.splice(21, 2)
      colHeaders.splice(23, 2)
      colHeaders.splice(25, 2)

      for (let i = 0; i < colHeaders.length; i++) {
        if(
          i == 16 ||
          i == 18 ||
          i == 20 ||
          i == 22 ||
          i == 24
        ){
          columns.push({
            renderer: "html"
          })
        }
        else{
          columns.push({})
        }
      }

      // set header again
      colHeaders[17] =  colHeaders[19] =  colHeaders[21] =  colHeaders[23] =  colHeaders[25] = 'Giá gốc<br>(giá nhập)'
      this.setData(getData, colHeaders, columns)
    },

    /**
     * set data in handsontable
     *
     * @return void
     */
    setData(data, colHeaders = false, columns = false){
      if(colHeaders) this.colHeaders = colHeaders
      if(columns) this.columns = columns
      this.keyHotTable += 1
      return this.data = data
    },

  },//methods
}
</script>
