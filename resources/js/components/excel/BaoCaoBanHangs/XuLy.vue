<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <VCard>
          <VCardTitle>
            <VLayout column>
              <VFlex>
                <VBtn color="error" @click="delData()">Tạo lại bảng dữ liệu</VBtn>
              </VFlex>
            </VLayout>
          </VCardTitle>
          <v-card-text>
            <Handsontable
              v-if="results"
              :key="keyTable"
              :changeTable="results"
              :colUpdate="false"
              :columnHeaders="columnHeaders"
              :colHeaders="colHeaders"
              :hideCol="hideCol"
              :hiddenRows="false"
              :showReadOnly="true"
              :colWidths="colWidths"
              :title="'Kiểm tra báo bán hàng'"
              @updateData="checkUpdateData"
              @delData="delData"
            />
          </v-card-text>
        </VCard>
      </v-flex>
    </v-layout>
    <VSnackbar v-model="snack" color="success" :timeout="2000" bottom right>
      {{ nameSnack }}
      <VBtn flat color="success" @click.native="snack = false">Close</VBtn>
    </VSnackbar>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data: () => ({
    id: 31,
    data: [],
    results: "",
    keyTable: "",
    columnHeaders: true,
    headers: "",
    colHeaders: "",
    colWidths: "",
    hideCol: [],
    snack: false,
    nameSnack: ""
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.id;
      axios
        .post("/api/excel/data", { id })
        .then(res => {
          let json = JSON.parse(res.data.json);
          if (json) {
            let headersAndWidth = json.headers;
            let data = json.data;
            this.colHeaders = headersAndWidth[0];
            this.colWidths = headersAndWidth[1];
            let lengthColHeaders = this.colHeaders.length
            for (let i = 0; i < lengthColHeaders; i++) {
              if(i > 1 && i < (lengthColHeaders - 2))
                this.hideCol.push(i)
            }
            return (this.results = data);
          } else {
            console.error("error");
            return this.handleData();
          }
        })
        .catch(err => {
          return this.handleData();
        });
    },
    handleData() {
      let IDTonKho = 20;
      let IDBanHang = 30;
      axios
        .post("/api/excel/data", { id: IDBanHang })
        .then(resBanHang => {
          let data = JSON.parse(resBanHang.data.json);
          var dataBanHang = data.data;
          this.headers = data.headers;
          this.data[0] = dataBanHang;
        })
        .then(() => {
          axios
            .post("/api/excel/data", { id: IDTonKho })
            .then(resTonKho => {
              let dataTonKho = JSON.parse(resTonKho.data.json);
              this.data[1] = dataTonKho;
            })
            .then(() => {
              let idTonKho = [];
              let dataTonKho = this.data[1];
              var lengthTonKho = dataTonKho[0].length;
              let dataBanHang = this.data[0];
              var lengthBanHang = dataBanHang[0].length;
              dataTonKho.forEach((item, index) => {
                let id = item[1];
                idTonKho.push(id);
              });
              dataBanHang.forEach(item => {
                let id = item[0];
                let indexTonKho = dataTonKho.findIndex(x => x[1] == id);
                if (indexTonKho === -1) {
                  item[lengthBanHang] = "Tồn kho không tồn tại";
                  item[lengthBanHang + 1] = "";
                } else {
                  item.push("");
                  item.push(dataTonKho[indexTonKho][lengthTonKho - 3]);
                }
                return item;
              });
              let colHeaders = this.headers[0],
                colWidths = this.headers[1];
              colHeaders.push("Tình Trạng");
              colHeaders.push("Tổng hệ thống");
              colWidths.push(210);
              colWidths.push(150);
              (this.colHeaders = colHeaders), (this.colWidths = colWidths);
              this.keyTable += 1;
              this.results = dataBanHang;
              let data = {
                headers: [colHeaders, colWidths],
                data: dataBanHang
              };
              this.updateData(data);
            }).then(() => {
              setTimeout(() => {
                for (let i = 0; i < this.colHeaders.length; i++) {
                  if(i > 1 && i < (this.colHeaders.length - 2))
                    this.hideCol.push(i)
                }
              }, 2500);
            });
        });
    },
    checkUpdateData(){
      let headers = this.colHeaders
      let widths = this.colWidths
      let data = this.results
      let obj = {
        data: data,
        headers: [
          headers,
          widths
        ]
      }
      this.updateData(obj)
    },
    updateData(val) {
      let id = this.id;
      let json = JSON.stringify(val);
      let data = { id, json, check_update: 1 };
      axios
        .post("/api/excel/data", data)
        .then(response => {
          (this.snack = true), (this.nameSnack = "Cập nhật thành công");
        })
        .catch(err => console.error(err));
    },
    delData() {
      let id = this.id;
      let confirmDelete = confirm("Tạo lại");
      if (confirmDelete)
        return axios.post("/api/excel/delete", { id }).then(response => {
          let status = response.data;
          if (status) {
            this.results = null;
            this.handleData();
          }
        });
      return;
    }
  }
};
</script>