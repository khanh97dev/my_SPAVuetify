<style scoped>
  aside{
    z-index: 200 !important;
  }
  .v-list__tile__title {
    text-transform: capitalize
  }
</style>
<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        id="nav"
        :clipped="$vuetify.breakpoint.mdAndUp"
        :floating="false"
        absolute
        app
        v-model="drawer"
      >
        <v-list dense>
          <template v-for="item in items">
            <v-layout
              row
              v-if="item.heading"
              align-center
              :key="item.heading"
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                :to="{name: child.alias}"
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="() => {}" :to="{ name: item.alias }" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        color="red darken-2"
        dark
        app
        absolute
        :clipped-left="$vuetify.breakpoint.mdAndUp"
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <span class="hidden-sm-and-down">Đồ sáng tạo</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-content >
        <slot name="content"></slot>
      </v-content>
      <v-btn fab dark color="cyan" style="z-index: 9999" fixed right bottom @click="scrollTop">
        <v-icon dark>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-app>
  </div>
</template>
<script>
import { log } from 'util';
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: require('./routes').default
    }),
    props: {
      source: String
    },
    methods: {
      scrollTop(){
        let duration = 100
        var scrollStep = -window.scrollY / ( duration / 15),
          scrollInterval = setInterval(function(){
          if ( window.scrollY != 0 ) {
              window.scrollBy( 0, scrollStep );
          }
          else clearInterval(scrollInterval);
        },15);
        // return window.scrollTo(0, 0)
      }
    }
  }
</script>