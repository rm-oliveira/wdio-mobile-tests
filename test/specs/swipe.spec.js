import swipePage from "../pageobjects/swipe.page"

describe('Funcionalidade: Swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenuSwipe();
    });

    afterEach(async () => {
        await driver.back();
        await $('~Swipe').waitForDisplayed()
    });

     it('Deve trocar de card ao realizar swipe para a esquerda', async () => {
        const tela = await $('~Swipe-screen')

        await browser.swipe({
            direction: 'left',
            percent: 0.7,
            scrollableElement: tela
        })

        const textoDepois = await $('android=new UiSelector().textContains("community")')
        await textoDepois.waitForDisplayed()
        await expect(textoDepois).toBeDisplayed()
    })

    it('Deve realizar swipe de baixo para cima', async () => {
        const tela = await $('~Swipe-screen')

        await tela.waitForDisplayed()

        await browser.swipe({
            direction: 'up',
            percent: 0.9,
            duration: 800,
            scrollableElement: tela
        })
    });
});
