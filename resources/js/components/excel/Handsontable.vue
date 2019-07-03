<style scope>
#handsontable {
  overflow: auto;
  height: 100vh !important;
  width: 100% !important;
  padding: 0;
}
#handsontable [id*="hot"] {
  box-shadow: 2px 1px #ccc;
}
.ht_master{
  overflow: unset !important;
}
[id*="ht_"] div.ht_master.handsontable > div {
  height: 80px !important;
}
.wtHolder,
.ht_clone_left.handsontable {
  height: 480px !important;
}
.ht_master .wtHolder {
  padding-bottom: 16px;
}
.handsontable table > tbody > tr:first-child div,
.handsontable table > tbody > tr:first-child label {
  font-weight: normal;
}
.handsontable td.area.htDimmed{
  font-size: small !important;
  line-height: 16px !important;
}
.handsontable textarea{
  height: 52px !important;
}
.handsontable .htUIClearAll a,
.handsontable .htUISelectAll a,
.handsontable .htFiltersMenuValue .htUIMultipleSelectSearch input {
  font-size: 16px !important;
}
#hot-display-license-info {
  display: none;
}
.filterHeader input {
  background-color: #fff;
  border: 1px solid #ccc;
}
.handsontable .changeType {
  position: absolute;
  right: -2.2px;
  top: -4px;
  z-index: 1000;
}
.handsontable.listbox .ht_master table {
  border-color: black !important;
}
.handsontable th.beforeHiddenColumn::after,
.handsontable th.afterHiddenColumn::before {
  color: black !important;
}
.handsontable .autocompleteEditor.handsontable{
  top: unset !important
}
</style>
<template>
  <div id="handsontable">
    <template v-if="data" name="fade" mode="out-in">
      <v-layout row>
        <v-flex md3 xs6 v-if="showExportExcel">
          <v-btn color="info" @click="exportExcel">Xuất Excel</v-btn>
        </v-flex>
        <v-flex md3 xs6 v-if="isDelData">
          <v-btn color="error" @click="delData">Xóa dữ liệu</v-btn>
        </v-flex>
        <ButtonUpdate
          v-if="showReadOnly"
          @toggle=" val => readOnly = val"
          @update="() => $emit('updateData', data)"
        />
        <!-- <v-flex md3 xs6 ml-2 v-if="showReadOnly">
          <v-switch v-model="readOnly" :label="readOnly ? 'Chỉ đọc' : 'Chỉnh sửa'"></v-switch>
        </v-flex>
        <v-flex md3 xs6 v-if="!readOnly">
          <v-btn color="success" @click="updateOrSetData">Cập nhật dữ liệu</v-btn>
        </v-flex>-->
      </v-layout>
      <div>
        <hot-table ref="hot"
          full-width
          :key="key"
          :data="data"
          :columns="columns"
          :cells="cells"
          :settings="hotSettings"
          :renderAllRow="true"
          :colWidths="colWidths"
          :width="width"
          :autoColumnSize="false"
          :autoRowSize="false"
          :rowHeights="35"
          :fixedColumnsLeft="fixedColumnsLeft"
          :dropdownMenu="['filter_by_value', 'filter_action_bar']"
          :filters="true"
          :columnSorting="true"
          :colHeaders="colHeaders"
          :comments="true"
          :readOnly="readOnly"
          :mergeCells="mergeCells"
          :hiddenColumns="{
            columns: hideCol,
            indicators: true
          }"
          :hiddenRows="hiddenRows"
          :rowHeaders="true"
          @afterSetDataAtCell="afterSetDataAtCell"
          @afterRemoveRow="afterRemoveRow"
          @dblCell=" obj => $emit('dblCell', obj)"
        ></hot-table>
      </div>
    </template>
    <template v-else>
      <v-container>
        <div class="text-xs-center">
          <v-progress-circular :size="200" color="primary" indeterminate></v-progress-circular>
        </div>
      </v-container>
    </template>
  </div>
</template>

