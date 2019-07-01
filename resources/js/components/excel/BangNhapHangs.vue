<template>
  <div>
    <v-container grid-list-xs>
      <VCard>
        <VCardText>
          <Handsontable
            v-if="data.length"
            :key="keyUpload"
            :changeTable="data"
            :hideCol="hideCol"
            :colHeaders="colHeaders"
            :columns="columns"
            :fixedColumnsLeft="fixedColumnsLeft"
            :columnHeaders="true"
            :colWidths="colWidths"
            :isDelData="true"
            :hiddenRows="false"
            :isDelete="true"
            :mergeCells="[]"
            :colUpdate="false"
            :width="width"
            :title="'Bảng Nhập Hàng'"
            @delData="delData"
            @updateData="updateData"
          />
        </VCardText>
      </VCard>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {
    Handsontable: require("./Handsontable").default
  },
  data() {
    return {
      id: 50,
      data: [],
      baseURL: "/api/excel/data",
      keyUpload: 0,
      hideCol: "",
      fixedColumnsLeft: 1,
      colHeaders: [
        "Mã SKU",// 1
        "Sản Phẩm",// 2
        "NCC",// 3
        "Link",// 4
        "Giá gốc",// 5
        "Giá nhập",// 6
        "NCC",// 7
        "Link",// 8
        "Giá gốc",// 9
        "Giá nhập",// 10
        "NCC",// 11
        "Link",// 12
        "Giá gốc",// 13
        "Giá nhập",// 14
        "NCC",// 15
        "Link",// 16
        "Giá gốc",// 17
        "Giá nhập",// 18
        "NCC",// 19
        "Link",// 20
        "Giá gốc",// 21
        "Giá nhập",// 22
        "Ghi Chú"// 23
      ],
      columns: [
        {},//1
        {},//2
        {//3
					type: 'dropdown',
					source: ['Nhà CC 1',  'Nhà CC 2', 'Nhà CC 3', 'Nhà CC 4', 'Nhà CC 5'],
					strict: true,
				},
        {},//4
        {},//5
        {},//6
        {//7
					type: 'dropdown',
					source: ['Nhà CC 1',  'Nhà CC 2', 'Nhà CC 3', 'Nhà CC 4', 'Nhà CC 5'],
					strict: true,
				},
        {},//8
        {},//9
        {},//10
        {//11
					type: 'dropdown',
					source: ['Nhà CC 1',  'Nhà CC 2', 'Nhà CC 3', 'Nhà CC 4', 'Nhà CC 5'],
					strict: true,
				},
        {},//12
        {},//13
        {},//14
        {//15
					type: 'dropdown',
					source: ['Nhà CC 1',  'Nhà CC 2', 'Nhà CC 3', 'Nhà CC 4', 'Nhà CC 5'],
					strict: true,
				},
        {},//16
        {},//17
        {},//18
        {//19
					type: 'dropdown',
					source: ['Nhà CC 1',  'Nhà CC 2', 'Nhà CC 3', 'Nhà CC 4', 'Nhà CC 5'],
					strict: true,
				},
        {},//20
        {},//21
        {},//22
        {}//23
      ],
      colWidths: [
        180, 210,
        100, 100, 75, 75, 
        100, 100, 75, 75, 
        100, 100, 75, 75, 
        100, 100, 75, 75, 
        100, 100, 75, 75, 
        100
      ],
      width: "100%"
    };
  },
  mounted() {
    this.columns.forEach( (item, index) => {
      if( index === 3 || index === 7 || index === 11 || index === 15 || index === 19 ){
          item.renderer = function(instance, td, row, col, prop, value, cellProperties) {
            if(value.length === 0 || !value.includes('http')) return td.textContent = value
            return td.innerHTML = `<a class="primary--text" target="_blank" href="${value}">${value}</a>` 
          }
        }
    })
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .post(this.baseURL, { id: this.id })
        .then(response => {
          if (response.data.json) {
            let json = JSON.parse(response.data.json);
            this.data = json.data
            this.keyUpload += 1;
          } else this.createDataDemo();
        })
        .catch(() => {
          this.createDataDemo();
        });
    },
    createDataDemo() {
      let idTonKho = 20; // get data TỒN KHO
      axios
        .post(this.baseURL, { id: idTonKho })
        .then(response => {
          let data = JSON.parse(response.data.json);
          let name = [],
            sku = [];
          data.forEach(item => {
            name.push(item[0]);
            sku.push(item[1]);
          });
          this.colWidths = [];
          for (let i = 0; i < name.length; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.colHeaders.length; j++) {
              if (i === 0) {
                if (j === 0) {
                  this.colWidths.push(150);
                } else if (j === 1) this.colWidths.push(210);
                else this.colWidths.push(100);
              }
              if (j === 0) this.data[i].push(sku[i]);
              else if (j === 1) this.data[i].push(name[i]);
              else this.data[i].push("");
            }
          }
        })
        .then(() => {
          let data = this.data;
          this.data = [];
          this.data = data;
          this.updateData(data)
        });
    },
    updateData(data) {
      let id = this.id;
      let headers = {
        colHeaders: this.colHeaders,
        columns: this.columns,
        colWidths: this.colWidths
      }
      let obj = {
        headers,
        data
      }
      let jsonString = JSON.stringify(obj);
      let upData = { id, json: jsonString, check_update: 1 };
      axios
        .post("/api/excel/data", upData)
        .then(response => {
          this.$toast.success("Cập nhật thành công!", {
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
              this.keyUpload += 1;
              this.data = [];
              this.$toast.success("Xóa thành công!", {
                queueable: true
              });
              this.createDataDemo();
            }
          })
          .catch(err => this.$toast('Lỗi: '+ err));
      }
      return;
    },
  }
};
</script>
