import CadastroPage from '../pageobjects/cadastro.page'

describe('Funcionalidade: Cadastro', () => {

    beforeEach(async () => {
        await CadastroPage.abrirMenu()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
    })

    it('Deve preencher o formulário com sucesso', async () => {
        await CadastroPage.preencherFormulario('teste@teste.com', '123456789', '123456789')
        expect (await CadastroPage.mensagemSucesso()).toEqual('You successfully signed up!')
    });

    it('Deve validar mensagem de erro ao inserir email inválido', async () => {
        await CadastroPage.preencherFormulario('teste.teste.com', '123456789', '123456789')
        expect (await CadastroPage.mensagemErroEmail()).toEqual('Please enter a valid email address')
    });

    it('Deve validar mensagem de erro ao inserir senhas diferentes', async () => {
        await CadastroPage.preencherFormulario('teste@teste.com', '987654321', '123456789')
        expect (await CadastroPage.mensagemErroConfSenha()).toEqual('Please enter the same password')
    });

    it('Deve validar mensagem de erro ao inserir senha menor que 8 caracteres', async () => {
        await CadastroPage.preencherFormulario('teste@teste.com', '12345', '12345')
        expect (await CadastroPage.mensagemErroSenha()).toEqual('Please enter at least 8 characters')
    });

});