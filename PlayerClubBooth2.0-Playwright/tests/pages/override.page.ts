import {Locator,FrameLocator, Page} from "@playwright/test"
import PlaywrightUtil from "../../utils/playwright-utils";


export default class Override {

   //library objects declaration
   page: Page;
   util: PlaywrightUtil;

   //Locators for login form
   overrideheader:Locator;overrideusername: Locator; overridepassword: Locator; overrridecancelbtn: Locator; overrideokbtn: Locator;
   authorizepostalheader:Locator; authorizeusername:Locator; authorizepassword:Locator;

    //frame locator
    framelocator:FrameLocator;

   constructor(browserpage: Page) {
      this.page = browserpage
      this.util = new PlaywrightUtil();

      const frameid = "#iframe-PatronManagement";
      this.framelocator = this.page.frameLocator(`${frameid}`);

      this.overrideheader=this.framelocator.getByRole('heading', { name: 'Override' });
     // this.overrideusername=this.framelocator.getByRole('textbox', { name: 'Enter user name' });
      this.overrideusername= this.framelocator.getByPlaceholder('Enter Username')
      this.overridepassword=this.framelocator.getByRole('textbox', { name: 'Enter password' });

      this.authorizepostalheader= this.framelocator.getByRole('heading', { name: 'Authorize New Postal Code' });
      this.authorizeusername = this.framelocator.getByPlaceholder('Enter Username');
      this.authorizepassword = this.framelocator.getByPlaceholder('Enter Password', { exact: true });

      this.overrridecancelbtn=this.framelocator.getByRole('button', { name: 'CANCEL' });
      this.overrideokbtn=this.framelocator.getByRole('button', { name: 'OK' });

   }

/**
 * This method is used to override by providing the credentials
 * @param username 
 * @param password 
 */
   async overrideWithCredentials(username:string, password:string)
   {
      await this.util.typeText(this.overrideusername, username);
      await this.util.typeText(this.overridepassword, password);
      await this.util.clickElement(this.overrideokbtn)
   }




   /**
    * This method is used to Authorized postal code
    */
   async authorizePostalWithCredentials(username:string, password:string)
   {  await this.util.verifyElementPresent(this.authorizepostalheader);
      await this.util.typeText(this.authorizeusername, username);
      await this.util.typeText(this.authorizepassword, password);
      await this.util.clickElement(this.overrideokbtn)
   }
}