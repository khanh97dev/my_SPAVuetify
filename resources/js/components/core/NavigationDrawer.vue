<template>
  <v-navigation-drawer
    :value="drawer"
    absolute
    z-index="1000"
    app
  >
    <v-toolbar
      flat
      dark
      :color="$root.themeColor"
      class="toolbar"
    >
      <router-link :to="{ name: 'Dashboard' }">
        <img
          src="https://cdn.worldvectorlogo.com/logos/vue-9.svg"
          width="36px"
        ></img>
      </router-link>
      <router-link
        :to="{ name: 'Dashboard' }"
        class="text"
      >
        Hkdark
      </router-link>
    </v-toolbar>
    <v-list>
      <template v-for="(item, i) in items">
        <template v-if="item.children">
          <v-list-group :prepend-icon="item.icon">
            <v-list-tile slot="activator">
              <v-list-tile-title class="item-title">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
            <template v-for="(child, i) in item.children">
              <v-list-tile :to="{ name: child.routeName }">
                <v-list-tile-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title class="item-title">{{ child.title }}</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile :to="{ name: item.routeName }">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="item-title">{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </template>
      </template>

      <v-list-group prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Login</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="account_circle">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          v-for="(admin, i) in admins"
          :key="i"
          @click="$router.push({ name: admin.routeName })"
        >
          <v-list-tile-action>
            <v-icon v-text="admin.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="admin.title"></v-list-tile-title>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        drawer: this.$store.state.app.sidebar,
        selectedIndex: 1,
        items: [
          { title: 'Dashboard', icon: 'dashboard', routeName: 'Dashboard' },
          { title: 'Tabs', icon: 'tab', routeName: 'Tabs' },
          { title: 'Calendar', icon: 'calendar_today', routeName: 'Calendar' },
          { title: 'Mailbox', icon: 'inbox', routeName: 'Mailbox' },
          { title: 'Widgets', icon: 'pageview', children: [
            { title: 'Social', icon: 'group', routeName: 'Social' },
            { title: 'Chart', icon: 'bar_chart', routeName: 'Chart' },
            { title: 'Media', icon: 'perm_media', routeName: 'Media' }
          ] },
          { title: 'Overlays', icon: 'select_all', children: [
            { title: 'Snackbar', icon: 'event_note', routeName: 'Snackbar' }
          ] },
        ],
        admins: [
          {
            title: 'Management', icon: 'people_outline', routeName: 'management'
          },
          {
            title: 'Settings', icon: 'settings', routeName: 'profile'
          },
        ]
      }
    },
    mounted(){
      const vm = this;

      vm.toggleSidebar();
    },// mounted
    methods: {
      toggleSidebar(){
        const vm = this;
        vm.$parent.$on('sidebar', status => {
          vm.drawer = status;
          vm.$store.commit('app/sidebar', status);
        });
      },
      changeRoute(routeName, selectedIndex) {
        const vm = this;

        vm.selectedIndex = selectedIndex;

        return vm.$router.push({
          name: routeName
        });
      }
    }
  }
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration: none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }

  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>