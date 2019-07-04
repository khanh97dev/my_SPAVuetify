<template>
  <div style=" padding: 20px; ">
    <Handsontable
      v-if="data.length"
      ref="handsontable"
      :key="keyHandsontable"
      :changeTable="data"
      :cells="cells"
      :columns="columns"
      :mergeCells="mergeCells"
      :colWidths="colWidths"
      :colHeaders="colHeaders"
      :columnHeaderHeight="columnHeaderHeight"
      :showReadOnly="true"
      :showExportExcel="false"
      :hiddenRows="false"
      :isDelData="false"
      @delData="delData"
      @updateData="updateData"
      @afterSetDataAtCell="afterSetDataAtCell"
    />
    <VDialog
      v-model="dialog"
      persistent
      :overlay="false"
      color="white"
      max-width="500px"
      transition="dialog-transition"
    >
      <VCard>
        <VCardTitle>
          <VSelect
            label="Chọn tên:"
            chips
            v-model="modelUsername"
            cache-items
            :items="listName"
            autocomplete
          ></VSelect>
        </VCardTitle>
        <VCardActions>
          <VLayout justify-center>
            <VBtn justify-center color="success" @click="handleUsername">Chấp nhận</VBtn>
          </VLayout>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
<script>
const getToday = () => {
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
};

const configCell = [
  {
    key: "LinkMySapo",
    link: "https://dosangtaovanba.mysapo.vn/admin/shipments?query="
  },
  {
    key: "NVC",
    name: ["J&T", "GHN", "Bưu điện", "Viettel", "Ninja"],
    link: [
      "https://jtexpress.vn/express/track?billcodes=",
      "https://track.ghn.vn/order/tracking?code=",
      "http://www.vnpost.vn/vi-vn/dinh-vi/buu-pham?key=",
      "https://old.viettelpost.com.vn/Tracking?KEY=",
      "https://www.ninjavan.co/vi-vn/tracking?id="
    ]
  },
  {
    key: "TrangThai",
    data: [
      "Đang hoàn",
      "Chưa giao được",
      "Đổi SP khác cho KH",
      "Gửi SP mới do BH",
      "Hàng khách gửi lại",
      "Gửi bù do đóng sai",
      "NVC làm thất lạc"
    ]
  },
  {
    key: "TinhTrang",
    data: [
      "NVC làm thất lạc",
      "Khách tự đến bưu cục lấy hàng",
      "Khách báo đã nhận hàng + Đã Y/C đánh giá",
      "Đợi bên vận chuyển liên hệ lại",
      "Đợi khách liên hệ lại - khách hẹn gọi lại",
      "Khách từ chối nhận hàng",
      "Khách không liên lạc được",
      "Khách hẹn lại ngày giao",
      "Bưu tá báo giao không được",
      "Bưu tá giữ hàng nhưng chưa giao",
      "Hàng đã đến bưu cục giao"
    ]
  },
  {
    key: "LuuTam",
    data: ["Lưu", "Không"]
  }
];

