import { FrameLocator, Locator, Page } from "@playwright/test";
import PlaywrightUtil from "../../utils/playwright-utils";


export default class PCBPlayerBasicDetailsPage {

    //library objects declaration
    page: Page;
    util: PlaywrightUtil;
    framelocator: FrameLocator;
    //Form Locators
    playerinfoheadingloc: Locator; balancesheadingloc: Locator; preferredname: Locator; phonenumber: Locator;
    emailid: Locator; address: Locator;

    //Marketing Auth locators
    marketingauthText: Locator; marketingauthvalue: Locator; mktauthheader: Locator; mktauthassigned1cell: Locator;
    mktauthassigned2cell: Locator; mktauthOKbtn: Locator;

    // Comp Issuance Common loctors
    compheading: Locator; compcategory: Locator; compproperty: Locator; comppropsite1: Locator; compoutlet: Locator; compquantity: Locator; compmultipletoggle: Locator;rescommenterror:Locator;comptypetab:Locator
    compprintcomment: Locator; comprestcomment: Locator; compaddbtn: Locator; compissuebtn: Locator; compclosebtn: Locator; compautomation: Locator; compissuedstatus: Locator;comptypefree:Locator

    //Reward loctors
    rewardlablename: Locator; rewardsarrow: Locator; rewardtotalpointinbasictab: Locator; rewardsheading: Locator; rewardsclosebtn: Locator; rewardstype: Locator; rewardrescomment: Locator; rewardsissuebtn: Locator;
    rewardtotalpoint: Locator; rewardtotaldollarinpopup: Locator; rewarddeduction: Locator;comptypereward:Locator

    //Cashback locators
    cashbackarrow: Locator; cashbacktotaldollarinbasictab: Locator; cashbackheading: Locator; cashbackclosebtn: Locator; cashbacktype: Locator; cashbackrescomment: Locator; cashbackissuebtn: Locator;
    comptypepoint:Locator
    //Primary comp Locators
    primarycomparrow: Locator; primarycompheading: Locator; primarycompclosebtn: Locator; primarycomptotaldollarinbasictab: Locator; primarycomptype: Locator;
    comptypeprimcomp:Locator;
    //Secondary comp Locators
    secondcomparrow: Locator; secondcomptotaldollarinbasictab: Locator;comptypesecondcomp:Locator

    //Authorize window locators
    authorizeheader: Locator; authorizeusername: Locator; authorizepassword: Locator; authorizeokbtn: Locator; authorizecancelbtn: Locator;

    //successmessage locators
    successmsg: Locator; successokbtn: Locator

    //Clear pat lock locators
    patlockbtn: Locator; patlockheader: Locator; patlockinfo: Locator; patlockcancel: Locator; patlockclear: Locator; lockselectcell: Locator;
    lockconfirmationheader: Locator; lockconfirmcancel: Locator;
    lockconfirmok: Locator; lockstatusheader: Locator; lockstatusmsg: Locator; lockselectall: Locator;


