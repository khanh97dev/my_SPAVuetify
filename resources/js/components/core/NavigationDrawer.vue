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
              <v-list-tile-name class="item-name">{{ item.name }}</v-list-tile-name>
            </v-list-tile>
            <template v-for="(child, i) in item.children">
              <v-list-tile :to="{ path: child.path }">
                <v-list-tile-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-name class="item-name">{{ child.name }}</v-list-tile-name>
              </v-list-tile>
            </template>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-tile :to="{ path: item.path }">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-name class="item-name">{{ item.name }}</v-list-tile-name>
          </v-list-tile>
        </template>
      </template>

      <v-list-group prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-name class="item-name">Authorization</v-list-tile-name>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-name class="item-name">403</v-list-tile-name>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-name class="item-name">404</v-list-tile-name>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-name class="item-name">500</v-list-tile-name>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: '/login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-name class="item-name">Login</v-list-tile-name>
        </v-list-tile>
      </v-list-group>

      <v-list-group prepend-icon="account_circle">
        <v-list-tile slot="activator">
          <v-list-tile-name class="item-name">Users</v-list-tile-name>
        </v-list-tile>
        <v-list-tile
          v-for="(admin, i) in admins"
          :key="i"
          @click="$router.push({ name: admin.path })"
        >
          <v-list-tile-action>
            <v-icon v-text="admin.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-name v-text="admin.name"></v-list-tile-name>
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
          { name: 'Dashboard', icon: 'dashboard', path: 'admin/Dashboard' },
          { name: 'Tabs', icon: 'tab', path: 'Tabs' },
          { name: 'Calendar', icon: 'calendar_today', path: '/admin/Calendar' },
          { name: 'Mailbox', icon: 'inbox', path: '/admin/Mailbox' },
          { name: 'Widgets', icon: 'pageview', children: [
            { name: 'Social', icon: 'group', path: '/admin/Social' },
            { name: 'Chart', icon: 'bar_chart', path: '/admin/Chart' },
            { name: 'Media', icon: 'perm_media', path: '/admin/Media' }
          ] },
          { name: 'Overlays', icon: 'select_all', children: [
            { name: 'Snackbar', icon: 'event_note', path: '/admin/Snackbar' }
          ] },
        ],
        admins: [
          {
            name: 'Management', icon: 'people_outline', path: '/admin/management'
          },
          {
            name: 'Settings', icon: 'settings', path: '/admin/profile'
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
      changeRoute(path, selectedIndex) {
        const vm = this;

        vm.selectedIndex = selectedIndex;

        return vm.$router.push({
          name: path
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

  .item-name {
    font-size: 17px;
    font-weight: 500;
  }

  .item-sub-name {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>