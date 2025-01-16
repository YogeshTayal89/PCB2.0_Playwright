import { FrameLocator, Locator, Page } from "@playwright/test";
import PlaywrightUtil from "../../utils/playwright-utils";
import Override from "./override.page";


export default class PCBEnrollAddressPage {

    //library objects declaration
    page: Page;
    util: PlaywrightUtil;


    //form loctors
    addresstype: Locator; addressline1: Locator; addressline2: Locator; country: Locator; zipcode: Locator; state: Locator; stateentered: Locator
    city: Locator;
    addresserrmsg: Locator; zipcodeerrmsg: Locator; staterrmsg: Locator; cityerrmsg: Locator; validzipcodeerror: Locator;
    addzippopupheader: Locator; newcity: Locator; newState: Locator;

    //locator for loading icon
    loading: Locator;

    //address dropdown values
    addressoptions: Locator;
    addresstypdropdownvalues: string[] = ["Home", "Business", "Credit", "Work"];

    //Btn locators
    addaddressbtn: Locator; editaddressbtn: Locator; deleteaddressbtn: Locator; editcancelbtn: Locator; updateaddrebtn: Locator;
    cancelbtn: Locator; nextbtn: Locator; backbtn: Locator; addzipcancel: Locator; localbtn: Locator; savebtn: Locator;infomsgokbtn:Locator;

    //Address list
    addresslist: Locator;
    addresstypelabel: Locator;
    addressname: Locator;

    //sliders
    mailingaddress: Locator; creditaddress: Locator; badaddress: Locator;
    sliderancestor: string;
    slideroffclass: string; slideronclass: string;

    //frame locator
    framelocator: FrameLocator;

    //warning msg 
    warningmsgheader: Locator; warningmsgtext: Locator; warningmsgokbtn: Locator;

    //Error msg locator for already selected address type
    typeerrormsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.util = new PlaywrightUtil();
        const frameid = "#iframe-PatronManagement";
        this.framelocator = this.page.frameLocator(`${frameid}`);

        //Form Locators
        this.addresstype = this.framelocator.locator('ul:nth-child(2) > li > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').first();
        this.addressline1 = this.framelocator.getByPlaceholder('Enter Street Address');
        this.addressline2 = this.framelocator.getByPlaceholder('Apt, Suit, Unit, Building, etc');
        this.country = this.framelocator.locator('li:nth-child(6) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').first();
        this.zipcode = this.framelocator.locator('li').filter({ hasText: 'POSTAL CODE' }).getByRole('textbox')
        //this.state = this.framelocator.getByText('Select State', { exact: true }).first();
        this.state = this.framelocator.getByLabel('3Address').getByText('Select State');
        this.stateentered = this.framelocator.locator('li:nth-child(10) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').first();
        this.city = this.framelocator.getByPlaceholder('Enter City');
        this.addressoptions = this.framelocator.locator('//mat-option/span');
        //To add new zipcode
        this.addzippopupheader = this.framelocator.getByText('New Postal Code')
        this.newcity = this.framelocator.getByRole('textbox', { name: 'Enter City' });
        this.newState = this.framelocator.getByLabel('New Postal Code').getByText('Select State');
        this.infomsgokbtn = this.framelocator.getByRole('button', { name: 'OK' });


        //Buttons
        this.addaddressbtn = this.framelocator.getByRole('button', { name: 'add ADDRESS' });
        this.editaddressbtn = this.framelocator.getByText('edit', { exact: true }).first();
        this.deleteaddressbtn = this.framelocator.getByLabel('3Address').getByText('delete').first();
        this.editcancelbtn = this.framelocator.getByText('cancel', { exact: true }).first();
        this.nextbtn = this.framelocator.getByRole('button', { name: 'NEXT' });
        this.updateaddrebtn = this.framelocator.getByRole('button', { name: 'add UPDATE' });
        this.addzipcancel = this.framelocator.getByRole('button', { name: 'CANCEL' });
        this.localbtn = this.framelocator.getByText('Local', { exact: true });
        this.savebtn = this.framelocator.getByRole('button', { name: 'SAVE' });

        //error messages
        this.addresserrmsg = this.framelocator.getByText('Please enter "Address Line 1". ');
        this.zipcodeerrmsg = this.framelocator.getByText('Please enter "Postal Code". ');
        this.staterrmsg = this.framelocator.getByText('Please select "State". ');
        this.cityerrmsg = this.framelocator.getByText('Please enter "City". ');
        this.validzipcodeerror = this.framelocator.getByText('Please enter valid "Postal Code". ')

