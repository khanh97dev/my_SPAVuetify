<template>
  <div id="speed-dial">
    <v-speed-dial
      v-model="fab"
      bottom
      open-on-hover
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">close</v-icon>
          <v-icon v-else>control_camera</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        @click="log('edit')"
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        @click="log('add')"
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        @click="log('delete')"
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>
<script>
export default{
  data(){
    return {
      fab: false,
    }
  },//data
  methods:{
    log(msg){
      console.log(msg)
    },
  },//methods
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #speed-dial{
    position: fixed;
    z-index: 1000;
    bottom: 1rem; right: 1rem;
  }
</style>