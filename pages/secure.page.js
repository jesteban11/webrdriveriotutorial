const Common = require('./common.page')

class Secure extends Common {
    get logoutButton() { return $('.button.secondary.radius') }

    async clickLogout() {
        await this.logoutButton.waitForDisplayed()
        await this.logoutButton.click()
    }
}

module.exports = new Secure()