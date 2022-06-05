<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height id="login-container">
        <v-layout align-center>
          <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 xl2 offset-xl5>
            <v-card class="elevation-20">
              <v-toolbar dark color="red accent-4">
                <v-list-tile-avatar size=48>
                  <img src="../../assets/logos/spear/spear-logo.png" >
                </v-list-tile-avatar>
                <v-toolbar-title class="ml-0">{{title}}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-expansion-panel>
                  <v-expansion-panel-content v-for="(infoBlock,i) in infoBlocks" :key="i" :value="i === -1">
                    <div slot="header" class="bold">
                      <v-icon class="mr-3" color="red accent-4">{{infoBlock.icon}}</v-icon>
                      {{infoBlock.header}}
                    </div>
                    <v-card>
                      <v-card-text>{{infoBlock.text}}</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-card-text>
              <v-divider/>
              <v-card-text>
                <v-form v-model="valid" ref="loginForm">
                  <v-text-field
                    color="red accent-4"
                    prepend-icon="person"
                    v-model="username"
                    :counter=10
                    :rules="usernameRules"
                    name="username"
                    label="Username"
                    type="text"
                    required
                  />
                  <v-text-field
                    color="red accent-4"
                    v-on:keyup.enter="onEnterClick"
                    prepend-icon="lock"
                    v-model="password"
                    name="password"
                    :rules="passwordRules"
                    label="Password"
                    id="password"
                    type="password"
                    required
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="white--text" outline @click="clear" color="red accent-4">Clear</v-btn>
                <v-btn class="white--text" @click="submit" :loading="loading" color="red accent-4" :disabled="!valid">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar bottom right multi-line v-model="snackbar">
      {{snackbarMessage}}
      <v-btn flat color="red accent-4" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Login',
  data () {
    return {
      title: this.$store.state.ui.loginTitle,
      infoBlocks: this.$store.state.ui.loginInfoBlocks,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 5) || 'Username must be 5 or more characters',
        v => (v && v.length <= 10) || 'Username cannot exceed 10 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      valid: false,
      loading: false,
      snackbar: false,
      snackbarMessage: ''
    }
  },
  methods: {
    onEnterClick () {
      this.submit()
    },
    submit () {
      let self = this
      this.hideSnackbar()
      this.loading = true
      if (this.$refs.loginForm.validate()) {
        this.loading = true
        this.$store.dispatch('auth/login', {username: self.username, password: self.password})
          .then(() => {
            this.loading = false
            if (this.$router.history.current.query.redirect) {
              this.$router.push({path: this.$router.history.current.query.redirect})
            } else {
              this.$router.push({name: 'Demo'})
            }
          })
          .catch((error) => {
            this.loading = false
            this.setSnackbarMessage(error.message)
          })
      }
    },
    clear () {
      this.hideSnackbar()
      this.loading = false
      this.$refs.loginForm.reset()
    },
    setSnackbarMessage (message) {
      this.snackbarMessage = message
      this.snackbar = true
    },
    hideSnackbar () {
      this.snackbar = false
    }
  },
  computed: {
    buildInfo () {
      return 'Build on ' +
        new Date(parseInt(process.env.BUILD_TIME_UNIX_TIMESTAMP)).toLocaleString() +
        ' (' + moment(parseInt(process.env.BUILD_TIME_UNIX_TIMESTAMP)).fromNow() + ') ' +
        ' from commit #' + process.env.BUILD_TIME_COMMIT_HASH.slice(0, 8)
    }
  },
  created () {
    if (this.$store.state.auth.authenticated) {
      if (this.$router.history.current.query.redirect) {
        this.$router.push({path: this.$router.history.current.query.redirect})
      } else {
        this.$router.push({name: 'Demo'})
      }
    }
    this.setSnackbarMessage(this.buildInfo)
  }
}
</script>
<style>
  #login-container {
    background: url('../../assets/backgrounds/rotterdam3.jpg') no-repeat;
    background-size: cover;
  }
</style>
