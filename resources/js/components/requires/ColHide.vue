<template>
  <v-combobox z-index="1000" v-model="getHideCol" :items="colFirst" label="Ẩn cột sản phẩm" multiple chips></v-combobox>
</template>
<script>
  export default {
    watch: {
      getHideCol(val) {
        var arr1 = this.colFirst;
        var arr2 = val;
        var results = [];
        arr1.forEach(function(val, index) {
          if (arr2.includes(val) && !results.includes(index)) results.push(index);
        });
        $hot.hotInstance.updateSettings({
          hiddenColumns: {
            columns: results,
            indicators: true
          }
        })
        return val;
      }
    },
    props: {
      colFirst: {
        default: () => []
      },
    },
  }
</script>