const internetPage = require('../../pages/internet.page');
const loginData = require('../../data/loginData')

describe('Test element actions', async () => {
    it('Should click element', async () => {
        await browser.url('/')
        await internetPage.clickOnLink();
        expect(browser).toHaveUrl('http://the-internet.herokuapp.com/abtest')
    })

    it('Should get text', async () => {
        await browser.url('/')
        const firstElementText = await internetPage.getSpecificElementText(1)
        expect(firstElementText).toEqual('A/B Testing')
    })

    it('Should click checkbox', async () => {
        await internetPage.clickLink(6)
        await internetPage.clickCheckBox(1)
        //expect(await internetPage.checkboxes(1).isSelected()).toEqual(true)
        expect(await internetPage.checkboxes(1)).toBeSelected()
    })

    it('should uncheck checkbox', async () => {
        await internetPage.clickCheckBox(1)
        expect(await internetPage.checkboxes(1).isSelected()).toEqual(false)

    })

    it('Should enter username', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterUsername(loginData.username)
        expect(await internetPage.username.getValue()).toEqual(loginData.username)
    })

    it('Should enter password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterPassword(loginData.password)
        expect(await internetPage.password.getValue()).toEqual(loginData.password)
    })

    it('Should clear value', async () => {
        await internetPage.username.click()
        await internetPage.username.clearValue()
        expect(await internetPage.username.getValue()).toEqual('')
    })


})