        //Button Locators
        this.cancelbtn = this.framelocator.getByRole('button', { name: 'CANCEL' });
        this.backbtn = this.framelocator.getByRole('button', { name: 'BACK' });

        //load icon 
        this.loading = this.framelocator.getByRole('img', { name: 'Angular Logo' });

        //addresslist
        this.addresslist = this.framelocator.locator('//div[2]/div[3]/div/div[1]/div/div/ul[1]');
        this.addresstypelabel = this.addresslist.locator("//li[1]/label")
        this.addressname = this.addresslist.locator("//li[1]//div/div/span")

        //sliders
        this.mailingaddress = this.framelocator.locator('(//li/div/mat-slide-toggle)[1]/label/span/input');
        //(//li/div/mat-slide-toggle)[1]
        this.creditaddress = this.framelocator.locator('(//li/div/mat-slide-toggle)[2]//label/span/input');
        this.badaddress = this.framelocator.locator('(//li/div/mat-slide-toggle)[3]/label/span/input');
        this.sliderancestor = "//ancestor::mat-slide-toggle"


        //warning message
        this.warningmsgheader = this.framelocator.getByRole('heading', { name: 'Warning' });
        this.warningmsgtext = this.framelocator.getByText('Mailing address is not provided. Please check and try again');
        this.warningmsgokbtn = this.framelocator.getByRole('button', { name: 'OK' });

