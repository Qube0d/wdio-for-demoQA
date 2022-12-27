import ElementPage from "../pageobjects/elements.page.js";



describe('My Login application', () => {
    it('Text box', async () => {
        await browser.url('');
        await ElementPage.gotoElementTextBox();
        await ElementPage.fillAll({ name: "1", email: "1@gmail.com", curAddress: "1", perAddress: "1" });
        await ElementPage.submitBtn.click();
        await expect(ElementPage.finalTable).toBeDisplayedInViewport();
    });
    it('Check box', async () => {
        await browser.url('');
        await ElementPage.gotoElementCheckBox();
        await ElementPage.clickToggle();
    })
    it('Check box tree', async () => {
        await browser.url('');
        await ElementPage.gotoElementCheckBox();
        await ElementPage.clickTree();
    });
    it('Check radio button yes', async () => {
        await browser.url('');
        await ElementPage.gotoElementRadioBtn();
        await ElementPage.clickRadioYes();
    });
    it('Check radio button impressive', async () => {
        await browser.url('');
        await ElementPage.gotoElementRadioBtn();
        await ElementPage.clickRadioImpressive();
    });
    it('Check web tables', async () => {
        await browser.url('');
        await ElementPage.gotoElementWebTables();
        await ElementPage.addBtn.click();
        await ElementPage.fillRegistration({ name: "John", lastname: "Dou", email: "some@example.com", age: "25", salary: "5000", department: "Legal"});
        await ElementPage.submitRegBtn.click();
    });
    it('Check web tables for search and delete user', async () => {
        await browser.url('');
        await ElementPage.gotoElementWebTables();
        await ElementPage.addBtn.click();
        await ElementPage.fillRegistration({ name: "John", lastname: "Dou", email: "some@example.com", age: "25", salary: "5000", department: "Legal"});
        await ElementPage.submitRegBtn.click();
        await ElementPage.searchBox.addValue("John");
        await ElementPage.deleteRecord.click()
        await expect(ElementPage.noRows).toBeDisplayedInViewport()
    })
    it('Check buttons for double click', async () => {
        await browser.url('');
        await ElementPage.gotoElementButtons();
        await ElementPage.doubleClickAction();
    });
    it('Check buttons for right click', async () => {
        await browser.url('');
        await ElementPage.gotoElementButtons();
        await ElementPage.clickMeButtonAction();
    });
    it('Check links', async () => {
        await browser.url('');
        await ElementPage.gotoElementLinks();
        await ElementPage.createdLink();
    });

})
