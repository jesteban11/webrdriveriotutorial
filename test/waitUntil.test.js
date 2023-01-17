const internetPage = require('../pages/internet.page')

describe('Wait Until', () => {
    it('should wait until the button text changes to add', async () => {
        await browser.url('/dynamic_controls')
        await internetPage.clickPageButton()
        await browser.waitUntil(async () => {
            return await internetPage.pageButton().getText() === 'Add'
        }, { timeout: 6000, timeoutMsg: 'Expect button text to change' })
       await expect(await internetPage.pageButton()).toHaveText('Add')
    })

    it('should wait until the button text changes to remove', async () => {        
        await internetPage.clickPageButton()
        await browser.waitUntil(async () => {
            return await internetPage.pageButton().getText() === 'Remove'
        }, { timeout: 6000, timeoutMsg: 'Expect button text to change' })
       await expect(await internetPage.pageButton()).toHaveText('Remove')
    })
})