    constructor(page: Page) {
        this.page = page;
        this.util = new PlaywrightUtil();
        const frameid = "#iframe-PatronManagement";
        this.framelocator = this.page.frameLocator(`${frameid}`);

        //Form Locators
        this.playerinfoheadingloc = this.framelocator.getByRole('heading', { name: 'Player Info' })
        this.balancesheadingloc = this.framelocator.getByRole('heading', { name: 'Balances' })
        this.preferredname = this.framelocator.locator("//li[text()='Preferred Name']/following-sibling::li[1]")
        this.phonenumber = this.framelocator.locator("//li[text()='Phone']/following-sibling::li[1]");
        this.emailid = this.framelocator.locator("//li[text()='Email']/following-sibling::li[1]");
        this.address = this.framelocator.locator("//li[text()='Address']/following-sibling::li[1]");

        //Marketing Authorizer
        this.marketingauthText = this.framelocator.getByText('MKT.AUTH.');
        this.marketingauthvalue = this.framelocator.locator('.text-primary.marketing-authorizer');
        this.mktauthheader = this.framelocator.getByRole('heading', { name: 'Marketing Authorizer' });
        this.mktauthassigned1cell = this.framelocator.locator("(//td[@role='cell'])[2]");
        this.mktauthassigned2cell = this.framelocator.locator("(//td[@role='cell'])[4]");
        this.mktauthOKbtn = this.framelocator.getByRole('button', { name: 'OK' });

        // Common lables in Comp issuance
        this.compheading = this.framelocator.getByRole('heading', { name: 'Comp Authorization' });
        this.comptypetab = this.framelocator.locator(".mb-3 > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix").first();
        this.comptypefree = this.framelocator.locator("(//span[@class='mat-option-text'])[1]")
        this.comptypepoint = this.framelocator.locator("(//span[@class='mat-option-text'])[2]")
        this.comptypeprimcomp = this.framelocator.locator("(//span[@class='mat-option-text'])[3]")
        this.comptypereward = this.framelocator.locator("(//span[@class='mat-option-text'])[4]")
        this.comptypesecondcomp = this.framelocator.locator("(//span[@class='mat-option-text'])[5]")
        this.compproperty = this.framelocator.locator('div:nth-child(3) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        this.comppropsite1 = this.framelocator.getByRole('option', { name: 'BVT 9.1 Site1' }).locator('span')
        this.compoutlet = this.framelocator.getByText('Select (Value - PerCover)');
        this.compautomation = this.framelocator.locator("(//span[@class='mat-option-text'])[2]");
        this.compquantity = this.framelocator.locator("(//input[@type='text'])[2]")
        this.compmultipletoggle = this.framelocator.locator('.mat-slide-toggle-bar').first();
        this.compprintcomment = this.framelocator.getByPlaceholder('Enter Printed Comment');
        this.comprestcomment = this.framelocator.getByPlaceholder('Enter restricted comment');
        this.compaddbtn = this.framelocator.getByRole('button', { name: 'add ADD' })
        this.compissuebtn = this.framelocator.getByRole('button', { name: 'Issue' });
        this.compclosebtn = this.framelocator.getByRole('button', { name: 'Close' })
        //successmessage
        this.successmsg = this.framelocator.getByRole('heading', { name: 'Redemption Confirmation' });
        this.compissuedstatus = this.framelocator.getByRole('cell', { name: ' Issued ' }).first();
        this.successokbtn = this.framelocator.getByRole('button', { name: 'OK' }).first();
        this.rescommenterror = this.framelocator.getByText('Please enter "Restricted Comment". ')



        //Rewards
        this.rewardlablename = this.framelocator.locator("//span[@class='text']");
        this.rewardtotalpointinbasictab = this.framelocator.locator('//div[2]/igt-card/div/mat-card/mat-card-content/div/ul/li[1]/span[2]/span');
        this.rewardsarrow = this.framelocator.locator("//li[1]/span[2]/span/div[text()=' arrow_right ']");
        this.rewardstype = this.framelocator.locator(".mb-3 > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix").first();

        this.rewardtotalpoint = this.framelocator.locator('(//*[@id="igt_input_"])[1]')  // reward pts
        this.rewardtotaldollarinpopup = this.framelocator.locator('(//*[@id="igt_input_"])[2]')  // Quantity
        this.rewarddeduction = this.framelocator.locator("(//td[contains(@role,'cell')])[12]")


        //Cashback
        this.cashbacktotaldollarinbasictab = this.framelocator.locator('//div[2]/igt-card/div/mat-card/mat-card-content/div/ul/li[2]/span[2]/span');
        this.cashbackarrow = this.framelocator.locator("//li[2]/span[2]/span/div[text()=' arrow_right ']")

        //Primary Comp locators
        this.primarycomptotaldollarinbasictab = this.framelocator.locator('//div[2]/igt-card/div/mat-card/mat-card-content/div/ul/li[3]/span[2]/span');
        this.primarycomparrow = this.framelocator.locator("//li[3]/span[2]/span/div[text()=' arrow_right ']");

        // Secondary Comp Locators
        this.secondcomptotaldollarinbasictab = this.framelocator.locator('//div[2]/igt-card/div/mat-card/mat-card-content/div/ul/li[4]/span[2]/span');
        this.secondcomparrow = this.framelocator.locator("//li[4]/span[2]/span/div[text()=' arrow_right ']");

        //Authorize window
        this.authorizeheader = this.framelocator.getByRole('heading', { name: 'Authorize Comp' });
        this.authorizeusername = this.framelocator.getByRole('textbox', { name: 'Enter Username' });
        this.authorizepassword = this.framelocator.getByRole('textbox', { name: 'Enter Password' });
        this.authorizeokbtn = this.framelocator.getByRole('button', { name: 'OK' });
        this.authorizecancelbtn = this.framelocator.getByLabel('Authorize Comp').getByRole('button', { name: 'Cancel' })


        //Clear pat lock feature
        this.patlockbtn = this.framelocator.getByRole('button', { name: 'player lock' });
        this.patlockheader = this.framelocator.getByLabel('Player Locks');
        this.patlockinfo = this.framelocator.getByText('Please select the lock(s)');
        this.patlockcancel = this.framelocator.getByRole('button', { name: 'CANCEL' });
        this.patlockclear = this.framelocator.getByRole('button', { name: 'CLEAR' });
        this.lockselectall = this.framelocator.locator('(//span[contains(@class,"mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin")])[1]');
        this.lockselectcell = this.framelocator.getByRole('cell', { name: 'select row NaN' }).first();
        this.lockconfirmationheader = this.framelocator.getByRole('heading', { name: 'Confirmation' })
        this.lockconfirmcancel = this.framelocator.getByLabel('Confirmation').getByRole('button', { name: 'CANCEL' })
        this.lockconfirmok = this.framelocator.getByRole('button', { name: 'OK' });
        this.lockstatusheader = this.framelocator.getByRole('heading', { name: 'Clear Player Lock Status' });
        this.lockstatusmsg = this.framelocator.getByRole('cell', { name: 'Success' }).first();

    }


    /**
      * This method is used to Authorize Comp
      */
    async verifyAuthorizeCompPopup(username: string, password: string) {
            await this.util.isElementPresent(this.authorizeheader)
            await this.util.typeText(this.authorizeusername, username);
            await this.util.typeText(this.authorizepassword, password)
            await this.util.clickElement(this.authorizeokbtn)
    }

    /**
     * This method is used to verify the PCB enrolment basic Page is present 
     */
    async verifyBasicDetailsPageIsPresent() {
        await this.util.verifyElementPresent(this.playerinfoheadingloc);
        await this.util.verifyElementPresent(this.balancesheadingloc);
    }

    /**
     * This method is used to verify Patlock button is present
     */
    async verifyclearPatLockBtnPresent() {
        await this.util.verifyElementPresent(this.patlockbtn);
    }

    /**
     * This method is used to verify Patlock button is click and close
     */
    async verifyclearPatLockBtnclickclose() {
        await this.util.clickElement(this.patlockbtn);
        // await this.util.verifyElementPresent(this.patlockheader);
        await this.util.verifyContainsText(this.patlockheader, "Player Locks");
        await this.util.clickElement(this.patlockcancel);
    }


    /**
     * This method is used to verify single Patlock is clear
     */
    async verifyclearSinglePatLock() {
        await this.util.clickElement(this.patlockbtn);
        await this.util.verifyContainsText(this.patlockheader, "Player Locks");
        await this.util.verifyTextPresent(this.patlockinfo, "Please select the lock(s) that you want to clear.");
        await this.util.clickElement(this.lockselectcell);
        await this.util.clickElement(this.patlockclear);
        await this.util.verifyTextPresent(this.lockconfirmationheader, "Confirmation");
        await this.util.clickElement(this.lockconfirmok);
        await this.util.verifyTextPresent, (this.lockstatusheader, "Clear Player Lock Status");
        await this.util.verifyTextPresent(this.lockstatusmsg, "Success");
        await this.util.clickElement(this.lockconfirmok);

    }

    /**
 * This method is used to verify single Patlock is clear
 */
    async verifyclearAllPatLocks() {
        await this.util.clickElement(this.patlockbtn);
        await this.util.verifyElementPresent(this.patlockheader);
        await this.util.verifyElementPresent(this.patlockinfo);
        await this.util.clickElement(this.lockselectall);
        await this.util.clickElement(this.patlockclear);
        await this.util.verifyElementPresent(this.lockconfirmationheader);
        await this.util.clickElement(this.lockconfirmok);
        await this.util.verifyElementPresent(this.lockstatusheader);
        //await this.util.verifyElementPresent(this.lockstatusmsg);
        await this.util.clickElement(this.lockconfirmok);

    }



    /**
     * This method is used to verify Marketing Auth Lable is present
     */
    async verifyMarketingAuthLabelPresent() {
        await this.util.verifyElementPresent(this.marketingauthText);

    }

    /**
   * This method is used to verify Marketing Auth value as NOT assigned during enrollment
   */
    async verifyMarketingAuthValueOnEnrollment(testdata: any) {
        await this.util.verifyContainsText(this.marketingauthvalue, testdata.mktauthenroll)

    }

    /**
   * This method is used to verify Marketing Auth value as NOT assigned during enrollment
   */
    async verifyMarketingAuthValueOnSearch(userlname: string) {
        // await this.util.verifyTextContainsElementText(this.marketingauthvalue,userlname)
        await this.util.verifyContainsText(this.marketingauthvalue, userlname)

    }

    /**
     * This method is used to verify Marketing Auth clickable
     */
    async verifyMarketingAuthClick() {

        await this.util.clickElement(this.marketingauthvalue);
    }

    /**
    * This method is used to verify Marketing Auth  Info popup on enrollment
    */
    async verifyMarketingAuthInfoOnEnroll(testdata: any) {
        await this.util.waitForPagetoLoad(this.page, 2000);
        // await this.util.verifyElementPresent(this.mktauthheader);
        await this.util.verifyTextPresent(this.mktauthheader, 'Marketing Authorizer')
        await this.util.verifyContainsText(this.mktauthassigned1cell, testdata.mktauthenroll)
        await this.util.verifyContainsText(this.mktauthassigned2cell, testdata.mktauthenroll)

    }

    /**
    * This method is used to verify Marketing Auth  Info popup on Search
    */
    async verifyMarketingAuthInfoOnSearch(userlname: string) {
        await this.util.waitForPagetoLoad(this.page, 2000);

        await this.util.verifyTextPresent(this.mktauthheader, 'Marketing Authorizer')

        await this.util.verifyContainsText(this.mktauthassigned1cell, userlname)

        //await this.util.verifyContainsText(this.mktauthassigned2cell,testdata.mktauthenroll)
        //  await this.util.verifyElementPresent(this.mktauthassigned2cell);
    }

    /**
    * This method is used to click on OK button on Marketing Auth pop up
    */
    async clickOnMarktAuthOKButton() {
        await this.util.clickElement(this.mktauthOKbtn);
    }

    /**
     * This method is used to verify player info text is present
     */
    async verifyPlayerInfoText() {
        await this.util.verifyElementPresent(this.playerinfoheadingloc);
    }

    /**
     * This method is used to verify balances test is present
     */
    async verifyBalancesText() {
        await this.util.verifyElementPresent(this.playerinfoheadingloc);
    }


    /**
     * This method is used to verify the preferred name
     */
    async verifyPreferredName(testdata: any) {
        await this.util.verifyTextPresent(this.preferredname, testdata.preferredname)
    }

    /**
     * This method is used to verify the phone number
     */
    async verifyPhoneNumber(testdata: any) {
        const phonenumberfromloc: any = await this.util.getText(this.phonenumber);
        await this.util.verifyGivenStringsEqual(phonenumberfromloc.replace(/[^0-9.]/g, ''), testdata.phonenumber);
    }

    /**
     * This method is used to verify the email id
     */
    async verifyEmailID(testdata: any) {
        await this.util.verifyTextPresent(this.emailid, "Main Email  : " + testdata.email)
    }

    /**
    * This method is used to verify the address
    */
    async verifyAddress(testdata: any) {
        await this.util.verifyContainsText(this.address, "Home  : " + testdata.addressline + ", " + testdata.addressline + ", " + testdata.addresscity + ", " + (testdata.addresszipcode).toString().replace(/[^\w]/g, ''))
    }

    /**
     * This method is used to click the rewards 
     */

    async clickRewards() {
        await this.util.clickElement(this.rewardsarrow);
    }
    /**
     * This method is used to verify Reward popup
     */
    async verifyRewardPopupIsPresent() {
        await this.util.verifyElementPresent(this.compheading);
    }

    /**
     * This method is used to close the Rewards popup
     */
    async closeRewardsPopup() {
        await this.util.clickElement(this.compclosebtn);
    }

    /**
    * This method is used to click the Cashback
    */
    async clickCashBack() {
        await this.util.clickElement(this.cashbackarrow);
    }

    /**
     * This method is used to verify cashback popup
     */
    async verifyCashbackPopupIsPresent() {
        await this.util.verifyElementPresent(this.compheading);
    }

    /**
     * This method is used to close the Rewards popup
     */
    async closeCashbackPopup() {
        await this.util.clickElement(this.compclosebtn);
    }


    /**
     * This method is used to click the Primary comp 
     */

    async clickPrimaryComp() {
        await this.util.clickElement(this.primarycomparrow);
    }

    /**
    * This method is used to verify primary comp popup
    */
    async verifyPrimaryCompPopupIsPresent() {
        await this.util.verifyElementPresent(this.compheading);
    }

    /**
     * This method is used to close the PrimaryComp popup
     */
    async closePrimaryCompPopup() {
        await this.util.clickElement(this.compclosebtn);
    }

    /**
     * This method is used to click the Secondary comp 
     */

    async clickSecondaryComp() {
        await this.util.clickElement(this.secondcomparrow);
    }

    /**
    * This method is used to verify Secondary comp popup
    */
    async verifySecondaryCompPopupIsPresent() {
        await this.util.verifyElementPresent(this.compheading);
    }

    /**
     * This method is used to close the Secondary Comp popup
     */
    async closeSecondaryCompPopup() {
        await this.util.clickElement(this.compclosebtn);
    }

    /**
    * This method is used to verify Secondary comp popup
    */
    async verifyRedemptionConfirmPopupIsPresent() {
            await this.util.waitForPagetoLoad(this.page, 2000);
            await this.util.verifyElementPresent(this.successmsg);
            await this.util.verifyElementPresent(this.compissuedstatus);
            await this.util.clickElement(this.successokbtn);

        }
    /**
    * This method is used to click the Cashback
    */
    async clickIssueBtn() {
        await this.util.clickElement(this.compissuebtn);
    }


    /**
     * This method is used to issue single comps from balance bucket
     */
    async issueSingleComps(testdata: any) {
        await this.util.clickElement(this.compproperty);
        await this.util.clickElement(this.comppropsite1);
        await this.util.clickElement(this.compoutlet);
        await this.util.clickElement(this.compautomation);
        await this.util.verifyDisabled(this.compmultipletoggle)
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.typeText(this.compprintcomment, testdata.restrictedcommenttext)
        await this.util.typeText(this.comprestcomment, testdata.restrictedcommenttext)
        await this.util.clickElement(this.compaddbtn);

    }
    /* 
    This method is used to validate restricted comment error
     */
    async validateRestrictedCommentError(){
        await this.util.clickElement(this.compproperty);
        await this.util.clickElement(this.comppropsite1);
        await this.util.clickElement(this.compoutlet);
        await this.util.clickElement(this.compautomation);
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.clickElement(this.compaddbtn);
        await this.util.verifyElementPresent(this.rescommenterror)
    }

    /**
     * This method is used to issue multiple comps from balance bucket
     */
    async issueMultipleComps(testdata: any) {
        await this.util.clickElement(this.compproperty);
        await this.util.clickElement(this.comppropsite1);
        await this.util.clickElement(this.compoutlet);
        await this.util.clickElement(this.compautomation);
       await this.util.typeText(this.compquantity, testdata.quantity);
       await this.util.verifyEnabled(this.compmultipletoggle)
       await this.util.clickElement(this.compmultipletoggle);
        await this.util.typeText(this.compprintcomment, testdata.restrictedcommenttext)
        await this.util.typeText(this.comprestcomment, testdata.restrictedcommenttext)
        await this.util.clickElement(this.compaddbtn);
        await this.util.waitForPagetoLoad(this.page, 2000);
    }

    /**
     * This method is used to issue multiple comps types from balance bucket
     */
    async issueMultipleCompsTypes(testdata: any) {
        await  this.issueMultipleComps(testdata)
        // add primary comp
        await this.util.clickElement(this.comptypetab);
        await this.util.clickElement(this.comptypeprimcomp);
       await  this.issueMultipleComps(testdata)
        // add points
        await this.util.clickElement(this.comptypetab);
        await this.util.clickElement(this.comptypepoint);
       await  this.issueMultipleComps(testdata)
         // add secondary comp
         await this.util.clickElement(this.comptypetab);
         await this.util.clickElement(this.comptypesecondcomp);
         await  this.issueMultipleComps(testdata)

    }


}