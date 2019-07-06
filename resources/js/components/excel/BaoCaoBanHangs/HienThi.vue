<template>
  <div>
    <ThemFileExcel @sendData="fetchData"/>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container fluid>
          <v-card>
            <v-card-title primary-title>
              <v-chip label color="success" text-color="white">
                <v-icon left>table_chart</v-icon>
                <h1>Bảng hiển thị dữ liệu</h1>
              </v-chip>
            </v-card-title>
            <v-card-text>
              <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
              <v-data-table
                v-if="data"
                :items="data"
                :headers="headers"
								:loading="loading"
                class="elevation-1"
                hide-actions
              >
                <template slot="headers" slot-scope="props">
                  <tr>
                    <th v-for="(header, index) in props.headers" :key="index">
                      <v-layout color="blue" v-if="index === 0" text-xs-right>
                        <span class="black--text font-weight-bold">{{ header.text }}</span>
                      </v-layout>
                      <template v-else>
                        <span class="black--text font-weight-bold">{{ header.text }}</span>
                      </template>
                    </th>
                  </tr>
                </template>
                <template v-slot:items="props">
                  <td>{{ props.index + 1 }}</td>
                  <td class="text-xs-center">{{ props.item.name }}</td>
                  <td class="text-xs-center">{{ props.item.updated_at }}</td>
                  <td class="text-xs-center">
                    <v-btn round color="error" @click="delItem(props.item)" small dark>Xóa</v-btn>
                    <v-btn round color="primary" @click="viewItem(props.item)" small dark>Xem</v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark color="error" @click="dialog = false" text-xs-right>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <VCard>
          <VCardTitle primary-title>
            <v-layout align-center centered justify-center>
              <Handsontable
                v-if="valUploaded"
                :key="keyUpload"
                :changeTable="valUploaded"
                :columnHeaders="columnHeaders"
                :colHeaders="colHeaders"
                :hiddenRows="false"
                :showReadOnly="false"
                :colWidths="colWidths"
                :title="'Báo cáo bán hàng'"
              />
            </v-layout>
          </VCardTitle>
        </VCard>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {
    ThemFileExcel: require('./ThemFileExcel').default,
  },
  data: () => ({
    baseURL: "/api/excel/bao-cao-ban-hangs/",
    loading: false,
    dialog: false,
    name: "",
    data: "",
    keyUpload: "",
    valUploaded: "",
    columnHeaders: "",
    colHeaders: "",
    colWidths: "",
    IDitem: "",
    headers: [
      { text: "#" },
      { text: "Tên", value: "name" },
      { text: "Ngày cập nhật", value: "updated_at" }
    ]
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true
      axios.post(this.baseURL + "data").then(response => {
        this.loading = false
        return (this.data = (response.data).reverse());
      });
    },
    viewItem(object) {
      this.dialog = true;
      let id = (this.IDitem = object.id);
      let data = { id };
      axios.post(this.baseURL + "data-detail", data).then(response => {
        let data = JSON.parse(response.data.json);
        return this.commitHandsontable(data);
      });
    },
    commitHandsontable(val) {
      if (val) {
        let arr = [
          [
            "Mã SKU",
            "Tên sản phẩm",
            "SL hàng thực bán",
            "Doanh số",
          ],
          [150, 180, 150, 150]
        ];
        this.colFirst = this.colHeaders = arr[0];
        this.colWidths = arr[1];
      }
      this.valUploaded = val;
      this.keyUpload += 1;
    },
    delItem(object) {
			let id = (this.IDitem = object.id);
			let name = this.name = object.name;
			if(confirm('Xóa: '+name)){
				let data = { id }
				this.loading = true
				axios.post(this.baseURL+'delete', data).then( response => {
					let status = response.data.status
					if(status){
						this.data = this.data.filter( item => item.id !== id )
						this.loading = false
					}
				}).catch( err => console.log(err))
			}
    }
  }
};
</script>