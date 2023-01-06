const internetPage = require("../pages/internet.page");

describe('Switch to iFrame', () => {
    it('Should switch to iFrame', async () => {
        const iframeText = 'This is the text in the iframe body'
        await browser.url(`${browser.options.baseUrl}/iframe`)
        await internetPage.h3Header.waitForDisplayed()
        await internetPage.iframe.waitForDisplayed()
        await browser.switchToFrame(await internetPage.iframe)
        await internetPage.sendTextToBody(iframeText)
        await expect(await internetPage.iframeBody).toHaveText(iframeText)
    })
})