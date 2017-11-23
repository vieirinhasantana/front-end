<template>
    <div class="app-content page-login">
        <div class="img-logo"></div>
        <section class="main-content">
            <div class="login-box">
                <form v-on:submit.prevent="onSubmit" id="login-form" data-preload>
                    <fieldset name="MDLForms">
                        <div class="form-block">
                            <div class="input-field">
                                <div class="mdl-textfield mdl-textfield--AR mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" v-model="email" type="email" name="sample-valmd1" id="login">
                                    <label class="mdl-textfield__label" for="login">Email ID</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="input-field">
                                <div class="mdl-textfield mdl-textfield--AR mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" v-model="password" type="password" name="sample-valmd1" id="password">
                                    <label class="mdl-textfield__label" for="password">Senha</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div class="login-box__remember">
                        <input type="checkbox" data-icheck="true" name="remember_login" id="login-box__remember">
                        <span>Lembrar-me</span>
                    </div>
                        <button type="submit" class="btn btn--submit btn--s-extra-large btn--primary mdl-button mdl-js-button mdl-js-ripple-effect">Acessar conta</button>
                    <div class="link-group">
                        <a class="password-reset" title="Recuperar minha senha">Recuperar minha senha.</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
<script>
import { sign } from '../utils/api.js'
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      if ((!this.email) || (!this.password)) {
        this.$swal({icon: 'warning', title: 'Atenção', text: 'Você não preencheu todos os campos. Verifique e tente novamente!', type: 'warning', confirm: true})
      } else {
        sign(this.email, this.password).then(result => {
          this.$cookies.set('email', this.email)
          this.$cookies.set('token', result.data.Token)
          this.$router.push('dashboard')
        })
        .catch(error => {
          if (error) {
            this.$swal({icon: 'error', title: 'Credências Inválidas', text: 'Usuário e/ou Senha inválido(s) para acesso. Verifique e tente novamente.', type: 'error', confirm: true})
          }
        })
      }
    }
  }
}
</script>