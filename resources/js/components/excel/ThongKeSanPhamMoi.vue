<template>
  <div>
    <v-container>
      <v-flex xs12 sm6 d-flex>
        <v-flex xs12 sm12>
          <v-combobox
            z-index="1000"
            v-model="getHideCol"
            :items="colFirst"
            label="Ẩn cột sản phẩm"
            multiple
            chips
          ></v-combobox>
        </v-flex>
      </v-flex>
    </v-container>
    <template v-if="valUploaded">
      <VCard>
        <VCardText>
          <Handsontable
            v-if="valUploaded"
            :key="keyUpload"
            :changeTable="valUploaded"
            :hideCol="hideCol"
            :colHeaders="colHeaders"
            :colWidths="colWidths"
            :isDelData="true"
            :hiddenRows="false"
            :isDelete="true"
            :mergeCells="[]"
            :colUpdate="4"
            :title="'Thống kê sản phẩm mới'"
            @delData="delData"
            @updateData="updateData"
          />
        </VCardText>
      </VCard>
    </template>
  </div>
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
      this.hideCol = results;
      return val;
    }
  },
  data: () => ({
    id: 100,
    keyUpload: 0,
    valUploaded: "",
    colHeaders: ["Phiên bản", "SKU", "Tồn kho", "Giá trị TK", "Tình trạng"],
    colWidths: [300, 150, 150, 100],
    data: [],
    colFirst: [],
    getHideCol: [],
    hideCol: []
  }),
  mounted() {
    this.colFirst = this.colHeaders;
    this.getData();
  },
  components: {
    ImportExcel: require("./ImportExcel.vue").default,
  },
  methods: {
    getData() {
      let id_1 = 1,
        id_2 = 2;
      this.fetchData(this.id).then(() => {
        let data = this.data[this.id];
        if (data) {
          return (this.valUploaded = data);
        } else {
          this.fetchData(id_1).then(() => {
            this.fetchData(id_2).then(() => {
              let json_1 = this.data[id_1],
                json_2 = this.data[id_2],
                results = [];
              let len_json_1 = json_1[1].length,
                len_json_2 = json_2[1].length;
              let len_total =
                json_1.length > json_2.length ? json_2.length : json_2.length;
              let sku_json_1 = [];
              json_1.forEach((item, index) =>
                sku_json_1.push(item[1])
              );
              console.log(json_2)
              console.log(sku_json_1)
              results = json_2.filter(item => !sku_json_1.includes(item[1]));
              setTimeout(() => {
                this.valUploaded = results;
              }, 100);
            });
          });
        }
      });
    },
    uploaded(val) {
      this.valUploaded = val;
      this.keyUpload += 1;
    },
    async fetchData(id) {
      let results;
      await axios
        .post("/api/excel/data", { id: id })
        .then(response => {
          results = response.data.json
            ? JSON.parse(response.data.json)
            : response.data.json;
        })
        .catch(err => {
          console.error(err);
        });
      return (this.data[id] = results);
    },
    updateData(val) {
      let id = this.id;
      let json = JSON.stringify(val);
      let data = { id, json, check_update: 1 };
      axios
        .post("/api/excel/data", data)
        .then(response => {
          this.$toast.success("Thành công!", {
            queueable: true
          });
        })
        .catch(err => console.error(err));
    },
    delData() {
      let id = this.id;
      let confirmDelete = confirm("Xóa toàn bộ dữ liệu");
      if (confirmDelete) {
        axios
          .post("/api/excel/delete", { id })
          .then(response => {
            let status = response.data;
            if (status) {
              this.valUploaded = null;
              this.$toast.success("Delete thành công!", {
                queueable: true
              });
              this.getData();
            }
          })
          .catch(err => console.log(err));
      }
      return;
    }
  }
};
</script>