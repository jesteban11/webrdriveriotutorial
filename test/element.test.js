const internetPage = require('../pages/internet.page');

describe('Interacting with elements', async () => {
    it('Get text for element', async () => {
        await browser.url('/');
        let text = await $('//*[@id="page-footer"]').getText();
        console.log('PRINTING');
        console.log(text);

        await internetPage.getLiText();
        await internetPage.getSpecificElementText(3);
    })

    it('Is footer dsiplayed', async () => {
        console.log(await internetPage.pageFooter.isDisplayed());
    })

    it('Does the header exist', async () => {
        console.log(await internetPage.pageHeader.isExisting());
    })

    it('Is footer in viewport?', async () => {
        console.log(await internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Is footer in viewport?', async () => {
        console.log(await internetPage.pageHeader.isDisplayedInViewport());
    })

    it('Is subheader enabled?', async () => {
        console.log(await internetPage.subHeading.isEnabled());
    })

    it('Click element', async () => {
        await internetPage.clickOnLink()
    })
})