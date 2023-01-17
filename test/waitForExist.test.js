const internetPage = require('../pages/internet.page')

describe('Wait For Exist', () => {
    it('should wait until the delete button exists', async () => {
        await browser.url('/add_remove_elements/')
        await internetPage.clickExampleButton()
        await internetPage.deleteButton(1).waitForExist()
        await expect(await internetPage.deleteButton(1)).toBeExisting()
    })

    it('should wait for the delete button to not exist', async () => {
        await internetPage.clickDeleteButton(1)
        await internetPage.deleteButton(1).waitForExist({ timeout: 500, reverse: true })
        await expect(await internetPage.deleteButton(1).isExisting()).toEqual(false)
    })
})