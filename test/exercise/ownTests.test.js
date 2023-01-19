const loginPage = require('../../pages/login.page')
const securePage = require('../../pages/secure.page')
const credentials = require('../../data/credentials')

describe('Write your own tests', () => {
    it('Login with valid credentials shows success message', async () => {
        await browser.url('/login')
        await loginPage.fillUserForm(credentials.validCredentials.username, credentials.validCredentials.password)
        await expect(await securePage.flashMessage).toHaveTextContaining('You logged into a secure area!')
    })

    it('Logout shows success message', async () => {
        await securePage.clickLogout()
        await expect(await loginPage.flashMessage).toHaveTextContaining('You logged out of the secure area!')
    })

    it('Login with invalid credentials shows error', async () => {
        await loginPage.fillUserForm(credentials.invalidCredentials.username, credentials.invalidCredentials.password)
        await expect(await loginPage.flashMessage).toHaveTextContaining('Your username is invalid!')
    })
})