export default {
  components: {
    Handsontable: require("./Handsontable.vue").default
  },
  data() {
    return {
      id: 70,
      data: [],
      modelUsername: '',
      listName:[
        'Hoài',
        'Tâm',
        'Mai',
        '...other'
      ],
      baseURL: "/api/excel/data",
      dialog: true,
      keyHandsontable: 0,
      colWidths: [
        120, 100, 120, 90, 120, // Mã vận đơn, SĐT khách, Link sapo, NVC, Link vận chuyển
        150, 120, 80, // Trạng thái, Ngày NVC giao BT, Ngày xử lý gần nhất,
        30, 30, 30, // l1, l2, l3
        220, 100, 120, // Tình trạng, Ngày kiểm tra hoàn, Ngày NVC báo trả nhưng chưa nhận,
        80, 180, 200, 70, 100 // Ngày xử lý tiếp, Ghi chú, Kết quả xử lý, Lưu tạm, Người cập nhật cuối
      ],
      columnHeaderHeight: 90,
      colHeaders: [
        'Mã vận đơn', 'SĐT Khách', 'Link Sapo',
        'NVC', 'Link VC', 'Trạng thái',
        'Ngày NVC <br> giao BT <br><b>Chưa giao được</b>', 'Ngày NVC <br> giao BT', 'L1', 'L2', 'L3', 'Tình trạng<br><b>Chưa giao được</b>', //Chưa giao được
        'Ngày kiểm <br> tra hoàn <br> <b>Đang hoàn</b>', 'Ngày NVC <br> báo trả nhưng <br> chưa nhận <br><b>Đang hoàn</b>', // Đang hoàn
        'Ngày xử <br> lý tiếp', 'Ghi chú', 'Kết quả xử lý', 'Lưu tạm', 'Người cập <br> nhật cuối'
      ],
      columns: false,
      mergeCells: false,
      cells: function(row, col, prop) {
        let hot = this.instance
        // handle link NVC
        if (col === 4) {
          this.renderer = function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
            let MVD = instance.getDataAtCell(row, 0); // MVD : Mã Vận Đơn
            let nameDataNVC = instance.getDataAtCell(row, col - 1);
            let getListNVC = configCell.find(item => item.key === "NVC");
            if (MVD && nameDataNVC && getListNVC.name.includes(nameDataNVC)) {
              let indexNVC = getListNVC.name.findIndex(
                name => name === nameDataNVC
              );
              td.style.textAlign = 'center'
              let linkNVC = getListNVC.link[indexNVC];
              return (td.innerHTML = `
								<a target="_blank" href="${linkNVC + MVD}"> ${nameDataNVC}</a>
							`);
            } else {
              td.style.backgroundColor = "#ddd";
            }
            return (cellProperties.readOnly = true);
          };
        }
        if (col === 2) {
          this.renderer = function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
            let MVD = instance.getDataAtCell(row, 0); // MVD : Mã Vận Đơn
            let LinkMySapo = configCell.find(obj => obj.key === "LinkMySapo")
              .link;
            if (MVD) {
              td.style.textAlign = 'center'
              return (td.innerHTML = `
								<a target="_blank" href="${LinkMySapo + MVD}"> My sapo</a>
							`);
            } else {
              td.style.backgroundColor = "#ddd";
            }
            return (cellProperties.readOnly = true);
          };
        }
        // handle Lưu
        if(col !== 17){
          let getLuuTam = hot.getDataAtCell(row, 17)
          let countCols = hot.countCols()
          var cellProperties = {};
          if(getLuuTam && getLuuTam === 'Lưu'){
            for( let i = 0; i < countCols; i++){
              hot.setCellMeta(row, i, 'className', 'red lighten-5 v-card')
              cellProperties.readOnly = true;
            }
          }else{
            for( let i = 0; i < countCols; i++){
              hot.setCellMeta(row, i, 'className', '')
              cellProperties.readOnly = false;
            }
          }
          return cellProperties;
        }
      }
    };
  },
  mounted() {
    let lengthColWidths = this.colWidths.length;
    if (this.columns < lengthColWidths) {
      this.columns = [];
      for (let i = 0; i < lengthColWidths; i++) {
        if (i === 6 || i === 7 || i === 12 || i === 13 || i === 14) {
          //date
          this.columns.push({
            type: "date",
            strict: false,
            allowEmpty: true,
            correctFormat: true,
            dateFormat: "DD/MM/YYYY",
            defaultDate: getToday()
          });
        } else if (i === 3) {
          // NVC
          this.columns.push({
            type: "dropdown",
            strict: false,
            source: configCell.find(obj => obj.key === "NVC").name
          });
        } else if (i === 5) {
          // Trang Thai
          this.columns.push({
            type: "dropdown",
            strict: false,
            source: configCell.find(obj => obj.key === "TrangThai").data
          });
        } else if (i === 11) {
          // Tinh Trạng
          this.columns.push({
            type: "dropdown",
            strict: false,
            source: configCell.find(obj => obj.key === "TinhTrang").data
          });
        } else if (i === 17) {
          // Lưu Tạm
          this.columns.push({
            type: "dropdown",
            strict: false,
            source: configCell.find(obj => obj.key === "LuuTam").data
          });
        } else {
          this.columns.push({});
        }
      }
    }
    this.$root.$on("afterSetDataAtCell", this.afterSetDataAtCell);
    this.fetchData();
  },
  methods: {
    fetchData() {
      let id = this.id;
      axios
        .post(this.baseURL, { id })
        .then(response => {
          let data = response.data.json;
          //check data exist
          if (data) {
            this.keyHandsontable += 1;
            this.data = JSON.parse(data);
          } else {
            this.createData();
          }
        })
        .catch(error => {
          this.createData();
        });
    },
    createData() {
      this.data[0] = [];
      for (let i = 0; i < this.colWidths.length; i++) this.data[0].push("");
      this.keyHandsontable += 1;
      this.$toast.success("Khởi tạo dữ liệu thành công!");
    },
    updateData(val, isUpdate = true) {
      if(!isUpdate) return;
      let id = this.id;
      let jsonString = JSON.stringify(val);
      let check_update = 1;
      let objUpdate = {
        id,
        json: jsonString,
        check_update
      };
      axios
        .post(this.baseURL, objUpdate)
        .then(response => {
          this.$toast.success("Thành công!");
        })
        .catch(err => {
          console.error(err);
          this.$toast.error("Có lỗi xảy ra" + err);
        });
    },
    delData() {
      let id = this.id;
      let confirmDelete = confirm("Xóa toàn bộ dữ liệu");
      if (confirmDelete)
        return axios.post("/api/excel/delete", { id }).then(response => {
          let status = response.data;
          if (status) {
            this.data = [];
            this.keyHandsontable += 1;
            return this.$toast.success("Xóa thành công!");
          }
        });
      return;
    },
    afterSetDataAtCell(array) {
      if (!array.length) return;
      let row = array[0][0];
      let col = array[0][1];
      let oldVal = array[0][2];
      let newVal = array[0][3];
      // validate col set data, not call maximum stack
      if ((!oldVal && !newVal) || col === 17 || col === 18 || oldVal === newVal) return;
      // handle
      let hot = this.$refs.handsontable.$refs.hot;
      let hotInstance = hot.hotInstance;
      let getColMVD = hotInstance.getDataAtCol(0)
      if(getColMVD.length && getColMVD.includes(newVal)){
        setTimeout(() => {
          hotInstance.setDataAtCell(row, 0, '😈Trùng😈');
        }, 50)
        return this.$toast.error('Trùng')
      }
      let getLuuTam = hotInstance.getDataAtCell(row, 17);
      let username = localStorage.getItem('username') ? localStorage.getItem('username') : '...other'
      hotInstance.setDataAtCell(row, 18, username);
      if(!getLuuTam) hotInstance.setDataAtCell(row, 17, 'Không');
      return this.updateData(hotInstance.getData(), false)
    },
    handleUsername(){
      let getUsername = this.modelUsername
      this.dialog = false
      localStorage.setItem('username', getUsername)
    }
  }
};
</script>
