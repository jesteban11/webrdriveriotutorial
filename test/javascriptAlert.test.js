const internetPage = require("../pages/internet.page");

describe('Javascript Alerts', () => {
    it('should get text of alert', async () => {
        await browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        await internetPage.clickJavascriptAlertButton(1)
        const alertText = await browser.getAlertText()
        await expect(alertText).toEqual('I am a JS Alert')
    })

    it('should accept alert', async () => {
        await browser.acceptAlert()
        await expect(await internetPage.result).toHaveText('You successfully clicked an alert')
    })

    it('should dismiss alert', async () => {
        await internetPage.clickJavascriptAlertButton(2)
        await browser.dismissAlert()
        await expect(await internetPage.result).toHaveText('You clicked: Cancel')
    })

    it('should send text to the alert', async () => {
        await internetPage.clickJavascriptAlertButton(3)
        await browser.sendAlertText('This is some text')
        await browser.acceptAlert()
        await expect(await internetPage.result).toHaveText('You entered: This is some text')
    })

})