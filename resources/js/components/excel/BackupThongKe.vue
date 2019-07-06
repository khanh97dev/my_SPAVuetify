<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs9>
          <v-autocomplete
            v-model="model"
            :items="items"
            item-text="title"
            chips
            clearable
            hide-details
            hide-selected
            box
            return-object
            z-index="1000"
          >
            <template slot="selection" slot-scope="data">
              <v-chip>{{ data.item.title }} - {{ data.item.created_at }}</v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-tile-content v-text="data.item"></v-list-tile-content>
              </template>
              <template v-else>
                <v-list-tile-content>
                  <v-list-tile-title v-html="data.item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="data.item.created_at"></v-list-tile-sub-title>
                </v-list-tile-content>
              </template>
            </template>
          </v-autocomplete>
        </v-flex>
        <v-flex offset-xs1 xs2>
          <v-btn color="success" @click="restore()" :loading="loadingRestore">Khôi phục</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <Handsontable
      v-if="data.length"
      :key="key"
      :changeTable="data"
      :isDelData="true"
      @delData="deleteData"
      :colHeaders="true"
      :colWidths="colWidths"
      :hiddenRows="false"
      :showReadOnly="false"
      :title="model.title + model.created_at"
    />
    <VSnackbar
      bottom right
      color="success"
      :timeout="2000"
      v-model="snackbar"
    >
      {{ nameSnackbar }}
      <VBtn flat color="error" @click.native="snackbar = false">Close</VBtn>
    </VSnackbar>
  </div>
</template>

<script>
export default {
  watch: {
    model(val) {
      if (val.id === undefined) return;
      this.data = [];
      let id = val.id;
      this.fetchDataDetail(id);
      return val
    }
  },
  data: () => ({
    url: "/api/backup-excel/",
    model: "",
    colWidths: [300, 150, 150, 100, 150],
    key: 0,
    data: [],
    items: [],
    loadingRestore: false,
    snackbar: false,
    nameSnackbar: ''
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.post(`${this.url}listdata`).then(response => {
        this.data = [];
        this.items = response.data;
      });
    },
    fetchDataDetail(id) {
      axios.post(`${this.url}data`, { id }).then(response => {
        let data = JSON.parse(response.data.json);
        if (data === undefined) return;
        this.data = data;
      });
    },
    deleteData() {
      if (typeof this.model === "object") {
        var id = this.model.id;
        var title = this.model.title;
      }
      if (confirm(`Xóa: ${title}`))
        return axios.post(`${this.url}delete`, { id }).then(response => {
          this.fetchData();
        });
    },
    restore(){
      let id = this.model ? this.model.id : 0
      if(id){
        this.loadingRestore = true
        return axios.post(`${this.url}restore`, { id }).then(response => {
          let status = response.data.status
          if(status) {
            this.$toast.success("Thành công!", {
              queueable: true
            });
          }
          this.loadingRestore = false
        }).catch( err => console.log(err));
      }
    }
  }
};
</script>