class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get hoversLink() { return $('a[href$="hovers"]') }
    get infiniteScrollLink() { return $('a[href$="scroll"]') }

    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $(`ul li:nth-child(${index}) a`) }

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }

    get username() { return $('#username') }
    get password() { return $('#password') }

    figures(index) { return $(`.example .figure:nth-child(${index}) img`) }

    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`) }

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    get hereLink() { return $('.example a') }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('#mce_0_ifr') }

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }

    async dragDragableToDropable() {
        await this.draggable.waitForDisplayed()
        await this.draggable.dragAndDrop(await this.droppable)
    }

    async dragColumnAToColumnB() {
        await this.columnA.waitForDisplayed()
        await this.columnA.dragAndDrop(await this.columnB)
        //await this.columnA.dragAndDrop({ x: 400, y: 200 })
    }

    async sendTextToBody(text) {
        await this.iframeBody.waitForDisplayed()
        await this.iframeBody.clearValue()
        await this.iframeBody.click()
        await browser.keys(text)
    }

    async clickHereLink() {
        await this.hereLink.waitForDisplayed()
        await this.hereLink.click()
    }

    async scrollToPageFooter() {
        await this.pageFooter.scrollIntoView()
        //await this.pageFooter.moveTo()
    }

    async moveToHoversLink() {
        await this.hoversLink.moveTo()
    }

    async moveToInfiniteScrollLink() {
        await this.infiniteScrollLink.scrollIntoView()
    }

    async clickTarget() {
        await this.target.waitForDisplayed()
        await this.target.click()
    }

    async sendKeysToTarget(text) {
        await this.target.waitForDisplayed()
        await browser.keys(text)
        //await this.target.keys(text)
    }

    async getResultText() {
        await this.result.waitForDisplayed()
        return this.result.getText()
    }

    /**
     * Hover sover the specified image
     * @param {*} index the specific index of the image
     */
    async hoverOnFigure(index) {
        await this.figures(index).waitForDisplayed()
        await this.figures(index).moveTo(1, 1)
    }


    /**
     * Returns the text of the figure details
     * @param {*} index the index of the element
     */
    async getFigureDetailsText(index) {
        await this.figureDetails(index).waitForDisplayed()
        return await this.figureDetails(index).getText()
    }

    /**
     * Clicks on the lik base on the index provided
     * @param {*} index the index of the element
     */
    async clickLink(index) {
        await this.link(index).waitForDisplayed()
        await this.link(index).click()
    }

    async getLiText() {
        await this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    async getSpecificElementText(index) {
        await this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()

    }

    async clickOnLink() {
        if (await this.firstLink.isDisplayed() === true) await this.firstLink.click()
        await this.h3Header.waitForDisplayed()
    }

    async clickCheckBox(index) {
        await this.checkboxes(index).waitForDisplayed
        await this.checkboxes(index).click()
    }

    async enterUsername(text) {
        await this.username.waitForDisplayed()
        await this.username.setValue(text)
    }

    async enterPassword(text) {
        await this.password.waitForDisplayed()
        await this.password.setValue(text)
    }

}

module.exports = new Internet();