<script>
import { HotTable } from "@handsontable/vue";
import Handsontable from "handsontable";
export default {
  data: function() {
    return {
      data: "",
      test: "",
      key: 0,
      getData: "",
      dataChange: [],
      readOnly: true,
      checkDel: false,
      hotSettings: {
        contextMenu: {
          items: {
            remove_row: {
              name: "Xóa hàng"
            },
            clear_custom: {
              name: "Chọn tất cả",
              callback: function() {
                this.clear();
              }
            },
            Them_hang: {
              name: "Thêm 1 hàng",
              callback: function() {
                this.alter("insert_row", this.getSelected()[0] + 1, 1);
              }
            },
            row_below: {
              name: "Thêm 5 hàng",
              callback: function() {
                this.alter("insert_row", this.getSelected()[0] + 1, 5);
              }
            },
            commentsAddEdit: {
              name: "Chỉnh sửa comment"
            },
            commentsReadOnly: {
              name: "Chỉ cho đọc comment"
            }
          }
        },
        dropdownMenu: {
          items: {
            filter_by_value: {
              name: "Tìm kiếm..."
            }
          }
        },
        // event handsontable
        afterSetDataAtCell: function(array) {
          let Vue = this.rootElement.__vue__;
          Vue.$root.$emit('afterSetDataAtCell', array)
          Vue.$emit("afterSetDataAtCell", array);
        },
        afterRemoveRow: function(index, amount, physicalRows) {
          let Vue = this.rootElement.__vue__;
          Vue.$emit("afterRemoveRow", {
            index,
            amount,
            physicalRows
          });
        },
        afterOnCellMouseDown: function(event, coords, td) {
          var now = new Date().getTime();
          let Vue = this.rootElement.__vue__;
          // check if dbl-clicked within 1/5th of a second. change 200 (milliseconds) to other value if you want
          if (!(td.lastClick && now - td.lastClick < 200)) {
            td.lastClick = now;
            return; // no double-click detected
          }

          // double-click code goes here
          let content = td.textContent;
          let col = coords.col;
          let row = coords.row;
          return Vue.$emit("dblCell", {
            content,
            col,
            row
          });
        }
      }
    };
  },
  props: {
    cells: {
      default: () => {}
    },
    hiddenRows: {
      default: () => ({
        rows: [0]
      })
    },
    changeTable: {
      default: () => []
    },
    hideCol: {
      default: () => []
    },
    colHeaders: {
      default: () => []
    },
    mergeCells: {
      default: () => []
    },
    colWidths: {
      default: () => "100"
    },
    width: {
      default: () => "100%"
    },
    colUpdate: {
      default: () => 0
    },
    title: {
      default: () => "Excel"
    },
    isDelData: {
      default: () => false
    },
    showReadOnly: {
      default: () => true
    },
    columnHeaders: {
      default: () => false
    },
    columns: {
      default: () => false
    },
    fixedColumnsLeft: {
      default: () => 0
    },
    showExportExcel:{
      default: () => true
    },
    registerHandsontable: {
      default:() => () => {}
    }
  },
  created: function() {
    Handsontable.renderers.registerRenderer('renderCellCustom', this.registerHandsontable)
    this.key += 1;
    if (this.changeTable)
      setTimeout(() => {
        this.data = this.changeTable;
      }, 600);
  },
  components: {
    HotTable
  },
  methods: {
    exportExcel() {
      let hot = this.$refs.hot;
      window.hot = hot
      let exportPlugin1 = hot.hotInstance.getPlugin("exportFile");
      exportPlugin1.downloadFile("csv", {
        columnDelimiter: ",",
        columnHeaders: this.columnHeaders,
        exportHiddenColumns: true,
        exportHiddenRows: true,
        fileExtension: "csv",
        filename: this.title,
        mimeType: "text/csv",
        rowDelimiter: "\r\n"
      });
    },
    updateOrSetData() {
      if (!this.dataChange.length && !checkDel) return;
      this.readOnly = true;
      let colUpdate = this.colUpdate;
      let hot = this.$refs.hot;
      let getData = hot.hotInstance.getData();
      if (colUpdate) {
        this.data.forEach((item, index, self) => {
          if (this.dataChange.includes(item[0])) {
            self[index][colUpdate] = "Đã cập nhật";
          }
        });
      }
      setTimeout(() => {
        // this.key += 1
        this.dataChange = [];
        this.$emit("updateData", this.data);
      }, 100);
    },
    afterSetDataAtCell: function(val) {
      if (!val.length) return;
      let hot = this.$refs.hot;
      let hotInstance = hot.hotInstance;
      let row = val[0][0],
        col = val[0][1];
      let result = hotInstance.getDataAtCell(row, 0);
      if (result != "Mã SKU" && !this.dataChange.includes(result))
        this.dataChange.push(result);
    },
    afterRemoveRow(val) {
      this.checkDel = true;
      this.$emit("afterRemoveRow", val);
    },
    delData() {
      this.$emit("delData");
    }
  }
};
</script>
