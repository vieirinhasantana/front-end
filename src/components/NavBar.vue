<template>
  <div>
    <v-toolbar white class="unibank-navbar" flat height="100">
      <v-toolbar-title class="white--text">
        <img src="/static/img/logo.png" alt="" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="button button_primary button_money_transfer">
        MONEY TRANSFER
      </v-btn>
      <v-badge overlap >
        <span slot="badge">3</span>
        <v-btn icon class="button_navbar_unibank">
          <v-icon>chat_bubble_outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn flat class="button_navbar_unibank">Logout <v-icon right>power_settings_new</v-icon></v-btn>
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
