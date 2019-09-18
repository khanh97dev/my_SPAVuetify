<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <toolbar @clicked="() => console.log('ok')"/>
          <navigation/>
          <v-content>
            <breadcrumbs />
            <transition
              name="fade"
              mode="out-in"
            >
              <router-view/>
            </transition>
            <page-footer />
          </v-content>
        </div>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view/>
          </transition>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>
<script>
  export default {
    watch: {
      'drawer'(show){
        console.log(show);
        this.$store.commit('app/sidebar', show)
      },
    },//watch
    data(){
      return {
        drawer: true,
      }
    },//data
    methods:{
      toggleSidebar(){
        alert('ok')
        this.drawer = !this.drawer;
        this.$store.commit['app/sidebar', this.drawer];
      }
    },//methods
  }
</script>