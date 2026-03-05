import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Formulário', () => {

    beforeEach(() => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
    });

    it('Deve trocar o botão de on para off', async () => {
        //Trocar para OFF ao clicar
        const botaoOnOff = await driver.$("accessibility id:switch")
        await botaoOnOff.click()
        await driver.pause(5000)
        //Trocar para ON usando cordenadas
        await driver.action('pointer')
            .move({ duration: 0, x: 229, y: 1229 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 143, y: 1225 })
            .up({ button: 0 })
            .perform();
            await driver.pause(5000)
        //Trocar para OFF usando swipe
        await browser.swipe({
            direction: 'right',
            duration: 5000,
            percent: 0.5,
            scrollableElement: botaoOnOff
        })
    });

    it('Validar a seleção do dropdown', async () => {
        await formPage.selecionarOpcao('This app is awesome')
        expect(await formPage.validarOpcao()).toEqual('This app is awesome')
    });
});