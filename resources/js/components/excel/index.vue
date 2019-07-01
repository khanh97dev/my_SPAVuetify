<template>
  <LayoutVue>
    <v-flex slot="content" row>
      <router-view></router-view>
    </v-flex>
  </LayoutVue>
</template>
<script>
export default {
  components: {
    LayoutVue: require("../../layouts/master.vue").default
  },
}
</script>