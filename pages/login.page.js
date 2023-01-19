const Common = require('./common.page')

class Login extends Common {
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('.radius') }

    async enterUsername(username) {
        await this.username.waitForDisplayed()
        await this.username.setValue(username)
    }

    async enterPassword(password) {
        await this.password.waitForDisplayed()
        await this.password.setValue(password)
    }

    async clickLoginButton() {
        await this.loginButton.waitForDisplayed()
        await this.loginButton.click()
    }

    async fillUserForm(username, password) {
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }

}
module.exports = new Login();