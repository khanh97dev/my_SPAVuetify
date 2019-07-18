<template>
  <div>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex>
          <v-card color="blue lighten-5" tile flat>
            <v-card-text>
              <v-combobox
                z-index="1000"
                v-model="getHideCol"
                :items="colFirst"
                label="Ẩn cột sản phẩm"
                multiple
                chips
              ></v-combobox>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex>
          <v-layout row>
            <v-card tile flat>
              <v-card-text>
                <ImportExcel @uploaded="uploaded"/>
              </v-card-text>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <VCard>
      <VCardText>
        <vContainer>
          <Handsontable
            :key="keyUpload"
            :changeTable="valUploaded"
            :columnHeaders="columnHeaders"
            :hideCol="hideCol"
            :colHeaders="colHeaders"
            :hiddenRows="false"
            :showReadOnly="false"
            :colWidths="colWidths"
            :title="'Báo cáo tồn kho'"
            @afterRemoveRow="afterRemoveRow"
          />
        </vContainer>
      </VCardText>
    </VCard>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    ImportExcel: require("./ImportExcel.vue").default
  },
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
  data: () => ({
    id: 2,
    keyUpload: 0,
    columnHeaders: true,
    colWidths: [300, 150, 150, 100 ],
    colHeaders: [],
    valUploaded: "",
    colFirst: [],
    getHideCol: [],
    hideCol: []
  }),
  computed: mapGetters({
    data: 'excel/data'
  }),
  mounted(){
    this.$store.dispatch('excel/fetchData', this.id).then( () => {
      this.commitHandsontable(this.data)
    })
  },
  methods: {
    uploaded(val) {
      this.commitHandsontable(null)
      val.splice(0, 6);
      val.forEach( item => {
        item.splice(0, 2)
        item.splice(2, 1)
        item.splice(2, 1)
        item.splice(2, 2)
        item.splice(item.length-1, 1)
        return item
      })
      setTimeout(() => {
        let data = {
          id: this.id,
          json: val,
          check_update: 1
        }
        this.$store.dispatch('excel/updateAndFetchData', data)
          .then( () => {
            this.commitHandsontable(this.data)
          })
          .catch( err => console.error(err))
      }, 100);
    },
    commitHandsontable(val){
      if(val){
        this.colFirst = this.colHeaders = [
          "Phiên bản",
          "SKU",
          "Tồn kho",
          "Giá trị TK"
        ];
      }
      this.valUploaded = val;
      this.keyUpload += 1;
    },
    afterRemoveRow(val){
      this.$toast.success('Thành công!', {
        queueable: true
      });
    }
  }
};
</script>