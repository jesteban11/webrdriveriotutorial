const internetPage = require("../pages/internet.page");

describe('Drag and Drop', () => {
    it.skip('should drag column A to column B', async () => {
        await browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        await internetPage.dragColumnAToColumnB()
        await expect(await internetPage.columnBHeader).toHaveText('A')
        await expect(await internetPage.columnAHeader).toHaveText('B')
    })

    it('should drag and drop', async () => {
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        await internetPage.dragDragableToDropable()
        await expect(await internetPage.droppableParagraph).toHaveText('Dropped!')
    })   
})