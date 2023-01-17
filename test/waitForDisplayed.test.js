const internetPage = require("../pages/internet.page");

describe('Scroll to element', () => {
    it('Move scroll to hoovers Scroll', async () => {
        await browser.url('/')
        await internetPage.pageHeader.waitForDisplayed({ timeout: 1000, reverse: true })
        await expect(await internetPage.pageHeader).toBeDisplayedInViewport()
        await browser.pause(5000)
    })
})