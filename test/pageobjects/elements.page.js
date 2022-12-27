class ElementPage{

    get elementPage() { 
        return $('//h5[contains(text(),"Elements")]')
    }

    // text box
    get textBox() {
        return $('//span[contains(text(),"Text Box")]')
    }
    get fullName() {
        return $('//input[@id="userName"]')
    }
    get emailInput() {
        return $('//input[@id="userEmail"]')
    }
    get currentAddress() {
        return $('//textarea[@id="currentAddress"]')
    }
    get permanentAddress() {
        return $('//textarea[@id="permanentAddress"]')
    }
    get submitBtn() {
        return $('//button[@id="submit"]')
    }
    get finalTable() {
        return $('//div[@id="output"]')
    }

    async gotoElementTextBox() {
        await this.elementPage.click();
        await this.textBox.click();
    }

    async fillAll({ name, email, curAddress, perAddress }) {
        if (name) {
            await this.fullName.addValue(name)
        }
        if (email) {
            await this.emailInput.addValue(email)
        }
        if (curAddress) {
            await this.currentAddress.addValue(curAddress)
        }
        if (perAddress) {
            await this.permanentAddress.addValue(perAddress)
        }
    }


    //check box
    get checkBox() {
        return $('//span[contains(text(),"Check Box")]')
    }
    get toggleMain() {
        return $('[class*="rct-node rct-node-parent"]>span>button:nth-child(1)')
    }
    get toggleDesktop() {
        return $('[class*="rct-node rct-node-parent"]:nth-last-of-type(3)>span>button')
    }
    get toggleDocuments() {
        return $('[class*="rct-node rct-node-parent"]:nth-last-child(2)>span>button')
    }
    get toggleDownloads() {
        return $('[class*="rct-node"]:nth-child(3)>span>button')
    }
    get homeTree() {
        return $('//span[contains(text(),"Home")]/preceding-sibling::span[@class][2]')
    }
    get documentTree() {
        return $('//span[contains(text(),"Documents")]/./preceding-sibling::span[@class][2]')
    }
    get notesTree() {
        return $('//span[contains(text(),"Notes")]/preceding-sibling::span[@class][2]')
    }
    get angularTree() {
        return $('//span[contains(text(),"Angular")]/preceding-sibling::span[@class][2]')
    }

    async gotoElementCheckBox() {
        await this.elementPage.click();
        await this.checkBox.click();
    }

    async clickToggle() {
        await this.toggleMain.click();
        await this.toggleDesktop.click();
        await this.toggleDocuments.click();
        await this.toggleDownloads.click();
    }

    async clickTree() {
        await this.clickToggle();
        await this.homeTree.click();
        await this.documentTree.click();
        await this.notesTree.click();
        //await this.angularTree.click();
    }

    // radio buttons
    get radioBtn() {
        return $('//span[contains(text(),"Radio Button")]')
    }
    get yesRadioBtn() {
        return $('//label[@for="yesRadio"]')
    }
    get impressiveRadioBtn() {
        return $('//label[@for="impressiveRadio"]')
    }
    get yesSelected() {
        return $('//span[@class="text-success"][contains(text(),"Yes")]')
    }
    get impressiveSelected() {
        return $('//span[@class="text-success"][contains(text(),"Impressive")]')
    }


    async clickRadioYes() {
        await this.yesRadioBtn.click();
        await expect(this.yesSelected).toBeDisplayedInViewport();
    }

    async clickRadioImpressive() {
        await this.impressiveRadioBtn.click();
        await expect(this.impressiveSelected).toBeDisplayedInViewport();
    }


    async gotoElementRadioBtn() {
        await this.elementPage.click();
        await this.radioBtn.click();
    }

    //web tables
    get webTablBtn() {
        return $('//span[contains(text(),"Web Tables")]')
    }
    get addBtn() {
        return $('//button[@id="addNewRecordButton"]')
    }
    get firstName() {
        return $('//input[@id="firstName"]')
    }
    get lastName() {
        return $('//input[@id="lastName"]')
    }
    get email() {
        return $('//input[@id="userEmail"]')
    }
    get age() {
        return $('//input[@id="age"]')
    }
    get salary() {
        return $('//input[@id="salary"]')
    }
    get department() {
        return $('//input[@id="department"]')
    }
    get submitRegBtn() {
        return $('//button[@id="submit"]')
    }
    get searchBox() {
        return $('//input[@id="searchBox"]')
    }
    get deleteRecord() {
        return $('//span[@id="delete-record-4"]')
    }
    get noRows() {
        return $('//div[contains(text(),"No rows found")]')
    }

    async gotoElementWebTables() {
        await this.elementPage.click();
        await this.webTablBtn.click();
    }


    async fillRegistration({ name, lastname, email, age, salary, department }) {
        if (name) {
            await this.firstName.addValue(name)
        }
        if (lastname) {
            await this.lastName.addValue(lastname)
        }
        if (email) {
            await this.email.addValue(email)
        }
        if (age) {
            await this.age.addValue(age)
        }
        if (salary) {
            await this.salary.addValue(salary)
        }
        if (department) {
            await this.department.addValue(department)
        }
    }

    //buttons
    get buttonsBtn() {
        return $('//span[contains(text(),"Buttons")]')
    }
    get doubleClickButton() {
        return $('//button[@id="doubleClickBtn"]')
    }
    get checkDoubleClickButton() {
        return $('//p[@id="doubleClickMessage"]')
    }
    get clickMeClickButton() {
        return $('//button[contains(text(),"Click Me")]/../following-sibling::div/./following-sibling::div/button')
    }
    get checkClickMeClickButton() {
        return $('//p[@id="dynamicClickMessage"]')
    }

    async gotoElementButtons() {
        await this.elementPage.click();
        await this.buttonsBtn.click();
    }
    async doubleClickAction() {
        await this.doubleClickButton.doubleClick();
        await expect(this.checkDoubleClickButton).toHaveText('You have done a double click')
    }
    async clickMeButtonAction() {
        await this.clickMeClickButton.click()
        await expect(this.checkClickMeClickButton).toHaveText('You have done a dynamic click')
    }

    //links
    get linksBtn() {
        return $('//span[contains(text(),"Links")]')
    }
    get created() {
        return $('//a[@id="created"]')
    }
    get linkResponded201() {
        return $('//p[@id="linkResponse"]//following-sibling::b[contains(text(),"201")]')
    }

    async gotoElementLinks() {
        await this.elementPage.click();
        await this.linksBtn.click();
    }
    async createdLink() {
        await this.created.click();
        await expect(this.linkResponded201).toHaveText("201")
    }












 }
export default new ElementPage();