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
    <Handsontable
      :key="keyUpload"
      :changeTable="valUploaded"
      :columnHeaders="columnHeaders"
      :hideCol="hideCol"
      :colHeaders="colHeaders"
      :hiddenRows="false"
      :showReadOnly="false"
      :colWidths="colWidths"
      :title="'Báo cáo bán hàng'"
      @afterRemoveRow="afterRemoveRow"
    />
    <VSnackbar v-model="snackbar"
      color="success"
      top vertical
    >
      {{ nameSnackbar }}
      <VBtn flat color="primary" @click.native="snackbar = false">Close</VBtn>
    </VSnackbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
  data: () => ({
    id: 11,
    keyUpload: 0,
    columnHeaders: true,
    colWidths: [],
    colHeaders: [],
    valUploaded: "",
    colFirst: [],
    getHideCol: [],
    hideCol: [],
    snackbar: false,
    nameSnackbar: ''
  }),
  computed: mapGetters({
    data: "excel/data"
  }),
  components: {
    ImportExcel: require("./ImportExcel.vue").default,
  },
  mounted() {
    this.$store.dispatch("excel/fetchData", this.id).then(() => {
      this.commitHandsontable(this.data);
    });
  },
  methods: {
    uploaded(val) {
      this.commitHandsontable(null);
      val.splice(0, 1);
      setTimeout(() => {
        let data = {
          id: this.id,
          json: val,
          check_update: 1
        };
        this.$store
          .dispatch("excel/updateAndFetchData", data)
          .then(() => {
            this.commitHandsontable(this.data);
          })
          .catch(err => console.error(err));
      }, 100);
    },
    commitHandsontable(val) {
      if (val) {
        let arr = [
          [
            "Mã SKU",
            "Tên sản phẩm",
            "SL hàng bán ra",
            "SL hàng thực bán",
            "Tiền hàng",
            "Doanh số",
            "SL đơn hàng"
          ],
          [150, 180, 150, 150, 120, 100, 120]
        ];
        this.colFirst = this.colHeaders = arr[0];
        this.colWidths = arr[1];
      }
      this.valUploaded = val;
      this.keyUpload += 1;
    },
    afterRemoveRow(val) {
      this.snackbar = true,
      this.nameSnackbar = 'Bạn đã xóa hàng thành công'
    }
  }
};
</script>