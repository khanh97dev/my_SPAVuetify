<template>
  <v-breadcrumbs :items="items" class="breadcrumbs" divider="/">
    <template slot="item" slot-scope="props">
      <router-link :to="{ path: props.item.path }" class="link">{{ props.item.breadcrumb }}</router-link>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'breadcrumbs',
  data() {
    return {
      items: []
    }
  },

  watch: {
    '$route' () {
      const vm = this;

      vm.updateBreadcrumbs();
    }
  },

  mounted() {
    const vm = this;

    vm.updateBreadcrumbs();
    // update title
  },

  methods: {
    updateBreadcrumbs() {
      const vm = this;
      let title = [];

      // vm.items = vm.$route.meta.breadcrumb;
      if(vm.$route.matched.length){
        vm.items = vm.$route.matched.map( route => {
          let path = route.path.split('/').pop();
          if(path == ':id?' ) path = vm.$route.params.id;
          return {
            breadcrumb: path,
            path: route.path
          }
        });
      }
    }
  }
}
</script>

<style scoped>
  .breadcrumbs .link {
    text-decoration: none;
    color: #737373;
    font: bold 24px Sans-Serif;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-block;
    position: relative;
  }
</style>
