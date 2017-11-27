<template>
    <div class="app-content page-dashboard dashboard--vue app-content--gridstack">
    <section class="main-head">
    <div class="burgericon">
        <a class="">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </a>
    </div>
    <ul class="breadcrumbs">
        <li class=""><a>Dashboard</a></li>
    </ul>
    <div class="item-grp item-grp--40">
        <div class="client-area">
            <div class="item-grp-single" data-tooltip-inline="Notificações" data-tooltip-my-position="top left" data-tooltip-target-position="bottom right">
                <span class="badge badge--top-right badge--md badge--green">5</span>
                <div class="mdl-js-button mdl-js-ripple-effect" id="main-notifications">
                    <div class="main-head__alerts"><i class="zmdi zmdi-notifications-active"></i></div>
                </div>
            </div>
            <div class="item-grp-single" data-tooltip-inline="Alertas">
                <span class="badge badge--top-right badge--md badge--green">9</span>
                <div class="mdl-js-button mdl-js-ripple-effect" id="main-alerts">
                    <div class="main-head__settings"><i class="zmdi zmdi-alert-triangle"></i></div>
                </div>
            </div>
            <div class="item-grp-single">
                <div class="ddown ddown--user">
                    <div class="ddown__init ddown__init--clean mdl-js-button mdl-js-ripple-effect">
                        <div class="avatar avatar--xs">
                            <img src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png" alt="Avatar">
                        </div>
                    </div>
                    <div class="ddown__content">
                        <ul class="ddown__menu">
                            <li class="ddown__header">
                                <a class="mdl-js-button mdl-js-ripple-effect">
                                    <div class="flex-block">
                                        <div class="flex-block__content">
                                            <span class="flex-block__title">{nome usuário}</span>
                                            <span class="flex-block__desc">{email usuário}</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="mdl-js-button mdl-js-ripple-effect">
                                    <i class="zmdi zmdi-file-plus"></i> Ver Perfil
                                </a>
                            </li>
                            <li>
                                <a class="mdl-js-button mdl-js-ripple-effect">
                                    <i class="zmdi zmdi-email"></i> E-mail
                                </a>
                            </li>
                            <li class="ddown__footer">
                                <a @click="logout" class="mdl-js-button mdl-js-ripple-effect">
                                    <i class="zmdi zmdi-sign-in"></i> Sair
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>
<script>
import { logout } from '../utils/authentication'
export default {
  methods: {
    logout: function () {
      if (logout()) {
        this.$router.push('sign-in')
      }
    }
  }
}
</script>
