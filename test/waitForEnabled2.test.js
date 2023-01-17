const internetPage = require("../pages/internet.page");

describe('Wait For Enabled', async () => {
    it('should wait for the input field to be enabled', async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        await internetPage.clickEnableButton()
        await internetPage.inputField.waitForEnabled({ timeout: 4000 })
        await expect(await internetPage.inputField).toBeEnabled()
    })

    it('should wait the input field to be disabled', async () => {
        await internetPage.clickEnableButton()
        await internetPage.inputField.waitForEnabled({ timeout: 4000, reverse: true })
        await expect(await internetPage.inputField).toBeDisabled()
    })
})