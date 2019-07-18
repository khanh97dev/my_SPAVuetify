<style scope>
div.handsontable > div > div > div > table > tbody > tr > td:nth-child(2) {
  text-transform: uppercase !important;
}
</style>
<template>
  <div style=" padding: 20px; ">
    <Handsontable
      v-if="data.length"
      ref="handsontable"
      :key="keyHandsontable"
      :changeTable="data"
      :columns="columns"
      :mergeCells="mergeCells"
      :colWidths="colWidths"
      :colHeaders="colHeaders"
      :columnHeaderHeight="columnHeaderHeight"
      :fixedColumnsLeft="fixedColumnsLeft"
      :showExportExcel="false"
      :showReadOnly="false"
      :hiddenRows="false"
      :hideCol="[1]"
      :isDelData="false"
      @delData="delData"
      @updateData="updateData"
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
    <BtnFixedUpdate :loading="loading" @clicked="updateData(data)" />
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
      "Gửi đổi SP do đóng sai",
      "Gửi SP mới do BH",
      "Hàng khách gửi lại",
      "Gửi bù do đóng thiếu",
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
  watch: {
    'isChange'(val){
      if(val === true){
        window.onbeforeunload = () => 'ok'
      }else{
        window.onbeforeunload = null
      }
      return val
    },
  },//watch
  data() {
    return {
      id: 70,
      data: [],
      modelUsername: "",
      listName: ["Hoài", "Tâm", "Mai", "...other"],
      baseURL: "/api/excel/data",
      dialog: true,
      isChange: false,
      loading: false,
      fixedColumnsLeft: 1,
      keyHandsontable: 0,
      columnHeaderHeight: 90,
      colWidths: [
        120, 100, 70, 90, 70, // Mã vận đơn, SĐT khách, Link sapo, NVC, Link VC
        150, 96, 96, // Trạng thái, Ngày NVC giao BT, Ngày xử lý gần nhất,
        30, 30, 30, // l1, l2, l3
        185, 96, 96, // Tình trạng, Ngày bắt đầu hoàn, Ngày NVC báo trả nhưng chưa nhận,
        96, 200, 200, 70, 150 // Ngày xử lý tiếp, Ghi chú, Kết quả xử lý, Lưu tạm, Người cập nhật cuối
      ],
      colHeaders: [
        "Mã vận đơn",
        "SĐT Khách",
        "Link Sapo",
        "NVC",
        "Link VC",
        "Trạng thái",
        "<b>Chưa giao</b><br><br>Ngày NVC <br> giao BT",
        "<b>Chưa giao</b><br><br>Ngày xử lý <br> gần nhất",
        "<br><br>L1",
        "<br><br>L2",
        "<br><br>L3",
        "<b>Chưa giao</b><br><br>Tình trạng", //Chưa giao được
        "<b>Đang hoàn</b> <br> Ngày <br> bắt đầu <br> hoàn",
        "<b>Đang hoàn</b> <br> Ngày NVC <br> báo trả nhưng <br> chưa nhận", // Đang hoàn
        "Ngày xử <br> lý tiếp",
        "Ghi chú",
        "Kết quả xử lý",
        "Lưu tạm",
        "Người cập <br> nhật cuối"
      ],
      columns: false,
      mergeCells: false,
    };
  },
  mounted() {
    let lengthColWidths = this.colWidths.length;
    if (this.columns < lengthColWidths) {
      this.columns = [];
      for (let i = 0; i < lengthColWidths; i++) {
        if( i === 0 ){
          this.columns.push({
            renderer: function(hotInstance, td, row, column, prop, value, cellProperties) {
              let getLuuTam = hotInstance.getDataAtCell(row, 17);
              if (getLuuTam && getLuuTam === "Lưu") {
                td.classList.add("bg-danger-lighten");
              } else td.classList.remove("bg-danger-lighten");
              value = value ? value.toString().toUpperCase() : value
              td.style.textDecoration = 'italic'
              return td.textContent = value
            }
          });
        } else if (i === 6 || i === 7 || i === 12 || i === 13 || i === 14) {
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
        } else if(i === 2){
          // Link sappo
          this.columns.push({
            renderer: function(hotInstance, td, row, column, prop, value, cellProperties) {
              let MVD = hotInstance.getDataAtCell(row, 0); // MVD : Mã Vận Đơn
              let LinkMySapo = configCell.find(obj => obj.key === "LinkMySapo").link;
              let getLuuTam = hotInstance.getDataAtCell(row, 17);
              if (getLuuTam && getLuuTam === "Lưu") {
                td.classList.add("bg-danger-lighten");
              } else td.classList.remove("bg-danger-lighten");
              if (MVD && MVD.length > 0 ) {
                MVD = MVD ? MVD.toString().toUpperCase() : MVD;
                (td.innerHTML = `
                  <a target="_blank" href="${LinkMySapo + MVD}"> My sapo</a>
                `);
              } else {
                td.textContent = ''
              }
              return (cellProperties.readOnly = true);
            }
          })
        } else if(i === 4) {
          this.columns.push({
            renderer: function(hotInstance, td, row, col, prop, value, cellProperties) {
              let MVD = hotInstance.getDataAtCell(row, 0); // MVD : Mã Vận Đơn
              let nameDataNVC = hotInstance.getDataAtCell(row, col - 1);
              let getListNVC = configCell.find(item => item.key === "NVC");
              let getLuuTam = hotInstance.getDataAtCell(row, 17);
              if (getLuuTam && getLuuTam === "Lưu") {
                td.classList.add("bg-danger-lighten");
              } else td.classList.remove("bg-danger-lighten");
              if (MVD && nameDataNVC && getListNVC.name.includes(nameDataNVC)) {
                let indexNVC = getListNVC.name.findIndex( name => name === nameDataNVC );
                let linkNVC = getListNVC.link[indexNVC];
                MVD = MVD.length ? MVD.toUpperCase() : MVD ;
                td.textContent = `<a target="_blank" href="${linkNVC + MVD}"> ${nameDataNVC}</a>`
                td.innerHTML = `
                  <a target="_blank" href="${linkNVC + MVD}"> ${nameDataNVC}</a>
                `;
              } else {
                td.textContent = ''
              }
              return (cellProperties.readOnly = true);
            }
          })
        } else if(i === 5) {
          // Trang Thai
          this.columns.push({
            type: "dropdown",
            strict: true,
            source: configCell.find(obj => obj.key === "TrangThai").data
          });
        } else if (i === 11) {
          // Tinh Trạng
          this.columns.push({
            type: "dropdown",
            strict: true,
            source: configCell.find(obj => obj.key === "TinhTrang").data
          });
        } else if (i === 17) {
          // Lưu Tạm
          this.columns.push({
            type: "dropdown",
            strict: false,
            source: configCell.find(obj => obj.key === "LuuTam").data,
            renderer: function(hotInstance, td, row, column, prop, value, cellProperties) {
              td.textContent = value
              return cellProperties.readOnly = false
            }
          });
        } else {
          this.columns.push({});
        }
      } // end for
    }
    this.fetchData().then( () => {
      setTimeout(() => {
        return $hot.hotInstance.updateSettings({
          readOnly: false,
          cells: function(row, col, prop) {
            // handle Lưu
            if (col !== 17) {
              let getLuuTam = $hot.hotInstance.getDataAtCell(row, 17);
              let countCols = $hot.hotInstance.countCols();
              var cellProperties = {};
              if (getLuuTam && getLuuTam === "Lưu") {
                for (let i = 0; i < countCols; i++) {
                  $hot.hotInstance.setCellMeta(row, i, "className", "bg-danger-lighten");
                  cellProperties.readOnly = true;
                }
              } else {
                for (let i = 0; i < countCols; i++) {
                  if(i !== 17)
                    $hot.hotInstance.setCellMeta(row, i, "className", "");
                    cellProperties.readOnly = false;
                }
              }
              return cellProperties;
            }
          },
          afterSetDataAtCell(array) {
            if (!array.length) return;
            let row = array[0][0];
            let col = array[0][1];
            let oldVal = array[0][2];
            let newVal = array[0][3];
            // validate col set data, not call maximum stack
            if ( !newVal || (!oldVal && !newVal) || col === 17  || col === 18 || oldVal === newVal)
            return;
            // handle
            let hotInstance = $hot.hotInstance;
            let getColMVD = hotInstance.getDataAtCol(0);
            if (getColMVD.length && getColMVD.includes(newVal)) {
              return alert('trùng')
            }
            let getLuuTam = hotInstance.getDataAtCell(row, 17);
            let username = localStorage.getItem("username")
              ? localStorage.getItem("username")
              : "...other";
            hotInstance.setDataAtCell(row, 18, username);
            if (!getLuuTam) hotInstance.setDataAtCell(row, 17, "Không");
            return this.isChange = true
          },
        })
      }, 200);
    } );
  },
  methods: {
    async fetchData() {
      let id = this.id;
      return await axios
        .post(this.baseURL, { id })
        .then(response => {
          let data = response.data.json;
          //check data exist
          if (data) {
            let sendData = JSON.parse(data);
            this.setData(sendData)
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
      if (!isUpdate) return;
      this.loading = true
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
          this.$toast.success("Cập nhật thành công!");
          this.loading = this.isChange = false
        })
        .then( () => {
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
    setData(data){
      this.keyHandsontable += 1
      this.data = data
    },

    handleUsername() {
      let getUsername = this.modelUsername;
      this.dialog = false;
      localStorage.setItem("username", getUsername);
    }
  }
};
</script>


<style>
.bg-danger-lighten {
  background: rgb(255, 207, 207) !important;
}
</style>