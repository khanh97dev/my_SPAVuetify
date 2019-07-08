<style scoped>
  #btn-update{
    position: fixed;
    bottom: 12px;
    right: 70px;
    z-index: 200;
  }
</style>
<template>
  <v-btn id="btn-update" fab dark :loading="loading" color="success" @click="() => $emit('clicked')">
    <v-icon dark>update</v-icon>
  </v-btn>
</template>
<script>
export default{
  props: {
    'loading':{
      default: () => false
    }
  }, // props
}
</script>
