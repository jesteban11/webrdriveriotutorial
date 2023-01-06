const LoginPage = require('../pageobjects/login.page')

describe('Wait For Enabled', async () => {
    it('should wait for the input field to be enabled', async () => {
        await browser.url('http://the-internet.herokuapp.com/dynamic_controls')
        await LoginPage.enableButton.waitForDisplayed();
        await LoginPage.enableButton.click();
        await LoginPage.inputEnabledField.waitForEnabled({ timeout: 4000 });
        await expect(LoginPage.inputEnabledField).toBeEnabled();
        await expect(LoginPage.inputEnabledField).not.toBeDisabled();
        await expect(LoginPage.enableButton).toHaveAttrContaining('autocomplete', 'off');
        await expect(LoginPage.pageFooter).toHaveHrefContaining('elemental')
    })
    it('should wait or the input field to be disabled', async () => {
        await LoginPage.enableButton.waitForDisplayed();
        await LoginPage.enableButton.click();
        await LoginPage.inputEnabledField.waitForEnabled({ timeout: 4000, reverse: true });
        await expect(LoginPage.inputEnabledField).toBeDisabled();
    })
})