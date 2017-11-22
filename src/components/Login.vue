<template>
    <div class="app-content page-login">
        <div class="img-logo"></div>
        <section class="main-content">
            <div class="login-box">
                <form action="" method="get" id="login-form" data-preload>
                    <fieldset name="MDLForms">
                        <div class="form-block">
                            <div class="input-field">
                                <div class="mdl-textfield mdl-textfield--AR mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" placeholder="" type="text" name="sample-valmd1" id="login">
                                    <label class="mdl-textfield__label" for="login">Email ID</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="input-field">
                                <div class="mdl-textfield mdl-textfield--AR mdl-js-textfield mdl-textfield--floating-label">
                                    <input class="mdl-textfield__input" placeholder="" type="password" name="sample-valmd1" id="password">
                                    <label class="mdl-textfield__label" for="password">Senha</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div class="login-box__remember">
                        <input type="checkbox" data-icheck="true" name="remember_login" id="login-box__remember">
                        <span>Lembrar-me</span>
                    </div>
                    <form action="">
                        <a class="btn btn--submit btn--s-extra-large btn--primary mdl-button mdl-js-button mdl-js-ripple-effect" form="login-form">LOGIN</a>
                    </form>
                    <div class="link-group">
                        <a class="password-reset" title="Recuperar minha senha">Recuperar minha senha.</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
