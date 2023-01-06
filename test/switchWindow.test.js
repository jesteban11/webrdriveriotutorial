const internetPage = require("../pages/internet.page");

describe('Switch window', () => {
    it('Should switch to the next window', async () => {
        await browser.url(`${browser.options.baseUrl}/windows`)
        await internetPage.clickHereLink()
        await browser.switchWindow((`${browser.options.baseUrl}/windows/new`))
        await expect(internetPage.h3Header).toExist()
        await expect(internetPage.h3Header).toBeDisplayedInViewport()
        await expect(await internetPage.h3Header.getText()).toEqual('New Window')
    })
})