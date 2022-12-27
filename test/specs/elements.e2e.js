import ElementPage from "../pageobjects/elements.page.js";



describe('My Login application', () => {
    it.skip('Text box', async () => {
        await browser.url('');
        await ElementPage.gotoElementTextBox();
        await ElementPage.fillAll({ name: "1", email: "1@gmail.com", curAddress: "1", perAddress: "1" });
        await ElementPage.submitBtn.click();
        await expect(ElementPage.finalTable).toBeDisplayedInViewport();
    });
    it.skip('Check box', async () => {
        await browser.url('');
        await ElementPage.gotoElementCheckBox();
        await ElementPage.clickToggle();
    })
    it.skip('Check box tree', async () => {
        await browser.url('');
        await ElementPage.gotoElementCheckBox();
        await ElementPage.clickTree();
    });
    it.skip('Check radio button yes', async () => {
        await browser.url('');
        await ElementPage.gotoElementRadioBtn();
        await ElementPage.clickRadioYes();
    });
    it.skip('Check radio button impressive', async () => {
        await browser.url('');
        await ElementPage.gotoElementRadioBtn();
        await ElementPage.clickRadioImpressive();
    });
    it.skip('Check web tables', async () => {
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

























})
