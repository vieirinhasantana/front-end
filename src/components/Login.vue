<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm7 md4>
          <v-flex xs12 sm1 md1 offset-xs1 offset-lg1>
            <div class="logo">
              <img src="/static/img/logo.png" alt="" />
            </div>
          </v-flex>
          <div class="left_sign_in">
            <v-flex xs8 offset-xs0 offset-md1 offset-lg2>
              <v-form v-model="valid" v-on:submit.prevent="onSubmit">
                <v-text-field label="Email ID" type="email" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="Senha" type="password" v-model="password" :rules="passwordRules" required></v-text-field>
                <router-link to="forgot" >Esqueceu sua senha?</router-link>
                <v-btn type="submit" class="button button_primary login_btn">Acessar</v-btn>
              </v-form>
            </v-flex>
          </div>
          <footer>
            <v-flex xs12 sm1 md3 offset-md1>
              <h4 class="title_UniBank_alert">Atenção!</h4>
              <p class="text_UniBank">WebPortal não exige a instalação de nenhum software adicional.<br>É aconselhável proteger de malware fingindo Trusteer Rapport.</p>
            </v-flex>
          </footer>
        </v-flex>
        <v-flex xs12 sm5 md8>
          <div class="right_sign_in">
            <div class="text_welcome">
              <p class="text_big">Bem-vindo ao <b>WebPortal</b></p>
              <p class="text_small">Central atendimento ao usuário.</p>
            </div>
            <div class="finally">
              <p><div>© {{ new Date().getFullYear() }} - Todos os direitos reservados.</div></p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" width="500px">
      <v-card>
        <v-card-title class="headline">Oops! Algo errado aconteceu ;(</v-card-title>
        <v-card-text>Sua credêncial parace está incorreta. Verifique-a e tente efetuar login novamente. Caso não consega efetuar login entre em contato com o suporte.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" class="button button_primary" @click.native="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { LoggedIn } from '../utils/authentication.js'
export default {
  data () {
    return {
      dialog: false,
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'Email ID não informado'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Senha não informada.'
      ]
    }
  },
  methods: {
    onSubmit () {
      if ((this.email === '') || (this.password === '')) {
        this.dialog = true
      } else {
        LoggedIn(this.email, this.password)
        .then(result => {
          this.$cookies.set('loggedIn', btoa(this.email))
          this.$cookies.set('token', result.data.TokenAccess)
          this.$router.push('dashboard')
        })
        .catch(err => {
          if (err) {
            this.dialog = true
          }
        })
      }
    }
  }
}
</script>
<style>
html, body{
  overflow: -webkit-paged-y;
}

.primary--text , .theme--light .input-group input{
    color: #922c8a !important;
}
</style>
