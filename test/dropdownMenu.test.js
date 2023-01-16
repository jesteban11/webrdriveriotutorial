const internetPage = require("../pages/internet.page");

describe('Dropdown menu', () => {
    it('should select an option 1 from dropdown', async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`)
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption1()
        await expect(await internetPage.dropdownMenuOption1).toBeSelected()
    })   

    it('should select an option 2 from dropdown', async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`)
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption2()
        await expect(await internetPage.dropdownMenuOption2).toBeSelected()
    })   
})