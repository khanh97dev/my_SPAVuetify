<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6>
          <v-combobox
            z-index="1000"
            v-model="getHideCol"
            :items="colFirst"
            label="Ẩn cột sản phẩm"
            multiple
            chips
          ></v-combobox>
        </v-flex>
        <v-flex offset-xs1 xs2>
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Tạo Backup</v-btn>
            </template>
            <v-card>
              <v-card-title primary-title>Tên backup</v-card-title>
              <v-card-text>
                <input
                  type="text"
                  ref="name_backup"
                  @keypress.enter="backupCreate()"
                  style="width: 100%; height: 30px; border: 1px solid #599BDC; padding: 2px 10px"
                >
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" flat @click="dialog = false">Đóng</v-btn>
                <v-btn color="blue darken-1" flat @click="backupCreate()">Tạo</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
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
            :columnHeaders="columnHeaders"
            :colWidths="colWidths"
            :hiddenRows="false"
            :isDelete="true"
            :mergeCells="[]"
            :colUpdate="4"
            :isDelData="true"
            @delData="delData"
            @afterRemoveRow="afterRemoveRow"
            :title="'Thống kê kho hàng'"
            @updateData="updateData"
          />
        </VCardText>
      </VCard>
    </template>
  </div>
</template>
<script>
import { log } from "util";
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
    id: 20,
    keyUpload: 0,
    valUploaded: "",
    dialog: false,
    colHeaders: [
      "Phiên bản",
      "SKU",
      "Tồn kho",
      "Giá trị TK",
      "Tình trạng"
    ],
    columnHeaders: true,
    colWidths: [300, 150, 150, 100, 150],
    data: [],
    colFirst: [],
    getHideCol: [],
    hideCol: [],
    nameBackup: ""
  }),
  mounted() {
    this.colFirst = this.colHeaders
    this.getData();
  },
  components: {
    ImportExcel: require("./ImportExcel.vue").default
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
                json_2 = this.data[id_2];
              // handle
              let sku_only_json_1 = [];
              json_1.forEach(item => {
                sku_only_json_1.push(item[1]);
              });
              json_2.forEach((item, index, self) => {
                if (sku_only_json_1.includes(item[1])) {
                  let index = sku_only_json_1.indexOf(item[1]);
                  sku_only_json_1.splice(index, 1);
                }
                return item.push("Đã cập nhật");
              });
              json_1 = json_1.filter(item => sku_only_json_1.includes(item[1]));
              json_1.forEach(item => {
                item.push("Chưa cập nhật");
                json_2.push(item);
              });
              setTimeout(() => {
                this.valUploaded = json_2;
                this.updateData(json_2);
              }, 100);
            });
          });
        }
      });
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
          console.log(err);
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
          this.$toast.success("Cập nhật thành công!");
        })
        .catch(err => console.error(err));
    },
    delData() {
      let id = this.id;
      let confirmDelete = confirm("Xóa toàn bộ dữ liệu");
      if (confirmDelete)
        return axios.post("/api/excel/delete", { id }).then(response => {
          let status = response.data;
          if (status) {
            this.valUploaded = null;
            this.getData();
          }
        });
      return;
    },
    backupCreate() {
      let nameBackup = this.$refs.name_backup.value;
      let json = JSON.stringify(this.valUploaded);
      axios
        .post("/api/backup-excel/create", { title: nameBackup, json })
        .then(response => {
          this.$toast.success("Thành công!", {
            queueable: true
          });
        })
        .catch(err => console.error(err));
      this.$refs.name_backup.value = "";
      return (this.dialog = false);
    },
    afterRemoveRow(val) {
      this.$toast.success("Thành công!", {
        queueable: true
      });
    }
  }
};
</script>