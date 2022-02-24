

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropdownPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdown() {
        return $('#dropdown');
    }
    
    get Option1() {
        return $('option=Option 1');
    }

    get Option2() {
        return $('option=Option 2');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();
