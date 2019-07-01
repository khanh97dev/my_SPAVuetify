<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container fluid>
          <v-card>
            <v-card-title primary-title>
              <v-chip label color="success" text-color="white">
                <v-icon left>add</v-icon>
                <h1>Thêm File Excel</h1>
              </v-chip>
            </v-card-title>
            <v-card-text>
              <ImportExcel @uploaded="handleVal"/>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
  </v-layout>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Tạo dữ liệu mới</v-card-title>
        <v-card-text>
          <VTextField v-model="name" label="Tạo Tên" @keydown.enter="createData" ref="input"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="createData" :loading="loading">Tạo</v-btn>
          <v-btn color="error" flat @click="dialog = false">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  components: {
    ImportExcel: require("../ImportExcel.vue").default,
  },
  data: () => ({
    baseURL: "/api/excel/bao-cao-ban-hangs/",
    loading: false,
    dialog: false,
    name: '',
    data: '',
  }),
  methods: {
    handleVal(val){
      this.$refs.input.focus()
      val.splice(0, 1)
      val.forEach((item, index) => {
        item.splice(2, 1)
        item.splice(3, 1)
        item.splice(4, 1)
        return item
      });
      this.dialog = true
      return this.data = val
    },
    createData() {
      if(!this.name.replace(/\s+/g, '')) return;
      this.loading = true;
      let data = {
        name: this.name,
        json: JSON.stringify(this.data)
      }
      axios.post(this.baseURL+'create', data).then(() => {
        this.loading = this.dialog = false
        this.name = ''
        this.$emit('sendData')
      }).catch( err => {
        this.loading = this.dialog = false
        console.log(err)
      })
    }
  }
};
</script>