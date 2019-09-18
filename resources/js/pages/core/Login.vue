<template>
  <v-app id="login" class="blue-grey lighten-1">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" alt="Vue Material Admin" width="180" height="180">
                  <h1 class="flex my-4 primary--text">Vue Admin Template</h1>
                </div>
                <login-form @success="success"></login-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar
        v-text="result"
        v-model="showResult"
        :timeout="2000"
        top>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
  import LoginForm from '$comp/auth/login/LoginForm'
  export default {

    components: {
      LoginForm
    },

    data() {
      return {
        loading: false,
        userEmail: 'admin@yopmail.com',
        password: '123456',
        hidePassword: true,
        error: false,
        showResult: false,
        result: '',
        rules: {
          required: value => value || 'Required.'
        }
      }
    },

    methods: {
      login() {
        const vm = this;

        if (!vm.userEmail || !vm.password) {

          vm.result = "Email and Password can't be null.";
          vm.showResult = true;

          return;
        }

        if (vm.userEmail === vm.$root.userEmail && vm.password === vm.$root.userPassword) {
          vm.$router.push({ name: 'Dashboard' });
        }
        else {
          vm.error = true;
          vm.result = "Email or Password is incorrect.";
          vm.showResult = true;
        }
      },

      success(data) {
        this.$store.dispatch('auth/saveToken', data)
        this.$store.dispatch('auth/setUser', data)
        this.$router.push({ name: 'admin' })
      }
    }
  }
</script>

<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
