<template>
  <div>
    <v-container grid-list-xs>
      <VCard>
        <VCardTitle>
          <VFlex xs6>
            <ImportExcel @uploaded="handleData" />
          </VFlex>
        </VCardTitle>
        <VCardText>
          <HideColumns
            v-if="data.length"
            :columns="hideCol"
            @setColumnHide="setColumnHide"
          />
          <Handsontable
            v-if="data.length"
            ref="handsontable"
            :key="keyUpload"
            :changeTable="data"
            :hideCol="hideCol"
            :colHeaders="colHeaders"
            :columns="columns"
            :cells="cells"
            :fixedColumnsLeft="fixedColumnsLeft"
            :columnHeaders="true"
            :colWidths="colWidths"
            :isDelData="true"
            :hiddenRows="false"
            :isDelete="true"
            :mergeCells="[]"
            :colUpdate="false"
            :width="width"
            :title="'Dữ liệu mẫu'"
            @delData="delData"
            @updateData="updateData"
            @afterRemoveRow="afterRemoveRow"
          />
        </VCardText>
      </VCard>
    </v-container>
  </div>
</template>
<script>
import Handsontable from "handsontable";
export default {
  components: {
    Handsontable: require("./Handsontable").default,
    ImportExcel: require("./ImportExcel").default
  },
  data() {
    return {
      id: 60,
      data: [],
      baseURL: "/api/excel/data",
      keyUpload: 0,
      hideCol: [3,4,5,6,7,8],
      fixedColumnsLeft: 1,
      cells: function(row, col, prop) {
        // something code here
        if (col === 37 || col === 38) {
          var posColDaLenDS = this.colHeaders.length - 1
          this.renderer = function( instance, td, rowCell, colCell, prop, value, cellPropertiesChild
          ) {
            var checkVal = instance.getDataAtCell(rowCell, posColDaLenDS);
            if (checkVal && checkVal.toLowerCase() === "có") {
              cellPropertiesChild.readOnly = true;
              td.style.backgroundColor = "#FCB2B3";
            } else {
              cellPropertiesChild.readOnly = false;
            }
            return (td.textContent = value);
          };
        }
      },
      colHeaders: [
        "Phiên bản", // 1
        "SKU", // 2
        "Tồn Kho", // 3
        "2T trước", // 4
        "1T trước", // 5
        "Dự đoán", // 6
        "Bán HT", // 7
        "Phân loại", // 8
        "Nhóm SP", // 9
        "Tối thiểu", // 10
        "Mức thấp", // 11
        "Gợi ý", // 12
        "Đang nhập", // 13
        "Chênh lệch", // 14
        "Mức độ", // 15
        "Target" // 16
      ],
      columns: [
        {}, // 1
        {}, // 2
        {}, // 3
        {}, // 4
        {}, // 5
        {}, // 6
        {}, // 7
        {}, // 8
        {}, // 9
        {}, // 10
        {}, // 11
        {}, // 12
        {}, // 13
        {}, // 14
        {
          type: "autocomplete",
          source: ["", "Khẩn cấp", "Cần nhập", "Phải xem"],
          strick: false,
          renderer: function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
            if (value && value.toLowerCase().includes("kh")) {
              td.style.backgroundColor = "#ffa8a8";
              td.style.fontWeight = "bold";
            } else if (value && value.toLowerCase().includes("nh")) {
              td.style.backgroundColor = "#fff6a8";
              td.style.fontStyle = "italic";
            } else if (value && value.toLowerCase().includes("ph")) {
              td.style.backgroundColor = "#b7f7ba";
            }
            return (td.textContent = value);
          }
        }, // 15
        {} // 16
      ],
      colWidths: [
        210,
        150,
        100,
        100,
        100,
        100,
        100,
        110,
        100,
        100,
        100,
        100,
        100,
        110,
        100,
        100
      ],
      width: "100%"
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let vm = this;
      axios
        .post(this.baseURL, { id: this.id })
        .then(response => {
          if (response.data.json) {
            let json = JSON.parse(response.data.json);
            this.setData(json);
          } else this.notifyError();
        })
        .catch(err => {
          console.error(err);
          this.notifyError();
        });
    },
    notifyError() {
      this.$toast.error("Dữ liệu rỗng!");
    },
    handleData(array) {
      array.splice(0, 1);
      let data = array;
      let idBangNhapHang = 50;
      let vm = this;
      axios
        .post(this.baseURL, { id: idBangNhapHang })
        .then(resBangNhapHang => {
          let jsonBangNhapHang = JSON.parse(resBangNhapHang.data.json);
          let dataBangNhapHang = jsonBangNhapHang.data;

          if (vm.colHeaders.length < 41) {
            // ----------
            let colHeaders = jsonBangNhapHang.headers.colHeaders;
            colHeaders.splice(0, 2);
            vm.colHeaders.push(...colHeaders);
            vm.colHeaders.push(...["Số Lượng", "Nhà CC", "Ghi chú", "Lên DS"]);
            // ----------
            let colWidths = jsonBangNhapHang.headers.colWidths;
            colWidths.splice(0, 2);
            vm.colWidths.push(...colWidths);
            vm.colWidths.push(...[100, 80, 150, 80]);
            // ----------
            let columns = jsonBangNhapHang.headers.columns;
            columns.splice(0, 2);
            vm.columns.push(...columns);
            vm.columns.push(
              ...[
                {},
                {
                  type: "dropdown",
                  source: [
                    "Nhà CC 1",
                    "Nhà CC 2",
                    "Nhà CC 3",
                    "Nhà CC 4",
                    "Nhà CC 5"
                  ],
                  strict: true
                },
                {},
                {}
              ]
            );
          }

          dataBangNhapHang.forEach((itemBangNhapHang, indexBangNhapHang) => {
            let idItemBangNhapHang = itemBangNhapHang[0];
            data.some((item, index) => {
              let idItem = item[1];
              if (idItem === idItemBangNhapHang) {
                itemBangNhapHang.forEach(
                  (valueChildBangNhapHang, indexChildBangNhapHang) => {
                    if (indexChildBangNhapHang > 1)
                      return data[index].push(valueChildBangNhapHang);
                  }
                );
                for (let i = 0; i < 4; i++) data[index].push("");
                return true;
              }
            });
          });
          // end forEach
        })
        .then(() => {
          return this.updateData(data);
        });
    },
    setData(json) {
      if (json.length === 0) {
        this.data = [];
        this.keyUpload += 1;
        return true;
      }
      this.colHeaders = json.headers.colHeaders;
      this.colWidths = json.headers.colWidths;
      this.columns = json.headers.columns;
      this.columns[14].renderer = function(
        instance,
        td,
        row,
        col,
        prop,
        value,
        cellProperties
      ) {
        if (value && value.toLowerCase().includes("kh")) {
          td.style.backgroundColor = "#ffa8a8";
          td.style.fontWeight = "bold";
        } else if (value && value.toLowerCase().includes("nh")) {
          td.style.backgroundColor = "#fff6a8";
          td.style.fontStyle = "italic";
        } else if (value && value.toLowerCase().includes("ph")) {
          td.style.backgroundColor = "#b7f7ba";
        }
        return (td.textContent = value);
      };
      // position column Target
      this.columns[15].renderer = function( instance, td, row, col, prop, value, cellProperties ) {
        return (td.textContent = Math.ceil(value * 100) + "%");
      };
      // position column DaLEN DS
      this.columns[40] = {
        type: 'dropdown',
        source: ['có', 'không']
      }
      this.data = json.data;
      this.keyUpload += 1;
    },
    updateData(data) {
      let id = this.id;
      let obj = {
        data,
        headers: {
          colHeaders: this.colHeaders,
          colWidths: this.colWidths,
          columns: this.columns
        }
      };
      let jsonString = JSON.stringify(obj);
      let upData = { id, json: jsonString, check_update: 1 };
      axios
        .post("/api/excel/data", upData)
        .then(response => {
          let json = JSON.parse(response.data.json);
          this.$toast.success("Cập nhật thành công!", {
            queueable: true
          });
          this.setData(json);
        })
        .catch(err => this.$toast.error("Lỗi: " + err));
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
              this.$toast.success("Xóa thành công!", {
                queueable: true
              });
              this.setData([]);
            }
          })
          .catch(err => this.$toast.error("Lỗi: " + err));
      }
      return;
    },
    afterRemoveRow() {
      this.$toast.success("Xóa hàng thành công");
    },
    setColumnHide(val) {
      console.log()
      let hot = this.$refs.handsontable.$refs.hot.hotInstance
      val.length
        ? hot.updateSettings({
            hiddenColumns: {
              columns: val,
              indicators: true
            }
          })
        : hot.updateSettings({
            hiddenColumns: {
              columns: val,
              indicators: false
            }
          })
    },
  }
};
</script>
