<template>
  <div style=" padding: 20px; ">
    <Handsontable
      v-if="data.length"
      :key="keyHandsontable"
      :changeTable="data"
      :cells="cells"
      :columns="columns"
      :mergeCells="mergeCells"
      :colWidths="colWidths"
      :colHeaders="true"
      :showReadOnly="true"
      :hiddenRows="false"
    />
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
      "Đổi SP khác cho KH",
      "Gửi SP mới do BH",
      "Hàng khách gửi lại",
      "Đang hoàn",
      "Chưa giao được",
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
      baseURL: "/api/excel/data",
      keyHandsontable: 0,
      colWidths: [
        120,
        100,
        200,
        80,
        200, // Mã vận đơn, SĐT khách, Link sapo, NVC, Link vận chuyển
        150,
        120,
        120, // Trạng thái, Ngày NVC giao BT, Ngày xử lý gần nhất,
        50,
        50,
        50, // l1, l2, l3
        180,
        120,
        120, // Tình trạng, Ngày kiểm tra hoàn, Ngày NVC báo trả nhưng chưa nhận,
        120,
        150,
        200,
        100,
        100 // Người cập nhật cuối
      ],
      columns: false,
      mergeCells: [
        { row: 0, col: 0, rowspan: 2, colspan: 1 },
        { row: 0, col: 1, rowspan: 2, colspan: 1 },
        { row: 0, col: 2, rowspan: 2, colspan: 1 },
        { row: 0, col: 3, rowspan: 2, colspan: 1 },
        { row: 0, col: 4, rowspan: 2, colspan: 1 },
        { row: 0, col: 5, rowspan: 2, colspan: 1 },
        { row: 0, col: 6, rowspan: 1, colspan: 6 },
        { row: 0, col: 12, rowspan: 1, colspan: 2 },
        { row: 0, col: 14, rowspan: 2, colspan: 1 },
        { row: 0, col: 15, rowspan: 2, colspan: 1 },
        { row: 0, col: 16, rowspan: 2, colspan: 1 },
        { row: 0, col: 17, rowspan: 2, colspan: 1 },
        { row: 0, col: 18, rowspan: 2, colspan: 1 }
      ],
      cells: function(row, col, prop) {
        // something code here
        if (row === 0) {
          this.renderer = function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
            cellProperties.readOnly = true;
            td.style.textAlign = "center";
            return (td.textContent = value);
          };
				}
				// handle link NVC
        if (col === 4 && row > 0) {
          this.renderer = function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
						let MVD = instance.getDataAtCell(row, 0)  // MVD : Mã Vận Đơn
						let nameDataNVC = instance.getDataAtCell(row, col - 1) 
						let getListNVC = configCell.find( item => item.key === 'NVC')
            if ( MVD && nameDataNVC && getListNVC.name.includes(nameDataNVC) ) {
							let indexNVC = getListNVC.name.findIndex( name => name === nameDataNVC )
							let linkNVC = getListNVC.link[indexNVC]
							td.style.textAlign = 'center'
							return (td.innerHTML = `
								<a target="_blank" href="${linkNVC+MVD}"> ${nameDataNVC} + ${MVD}</a>
							`);
            }else{
							td.style.backgroundColor = '#ddd'
						}
						return cellProperties.readOnly = true
          };
				}
				if (col === 2 && row > 0) {
					this.renderer = function(
            instance,
            td,
            row,
            col,
            prop,
            value,
            cellProperties
          ) {
						let MVD = instance.getDataAtCell(row, 0)  // MVD : Mã Vận Đơn
						let LinkMySapo = configCell.find(obj => obj.key === 'LinkMySapo').link
            if ( MVD ) {
							td.style.textAlign = 'center'
							return (td.innerHTML = `
								<a target="_blank" href="${LinkMySapo+MVD}"> My sapo + ${MVD}</a>
							`);
            }else{
							td.style.backgroundColor = '#ddd'
						}
						return cellProperties.readOnly = true
          };
				}
      }
    };
  },
  mounted() {
    let lengthColWidths = this.colWidths.length;
    if (this.columns < lengthColWidths) {
      this.columns = [];
      for (let i = 0; i < lengthColWidths; i++) {
        if (
          i === 6 ||
          i === 7 ||
          i === 12 ||
          i === 13 ||
          i === 14 ||
          i === 18
        ) {
          //date
          this.columns.push({
            type: "date",
            dateFormat: "DD/MM/YYYY",
            correctFormat: false,
            defaultDate: getToday()
          });
        } else if (i === 3) {
          // NVC
          this.columns.push({
            type: "dropdown",
            source: configCell.find(obj => obj.key === "NVC").name
          });
        } else {
          this.columns.push({});
        }
      }
    }
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
      this.data = [
        [
          "Mã vận đơn",
          "SĐT Khách",
          "Link Sapo",
          "NVC",
          "Link vận chuyển",
          "Trạng thái",
          "Chưa giao được",
          "",
          "",
          "",
          "",
          "",
          "Đang hoàn",
          "",
          "Ngày xử lý tiếp",
          "Ghi chú",
          "Kết quả xử lý",
          "Lưu tạm",
          "Người cập nhật cuối"
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "Ngày NVC giao BT",
          "Ngày xử lý gần nhất",
          "L1",
          "L2",
          "L3",
          "Tình trạng",
          "Ngày kiểm tra hoàn",
          "Ngày NVC báo trả nhưng chưa nhận"
        ]
      ];
      this.data[2] = [];
      for (let i = 0; i < this.colWidths.length; i++) this.data[2].push("");
      this.keyHandsontable += 1;
      this.$toast.success("Khởi tạo dữ liệu thành công!");
    }
  }
};
</script>