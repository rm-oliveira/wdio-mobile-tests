class CadastroPage {

    // Seletores

    get menuLogin() { return $('~Login') }
    get menuSignUp() { return $('~button-sign-up-container') }
    get campoEmail() { return $('~input-email') }
    get campoSenha() { return $('~input-password') }
    get campoConfirmaSenha() { return $('~input-repeat-password') }
    get btnCadastrar() { return $('~button-SIGN UP') }
    get msgSucesso() { return $('id=android:id/message') }
    get msgErroEmail() { return $('android=new UiSelector().text("Please enter a valid email address")') }
    get msgErroConfirmaSenha() { return $('android=new UiSelector().text("Please enter the same password")') }
    get msgErroSenha() { return $('android=new UiSelector().text("Please enter at least 8 characters")') }
    
    // Métodos / Ações

    async abrirMenu() {
        await this.menuLogin.click()
        await this.menuSignUp.click()
    }

    async preencherFormulario(email, senha, confirmarSenha) {
        await this.campoEmail.clearValue()
        await this.campoEmail.addValue(email)

        await this.campoSenha.clearValue()
        await this.campoSenha.setValue(senha)

        await this.campoConfirmaSenha.clearValue()
        await this.campoConfirmaSenha.setValue(confirmarSenha)

        await this.btnCadastrar.click()
    }

    async mensagemSucesso() {
        return await this.msgSucesso.getText()
    }

    async mensagemErroEmail() {
        return await this.msgErroEmail.getText()
    }

    async mensagemErroConfSenha() {
        return await this.msgErroConfirmaSenha.getText()
    }

    async mensagemErroSenha() {
        return await this.msgErroSenha.getText()
    }
}

export default new CadastroPage()