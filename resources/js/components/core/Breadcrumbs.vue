<template>
  <v-breadcrumbs :items="items" class="breadcrumbs" divider="/">
    <template slot="item" slot-scope="props">
      <router-link :to="{ name: props.item.name }" class="link">{{ props.item.breadcrumb }}</router-link>
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
        vm.items = vm.$route.matched.map( item => ({
            breadcrumb: item.meta.breadcrumb,
            name: item.name
          })
        );
        document.title = vm.items.map( item => item.breadcrumb ).join(' - ');
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
