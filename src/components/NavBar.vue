<template>
  <div>
    <v-toolbar white class="unibank-navbar" flat height="100">
      <v-toolbar-title class="white--text">
        <img src="/static/img/logo.png" alt="" />
      </v-toolbar-title>
      <v-flex md2 align-justfy offset-md1>
        <v-form>
          <v-text-field light solo prepend-icon="search" placeholder="Search..." class="unibank-search-input"></v-text-field>
        </v-form>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex md2>
        <v-btn flat class="button button_primary button_money_transfer">MONEY TRANSFER</v-btn>  
      </v-flex>
      <v-flex md1>
        <v-btn flat class="button_navbar_unibank" @click="logout">Logout <v-icon right>power_settings_new</v-icon></v-btn>
      </v-flex>
       <v-flex md1>
        <v-btn flat class="button_navbar_unibank" >Logout <v-icon right>power_settings_new</v-icon></v-btn>
      </v-flex>
      <v-flex md1>
        <v-btn flat class="button_navbar_unibank" @click="logout">Logout <v-icon right>power_settings_new</v-icon></v-btn>
      </v-flex>
    </v-toolbar>
  </div>
</template>
<script>
import { logout } from '../utils/authentication'
export default {
  methods: {
    logout: function () {
      if (logout()) {
        this.$router.replace({
          path: '/sign-in'
        })
      }
    }
  }
}
</script>
