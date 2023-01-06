const internetPage = require("../pages/internet.page");

describe('Scroll to element', () => {    
    it('Move scroll to hoovers Scroll', async () => {
        await browser.url('/')        
        await internetPage.moveToHoversLink()
        await expect(await internetPage.hoversLink).toBeDisplayedInViewport()        
    })

    it('Move scroll to infinte Scroll', async () => {
        await browser.url('/')        
        await internetPage.moveToInfiniteScrollLink()
        await expect(await internetPage.infiniteScrollLink).toBeDisplayedInViewport()        
    })

    it('Should scroll to the footer', async () => {
        await browser.url('/')
        await internetPage.scrollToPageFooter()
        await expect( internetPage.pageFooter).toBeDisplayedInViewport()
    })
})