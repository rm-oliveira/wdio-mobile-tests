import dragPage from "../pageobjects/drag.page"

describe("Testes na tela DragDrop", () => {
    beforeEach(async () => {
        await dragPage.abrirMenuDrag();
        browser.pause(1000);
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
    });

    it("Deve arrastar a peça até o lugar certo", async () => {
        const peca_1 = await $("~drag-l1");
        const destino_1 = await $("~drop-l1");

        await peca_1.dragAndDrop(destino_1)
        await browser.pause(2000);
    });

    it("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
        const colunas = ['l', 'c', 'r']

        for (const coluna of colunas) {
            for (let i = 1; i <= 3; i++) {

                const peca = await $(`~drag-${coluna}${i}`)
                const destino = await $(`~drop-${coluna}${i}`)

                await peca.waitForDisplayed({ timeout: 5000 })
                await destino.waitForDisplayed({ timeout: 5000 })

                await peca.dragAndDrop(destino)
                await browser.pause(500)
            }
        }
        const mensagem = await $('android=new UiSelector().text("Congratulations")');
        await expect(mensagem).toBeDisplayed();

    });
});