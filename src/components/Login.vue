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
          <v-flex xs8 offset-xs0 offset-md1 offset-lg2>
            <v-form v-model="valid">
              <v-text-field label="Email ID" v-model="email" :rules="emailRules"required></v-text-field>
              <v-text-field label="Senha" v-model="password" :rules="passwordRules" required></v-text-field>
            </v-form>
          </v-flex>
        </v-flex>
        <v-flex xs12 sm5 md8>
          <div class="right_sign_in">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        valid: false,
        email: '',
        emailRules: [
          (v) => !!v || 'Email ID não informado',
          (v) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Senha não informada.',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  }
</script>