        //Error message for choosing already selected type
        this.typeerrormsg = this.framelocator.getByText('Please select different "Type".')


    }

    /**
     * This method is used to verify the enroll address page is present
     */
    async verifyEnrollAddressPageIsPresent() {

        await this.util.verifyElementPresent(this.addresstype);
    }

    /**
     * This methos is used to validate the address type dropdown values
     */
    async verifyAddressTypeDropdownValues() {

        for (const element of this.addresstypdropdownvalues) {
            await this.util.clickElement(this.addresstype);
            await this.util.verifyElementPresent(await this.getDropdownValue(element));
            await this.util.clickElement(await this.getDropdownValue(element));

        }

    }

    /**
     * This method is used to click the next button
     */
    async clickOnNextButton() {
        await this.util.clickElement(this.nextbtn)
    }
    /**
         * This method is used to click the cancel button on ADD POSTAL CODE screen
         */
    async clickOnCancelButtonOnAddZipCode() {
        await this.util.clickElement(this.addzipcancel)
    }

    /**
     * This method is used to fill the address details
     */
    async fillAddressDetails(testdata: any) {

        await this.util.clickElement(this.addresstype);
        await this.util.clickElement(await this.getDropdownValue(testdata.addresstype));

        await this.util.typeText(this.addressline1, testdata.addressline);
        await this.util.typeText(this.addressline2, testdata.addressline);

        await this.util.clickElement(this.country);
        await this.util.clickElement(await this.getDropdownValue(testdata.country));

        await this.util.waitForPagetoLoad(this.page, 2000);

        await this.util.typeText(this.zipcode, testdata.addresszipcode);

        await this.util.clickElement(this.state);
        await this.util.verifyElementNotPresent(this.loading);

    }

    /**
     * This method is used to validate all the fields are entered properly
     * @param testdata 
     */
    async verifyEnterdAddressDetails(testdata: any) {

        await this.util.verifyTextPresent(this.addresstype, testdata.addresstype);
        await this.util.verifyValuePresent(this.addressline1, testdata.addressline);
        await this.util.verifyValuePresent(this.addressline2, testdata.addressline);
        await this.util.verifyTextPresent(this.country, testdata.country);
        await this.util.verifyGivenStringsEqual((await this.util.getValue(this.zipcode)).replace(/[^0-9.]/g, ''), testdata.addresszipcode);
        // await this.util.verifyTextPresent(this.stateentered,testdata.addressstate);
        await this.util.verifyValuePresent(this.city, testdata.addresscity);


    }


    /**
      * This method is used to add random ZIPCode and then cancel the pop up 
      */
    async NewZipCodeAddCancel(testdata: any) {

        await this.util.clickElement(this.addresstype);
        await this.util.clickElement(await this.getDropdownValue(testdata.addresstype));

        await this.util.typeText(this.addressline1, testdata.addressline);
        await this.util.typeText(this.addressline2, testdata.addressline);

        await this.util.clickElement(this.country);
        await this.util.clickElement(await this.getDropdownValue(testdata.country));

        await this.util.waitForPagetoLoad(this.page, 2000);

        await this.util.typeText(this.zipcode, testdata.newaddresszipcode);
        await this.util.pressTab(this.zipcode);

        await this.util.verifyElementPresent(this.addzippopupheader);
        await this.util.verifyElementNotPresent(this.loading);
        await this.util.clickElement(this.addzipcancel);




    }


    /**
     * This method is used to add random ZIPCode and ADD new zipcode country having states. 
     */
    async AddNewZipCodeWithState(testdata: any) {

        await this.util.clickElement(this.addresstype);
        await this.util.clickElement(await this.getDropdownValue(testdata.addresstype));

        await this.util.typeText(this.addressline1, testdata.addressline);
        await this.util.typeText(this.addressline2, testdata.addressline);

        await this.util.clickElement(this.country);
        await this.util.clickElement(await this.getDropdownValue(testdata.country));

        await this.util.waitForPagetoLoad(this.page, 2000);
        const randomZipCode = this.util.generateRandomNumber()

        await this.util.typeText(this.zipcode, await randomZipCode);
        await this.util.pressTab(this.zipcode);

        await this.util.verifyElementPresent(this.addzippopupheader);
        await this.util.verifyElementNotPresent(this.loading);

        await this.util.typeText(this.newcity, testdata.addressnewcity);
        await this.util.clickElement(this.newState);
        await this.util.clickElement(await this.getDropdownValue(testdata.state));
        await this.util.clickElement(this.localbtn);
        await this.util.clickElement(this.savebtn);
        await this.util.waitForPagetoLoad(this.page, 2000);



    }

 /**
     * This method is used to add random ZIPCode and ADD new zipcode country not have states. 
     */
 async AddNewZipCodeWithoutState(testdata: any) {

    await this.util.clickElement(this.addresstype);
    await this.util.clickElement(await this.getDropdownValue(testdata.addresstype));

    await this.util.typeText(this.addressline1, testdata.addressline);
    await this.util.typeText(this.addressline2, testdata.addressline);

    await this.util.clickElement(this.country);
    await this.util.clickElement(await this.getDropdownValue(testdata.newcountry));

    await this.util.waitForPagetoLoad(this.page, 2000);
    const randomZipCode = this.util.generateRandomNumber()

    await this.util.typeText(this.zipcode, await randomZipCode);
    await this.util.pressTab(this.zipcode);

    await this.util.verifyElementPresent(this.addzippopupheader);
    await this.util.verifyElementNotPresent(this.loading);

    await this.util.typeText(this.newcity, testdata.addressnewcity);
    // await this.util.clickElement(this.newState);
    // await this.util.clickElement(await this.getDropdownValue(testdata.state));
    await this.util.clickElement(this.localbtn);
    

    await this.util.clickElement(this.savebtn);
    await this.util.clickElement(this.infomsgokbtn);
    await this.util.waitForPagetoLoad(this.page, 2000);



}


    /**
   * This method is used to verify the age confirmation popup yes functionality for the config value 1
   */
    async verifyAuthorizeWithYesButton(username: string, password: string) {

        const override = new Override(this.page);
        await override.authorizePostalWithCredentials(username, password)
        await this.util.waitForPagetoLoad(this.page, 2000);
        const pcbenrolladdress = new PCBEnrollAddressPage(this.page);
        await pcbenrolladdress.verifyEnrollAddressPageIsPresent();
    }

    /**
     * Method used to get the dropdown loacator based on a value
     * @param value 
     * @returns locator
     */
    async getDropdownValue(value: string): Promise<Locator> {

        return this.framelocator.locator("//span[text()=' " + value + " ']").nth(0);

    }

    /**
     * This method is used to verify the error message of AddressLine1
     */
    async verifyErrorMessageOfAddressLine1() {
        await this.util.verifyElementPresent(this.addresserrmsg);
    }

    /**
     * This method is used to verify the error message of Zip code
     */
    async verifyErrorMessageOfZipcode() {
        await this.util.verifyElementPresent(this.zipcodeerrmsg);
    }

    /**
    * This method is used to verify the 'Please enter valid "Postal Code" error message of cancel Zip code
    */
    async verifyErrorMessageOfValidZipcode() {
        await this.util.verifyElementPresent(this.validzipcodeerror);
    }

    /**
     * This method is used to verify the error message of State
     */
    async verifyErrorMessageOfState() {
        await this.util.verifyElementPresent(this.staterrmsg);
    }

    /**
     * This method is used to verify the error message of City
     */
    async verifyErrorMessageOfCity() {
        await this.util.verifyElementPresent(this.cityerrmsg);
    }


    /**
     * This method is used to click the cancel button
     */
    async clickOnCancelButton() {
        await this.util.clickElement(this.cancelbtn);
    }


    /**
     * This method is used to click the back button
     */
    async clickOnBackButton() {
        await this.util.clickElement(this.backbtn);
    }

    /**
     * This method is used to click the add address button
     */

    async clickOnAddAddreessBtn() {
        await this.util.clickElement(this.addaddressbtn);
    }

    /**
     * This method is used to verify the add all the addres type and verify the UI 
     * @param testdata 
     */
    async addAllAddressTypeAndVerifyUI(testdata: any) {

        let addressvalue: string[] = [];
        let addresstypes: string[] = [];
        let newaddress: string;
        await this.util.clickElement(this.addresstype);
        const count = await this.util.getCount(this.addressoptions);
        for (let i = 1; i <= count; i++) {
            newaddress = testdata.addressline + i;
            addressvalue.push(newaddress);

            if (i != 1)
                await this.util.clickElement(this.addresstype);

            //Getting address options
            const addname: any = await this.util.getText(this.addressoptions.nth(i - 1));
            addresstypes.push(addname)

            await this.util.clickElement(this.addressoptions.nth(i - 1));


            await this.util.typeText(this.addressline1, newaddress);
            await this.util.typeText(this.addressline2, testdata.addressline);

            await this.util.clickElement(this.country);
            await this.util.clickElement(await this.getDropdownValue(testdata.country));

            await this.util.waitForPagetoLoad(this.page, 5000);

            await this.util.typeText(this.zipcode, testdata.addresszipcode);

            await this.util.clickElement(this.state);
            await this.util.verifyElementNotPresent(this.loading);

            await this.clickOnAddAddreessBtn();

        }//End of for loop

        //Verify all the added values are displayed

        for (let i = 1; i <= count; i++) {
            await this.util.verifyContainsText(this.addresslist.locator("//li[" + i + "]/label"), addresstypes[i - 1])
            await this.util.verifyContainsText(this.addresslist.locator("//li[" + i + "]/div/div/span"), addressvalue[i - 1])
            await this.util.verifyElementPresent(this.addresslist.locator("//li[" + i + "]/div/div/div/igt-icon[1]/div/span[text()=' edit ']"))
            await this.util.verifyElementPresent(this.addresslist.locator("//li[" + i + "]/div/div/div/igt-icon[2]/div/span[text()=' delete ']"))
        }

        //Verify add address button should not be visible
        await this.util.verifyElementNotPresent(this.addaddressbtn)


        //Edit and validate update address button is visible
        await this.util.clickElement(this.editaddressbtn)
        await this.util.verifyElementPresent(this.updateaddrebtn)

        //Cancel the delete button and validate add and update address button not visible
        await this.util.clickElement(this.editcancelbtn)
        await this.util.verifyElementNotPresent(this.updateaddrebtn)
        await this.util.verifyElementNotPresent(this.updateaddrebtn)

        //Delete and validate add address button is visible
        await this.util.clickElement(this.deleteaddressbtn);
        await this.util.verifyElementNotPresent(this.updateaddrebtn)
        await this.util.verifyElementPresent(this.addaddressbtn)

    }


    /**
     * This method is used to validate Add and Edit functionality of address field
     * @param testdata 
     */
    async verifyAddandEditAddress(testdata: any) {

        await this.clickOnAddAddreessBtn();
        await this.util.verifyTextPresent(this.addresstypelabel, testdata.addresstype);
        await this.util.verifyContainsText(this.addressname, testdata.addressline);
        await this.util.verifyTextPresent(this.addresstype, this.addresstypdropdownvalues[1]);
        await this.util.waitForPagetoLoad(this.page, 3000)
        await this.util.clickElement(this.editaddressbtn);
        await this.util.verifyTextPresent(this.addresstype, testdata.addresstype);
        await this.util.verifyValuePresent(this.addressline1, testdata.addressline);
        await this.util.verifyValuePresent(this.addressline2, testdata.addressline);
        await this.util.verifyTextPresent(this.country, testdata.country);
        await this.util.verifyGivenStringsEqual((await this.util.getValue(this.zipcode)).replace(/[^0-9.]/g, ''), testdata.addresszipcode);
        // await this.util.verifyTextPresent(this.stateentered,testdata.addressstate);
        await this.util.verifyValuePresent(this.city, testdata.addresscity);

        await this.util.typeText(this.addressline1, testdata.addressline + 1)
        await this.util.clickElement(this.updateaddrebtn);
        await this.util.verifyContainsText(this.addressname, testdata.addressline + 1)
        await this.util.verifyTextPresent(this.addresstype, this.addresstypdropdownvalues[1])
    }



    /**
     * This method is used to verify delete a address
     * @param testdata 
     */
    async verifyDeleteAddress(testdata: any) {

        await this.clickOnAddAddreessBtn();
        await this.util.verifyContainsText(this.addresstypelabel, testdata.addresstype);
        await this.util.verifyContainsText(this.addressname, testdata.addressline);
        await this.util.verifyTextPresent(this.addresstype, this.addresstypdropdownvalues[1])
        await this.util.clickElement(this.deleteaddressbtn);
        await this.util.verifyElementNotPresent(this.addresstypelabel);
    }

    /**
     * This method is used to select only the credit address slider
     */
    async selectOnlyCreditAddressSliderAndVerify() {

        if (await this.util.getAttributeValue(this.mailingaddress, "aria-checked") == "true") {
            await this.util.clickElement(this.mailingaddress.locator(this.sliderancestor));
            await this.util.verifyElementAttribute(this.mailingaddress, "aria-checked", "false")
        }
        if (await this.util.getAttributeValue(this.creditaddress, "aria-checked") == "false") {
            await this.util.clickElement(this.creditaddress.locator(this.sliderancestor));
            await this.util.verifyElementAttribute(this.creditaddress, "aria-checked", "true")
        }

        await this.util.verifyElementAttribute(this.mailingaddress, "aria-checked", "false")
        await this.util.verifyElementAttribute(this.creditaddress, "aria-checked", "true")
        await this.util.verifyElementAttribute(this.badaddress, "aria-checked", "false")
    }

    /**
     * This method is used to verify warning message without adding mailing address
     */
    async verifyWarningMessageNotSelectingMailingAddress() {
        await this.util.verifyElementPresent(this.warningmsgheader);
        await this.util.verifyElementPresent(this.warningmsgtext);
        await this.util.clickElement(this.warningmsgokbtn)
        await this.util.verifyElementNotPresent(this.warningmsgheader)

    }

    /**
     * This method is used to seelct only bad address and verify UI behaviour
     */
    async selectOnlyBadAddressSliderAndVerify() {

        if (await this.util.getAttributeValue(this.mailingaddress, "aria-checked") == "false") {
            await this.util.clickElement(this.mailingaddress.locator(this.sliderancestor));
            await this.util.verifyElementAttribute(this.mailingaddress, "aria-checked", "true")
        }
        if (await this.util.getAttributeValue(this.creditaddress, "aria-checked") == "false") {
            await this.util.clickElement(this.creditaddress.locator(this.sliderancestor));
            await this.util.verifyElementAttribute(this.creditaddress, "aria-checked", "true")
        }

        await this.util.verifyElementAttribute(this.mailingaddress, "aria-checked", "true")
        await this.util.verifyElementAttribute(this.creditaddress, "aria-checked", "true")

        await this.util.clickElement(this.badaddress.locator(this.sliderancestor))
        await this.util.verifyElementAttribute(this.badaddress, "aria-checked", "true")

        await this.util.verifyElementAttribute(this.mailingaddress, "aria-checked", "false")
        await this.util.verifyElementAttribute(this.creditaddress, "aria-checked", "false")
    }

    /**
     * This method is used to verify Bad address label in the added address
     */
    async verifyBadAddresLabel() {
        await this.util.verifyContainsText(this.addressname, 'Bad Address');
    }

    /**This method is used to verify the eror message for adding already added type */

    /**
     * This method is used to verify the 
     * @param testdata
     */
    async verifyErrorMsgForSlectingAlreadyAddedType(testdata: any) {
        await this.fillAddressDetails(testdata);
        await this.clickOnAddAddreessBtn()
        await this.util.clickElement(this.addresstype);
        await this.util.clickElement(await this.getDropdownValue(testdata.addresstype));
        await this.util.verifyElementPresent(this.typeerrormsg)
    }

    /**
     * This method is used to validate the added data after clicking back button
     * @param testdata 
     */
    async verifyValuesAfterBackFromAnotherForm(testdata: any) {

        await this.util.verifyTextPresent(this.addresstypelabel, testdata.addresstype);
        await this.util.verifyContainsText(this.addressname, testdata.addressline);
        await this.util.verifyTextPresent(this.addresstype, this.addresstypdropdownvalues[1]);

    }

}