<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <toolbar @clicked="drawer = !drawer"/>
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
  import { settings } from '~/config.js'
  export default {
    watch: {
      'drawer'(show){
        this.$store.commit('app/sidebar', show);
      },
    },//watch
    data: () => ({
      mini: false,
      drawer: true,
    }),
  }
</script>
