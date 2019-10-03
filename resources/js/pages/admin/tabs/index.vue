<template>
  <div id="tabs">
    <v-tabs>
      <v-tab :to="{'name':'Tabs.1'}">Item One</v-tab>
      <v-tab :to="{'name':'Tabs.2'}">Item Two</v-tab>
    </v-tabs>
    <v-card flat tile>
      <v-card-text>
        <router-view></router-view>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.log()
    },// mounted
    methods: {
      log() {
        console.log(this.$route)
      },
    }, // methods
  }
</script>