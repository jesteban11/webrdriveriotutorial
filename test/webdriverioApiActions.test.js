const internetPage = require("../pages/internet.page")

describe('WebdriveriIO API Actions', async () => {
    it('should hover on figure 1', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigure(3)
        await expect(await internetPage.getFigureDetailsText(3)).toEqual('name: user1')

    })

    it('should hover on figure 2', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigure(4)
        await expect(await internetPage.getFigureDetailsText(4)).toEqual('name: user2')

    })

    it('should hover on figure 3', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)
        await internetPage.hoverOnFigure(5)
        await expect(await internetPage.getFigureDetailsText(5)).toEqual('name: user3')

    })


    it('Should send keyboard value backspace', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Backspace")
        await expect(await internetPage.getResultText()).toEqual('You entered: BACK_SPACE')
    })

    it('Should send keyboard value tab', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Tab")
        await expect(await internetPage.getResultText()).toEqual('You entered: TAB')
    })

    it('Should send keyboard value shift', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Shift")
        await expect(await internetPage.getResultText()).toEqual('You entered: SHIFT')
    })

    it('Should send keyboard value f12', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("F12")
        await browser.pause(5000)
        await expect(await internetPage.getResultText()).toEqual('You entered: F12')
    })
})