<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Nhập Tên</v-card-title>
        <v-card-text>
          <v-text-field
          name="name"
          ref="name"
          label="Tên"
          v-model="name"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" fab @click.native="() => $emit('dialogClose')"><v-icon>close</v-icon></v-btn>
          <v-btn color="primary" fab @click.native="handleDone"><v-icon>done</v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default{
    name: 'DialogConfirmName',
    props: {
      dialog: {
        default: () => false
      }
  }, // props
  data () {
    return {
      name: ''
    };
  },
  methods:{
    handleDone(){
      this.$emit('done', this.name)
      this.name = '';
    }
  },//methods
}
</script>
