<template>
  <div>
    <v-layout column>
      <v-container grid-list-xs>
        <VToolbar color="light">
          <VToolbarTitle>Chọn giá trị xuất:</VToolbarTitle>
          <v-layout row ml-2>
            <v-flex xs2>
              <v-select
                z-index="300"
                :items="items"
                v-model="count"
                autocomplete
                chips
                style="width: auto; height: 0px; margin-top: -12px;"
              ></v-select>
            </v-flex>
            <v-flex xs12>
              <v-btn small color="info" @click="exportAll()">Xem File</v-btn>
            </v-flex>
          </v-layout>
        </VToolbar>
      </v-container>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card color="light">
						<v-card-text>
							<v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
							<template v-else-if="valUploaded">
								<Handsontable
                  v-if="valUploaded"
									:key="keyUpload"
									:changeTable="valUploaded"
									:columnHeaders="columnHeaders"
									:hideCol="hideCol"
									:colHeaders="colHeaders"
									:hiddenRows="false"
									:showReadOnly="false"
									:colWidths="colWidths"
									:title="'Tổng thống kê trong tháng'"
								/>
							</template>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
    </v-layout>
    <VSnackbar
      bottom right
      :timeout="2000"
      color="success"
      v-model="snackbar"
    >
      {{ nameSnackbar }}
      <VBtn dark flat @click.native="value = false">Close</VBtn>
    </VSnackbar>
  </div>
</template>
<script>
export default {
  components: {
    'Handsontable': require("../Handsontable").default
  },
  data: () => ({
    id: 30,
    data: [],
		total: 0,
		count: 0,
		loading: false,
    baseURL: "/api/excel/bao-cao-ban-hangs/",
    snackbar: false,
    nameSnackbar: '',
		// Handsontable
		keyUpload: '',
		valUploaded: '',
		columnHeaders: true,
		hideCol: '',
		colHeaders: '',
		colWidths: '',
		// End Handsontable
  }),
  watch: {
    count(val) {
    }
  },
  computed: {
    items() {
      let items = [];
      if (this.total) {
        items = Array.from({ length: this.total }, (value, index) => index + 1);
      }
      return items;
    },
  },
  mounted() {
    this.getCountData();
  },
  methods: {
    getCountData() {
      axios.post(this.baseURL + "total").then(response => {
				let total = response.data;
				this.count = total < 5 ? total : 5;
        return (this.total = total);
      });
    },
    async fetchData() {
      let data = {
        count: this.count
      };
      if (this.count) {
        return await axios.post(this.baseURL + "data-count", data).then(response => {
					this.data = []
          let data = response.data;
          data.forEach((item, index) => {
            this.data[index] = JSON.parse(item.json);
          });
        });
      }
    },
    exportAll() {
      this.loading = true
      this.fetchData().then(() => {
				this.data.forEach((item, index) => {
					return item.forEach( (data) => {
						// data.splice(posRemove, 1) // position 3 doanh thu
						if(index){
              let indexAdd = index * 2
              data[2 + indexAdd] = data[2]
              data[3 + indexAdd] = data[3]
							delete data[2]
							delete data[3]
            }
						return data
					})
				});
			}).then( () => {
				this.data = [].concat(...this.data)
				let results = []
				this.data = this.data.reduce( (r, item) => {
						r[item[0]] = [...r[item[0]] || '', item]
					// let id = item[0].toString();
					// r[id] = r[id] !== undefined ? [r[id].concat([item])] : [item];
					return r
				}, []);
				for( let i in this.data){
          let data = Object.assign(...this.data[i])
					results.push(data)
        }
        let array = [
          ['Mã SKU', 'Tên sản phẩm',],
          [150,       250]
        ]
        let rowsResults = results[0].length,
          j = 0;
        // console.log('rowsResults', rowsResults - 2)\
        for(let i = rowsResults - 1; i >= 0; i--){
          if( i > 1){
            if(i & 1){
              j++
              array[0].push('SL bán ' +j )
              array[0].push('Doanh số ' +j )
            }
            array[1].push(120)
          }
        }
        this.colHeaders = array[0];
        this.colWidths = array[1]
        this.keyUpload += 1
        this.loading = false
        this.valUploaded = results
        let obj = {
          headers:array,
          data: results
        }
        this.updateData(obj)
			});
    },
    updateData(val) {
      let id = this.id;
      let json = JSON.stringify(val);
      let data = { id, json, check_update: 1 };
      axios
        .post("/api/excel/data", data)
        .then(response => {
          this.snackbar = true
          this.nameSnackbar = 'Đã cập nhật'
        })
        .catch(err => console.error(err));
    },
  }
};
</script>
