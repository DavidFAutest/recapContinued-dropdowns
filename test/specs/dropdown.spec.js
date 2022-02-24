const DropdownPage = require('../pageobjects/dropdown.page');

describe('Dropdown list', () => {
    it('should open page', async () => {
        await DropdownPage.open();
        
    });
});

describe('Dropdown list', () => {
    it('should exsist', async () => {
        await expect(DropdownPage.dropdown).toBeExisting();
        
    });
});

describe('Dropdown list', () => {
    it('should click button', async () => {
        await DropdownPage.dropdown.click();
        await browser.pause(2000)
        
    });
});

describe('Dropdown list', () => {
    it('should click option1', async () => {
        await DropdownPage.Option1.click();
        await browser.pause(2000)
        
    });
});

