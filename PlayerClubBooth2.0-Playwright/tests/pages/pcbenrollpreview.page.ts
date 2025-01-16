import { FrameLocator, Locator, Page } from "@playwright/test";
import PlaywrightUtil from "../../utils/playwright-utils";
import PCBEnrollPossibleMatchesPage from "./pcbenrollpossiblematches.page";


export default class PCBEnrollPreviewPage {
    
    //library objects declaration
    page: Page;
    util: PlaywrightUtil;
    
    //Form Locators
    playerinfo:Locator;savebtn:Locator;nextbtn:Locator;
    
    //Marketing Locators
    atttactfilled:Locator; langfilled:Locator; anniversaryfilled:Locator; affilicationfilled:Locator; flyerfilled:Locator;
    companyfilled:Locator; positionfilled:Locator;sourcefilled:Locator;pointretirestatus:Locator;

    //frmae locator
    framelocator:FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.util = new PlaywrightUtil();
        const frameid = "#iframe-PatronManagement";
        this.framelocator = this.page.frameLocator(`${frameid}`);

        //Form Locators
        this.playerinfo=this.framelocator.getByRole('heading', { name: 'Player Info' });
        this.nextbtn=this.framelocator.getByRole('button', { name: 'NEXT' });
        this.savebtn=this.framelocator.getByRole('button', { name: 'SAVE' });

        //Player Info 
        // this.namefilles = this.framelocator.locator('(//*[@class="pb-2"]/li)[2]')
        // this.namefilles = this.framelocator.locator('(//*[@class="pb-2"]/li)[2]')
        // this.namefilles = this.framelocator.locator('(//*[@class="pb-2"]/li)[2]')
        // this.namefilles = this.framelocator.locator('(//*[@class="pb-2"]/li)[2]')
        // this.namefilles = this.framelocator.locator('(//*[@class="pb-2"]/li)[2]')

        //Marketing locators
        this.atttactfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[2]')
        this.langfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[4]')
        this.anniversaryfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[6]')
        this.affilicationfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[8]')
        this.flyerfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[10]')
        this.companyfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[12]')
        this.positionfilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[14]')
        this.sourcefilled = this.framelocator.locator('(//*[@class="pb-3"]/li)[16]')
        this.pointretirestatus = this.framelocator.locator('(//*[@class="pb-3"]/li)[18]')

}  

/**
 * This method is used to verify the enroll preview page is present
 */

async verifyEnrollPreviewPageIsPresent(){
    await this.util.verifyElementPresent(this.playerinfo);
}

/**
 * This method is used to verify the enroll preview page is present
 */

async verifyMarketingInfoIsPresent(testdata:any){


    await this.util.verifyTextPresent(this.atttactfilled,testdata.mattractype);
    await this.util.verifyTextPresent(this.langfilled,testdata.mlanguage);
    await this.util.verifyContainsAnyText(this.anniversaryfilled);
    await this.util.verifyTextPresent(this.affilicationfilled,testdata.maffiliationtype);
    await this.util.verifyContainsText(this.flyerfilled,testdata.mflyertype);
    await this.util.verifyTextPresent(this.companyfilled,testdata.mcompany);
    await this.util.verifyTextPresent(this.positionfilled,testdata.mposition);
    await this.util.verifyContainsText(this.sourcefilled,testdata.actualsource);
  //  await this.util.verifyTextPresent(this.pointretirestatus,testdata.mlanguage);
}


/**
 * This method is used to click the save button
 */
async clickOnSaveButton(){
    await this.util.clickElement(this.savebtn);
}

/**
 * This method is used to click the Next button
 */
async clickOnNextButton(){
    await this.util.clickElement(this.nextbtn);
}

/**
 * This method is used to click the save button
 */
async verifySaveNextBtn(){
    if(await this.util.isElementPresent(this.savebtn)){
        await this.util.verifyElementPresent(this.savebtn)
    }
    else{
        await this.util.verifyElementPresent(this.nextbtn);
    }
}

/**
 * This method is used to create a player
 * @param username 
 * @param password 
 */
async createAPlayer(username:string,password:string){
    if(await this.util.isElementPresent(this.nextbtn)){
        await this.util.clickElement(this.nextbtn);
        const pcbpossiblemathcespage=new PCBEnrollPossibleMatchesPage(this.page);
        pcbpossiblemathcespage.clickOnSaveButton(username,password);
    }
    else{
        await this.util.clickElement(this.savebtn);
    }
}
}