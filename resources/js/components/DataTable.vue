<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="users"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">
        <v-avatar size="42">
          <img :src="randomAvatar()" alt="avatar">
        </v-avatar>
      </td>
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.phone }}</td>
      <td class="text-xs-left">{{ props.item.company.name }}</td>
      <td class="text-xs-left">{{ props.item.website }}</td>
      <!-- <td class="text-xs-left">{{ props.item.address.city }}</td> -->
    </template>
  </v-data-table>
</template>

<script>

const avatars = [

];

export default {
  name: 'data-table',
  data() {
    return {
      users: [],
      headers: [
        {
          value: 'Avatar',
          align: 'left',
          sortable: false
        },
        {
          text: 'Name',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: 'User Name',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: 'Email',
          value: 'Email',
          align: 'left',
          sortable: true
        },
        {
          text: 'Phone',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
        {
          text: 'Company',
          value: 'Company',
          align: 'left',
          sortable: true
        },
        {
          text: 'Website',
          value: 'Website',
          align: 'left',
          sortable: true
        }
      ]
    }
  },

  methods: {
    randomAvatar () {

      return avatars[Math.floor(Math.random() * avatars.length)];
    }
  },

  created() {
    const vm = this;

    vm.axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      var result = response && response.data;

      vm.users = result;
    });
  }
}
</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
