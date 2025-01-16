import {test } from "@playwright/test";
import Loginpage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import PCBHomePage from "../pages/pcbhome.page";
import PCBSearchPage from "../pages/pcbsearchpage";
import PCBPlayerDetailPage from "../pages/pcbplayerdetailpage";
import PCBPlayerCardDetailsPage from "../pages/pcbplayercarddetailspage";
import PreRequisites from "../../test-setup/pre-requisites";
const testdata = require(`../testdata/${String(process.env.ENVIRONMENT)}.json`);

//variable for Login credentials
let username: any;
let password: any;

//for db
let dburl: any;
//variable for enrollment data
let enrollmentdata:any;

test.describe('PCB Player Detail Card Page Suite', () => {
    test.beforeAll(async () => {
      //reading credentials test data from ${environment}.json file
       username = testdata.credentials.testdata[0].username;
       password = testdata.credentials.testdata[0].password;   
       dburl = testdata.credentials.testdata[0].dbpm;

       enrollmentdata=testdata.printcard.testdata[0];
       
     
    });

    test.beforeEach(async ({ page }, testInfo) => {

        if (testInfo.tags[2] == '@resetcard') {
            // Handle reset pin scenario
            const prerequisite = new PreRequisites();
            prerequisite.setPlayerCardPinLock(dburl, enrollmentdata.playerid);
            console.log("Player PIN Lock Set")
        } else if (testInfo.tags[2] == '@abandonedcard') {
            // Handle abandoned card scenario
            const prerequisite = new PreRequisites();
         prerequisite.handleAbandonedCard(dburl, enrollmentdata.playerid);
         console.log("Player Card Abandoned Set")
        } else {
            // Continue with other logic if none of the above conditions match
            console.log('No specific tag found, continuing with default logic.');
        }

    

        await test.step("Given I am on the login screen", async () => {
        const loginpage = new Loginpage(page);
        await loginpage.doNavigateToPortal("/")
        });
        await test.step(`Then I can login to the application using '${username}' and '${password}'`, async () => {
            const loginpage = new Loginpage(page);
            await loginpage.doLogin(username, password);
        });

        await test.step('Then I should see dashboard screen', async () => {
            const dashboardpage = new DashboardPage(page);
            await dashboardpage.isDashboardPresent();
        });

        await test.step(`When I click on PCB application`, async () => {
            const dashboardpage = new DashboardPage(page);
            await dashboardpage.clickOnPCBApp();
        });
        await test.step('Then I should see PCB Home Page', async () => {
            const pcbhomepage = new PCBHomePage(page);
            await pcbhomepage.verifyPCBHomePage();
        });
        await test.step('Then I can click on PCB Search', async () => {
            const pcbhomepage = new PCBHomePage(page);
            await pcbhomepage.clickOnSearch();
        });
        await test.step('Then I should see PCB Search Page', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.verifySearchPageIsPresent();
        });
        await test.step('When I can do the search using any matching text', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.doSearch(enrollmentdata.playerid+","+enrollmentdata.firstname);
        });
        await test.step('Then I can see the search result', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.verifySearchResultIsPresent(enrollmentdata);
        });
        await test.step('Then it should show player details page dialog, there click on Cards tab button', async () => {
            const pcbplayerdetailpage = new PCBPlayerDetailPage(page);
            await pcbplayerdetailpage.verifyCardsTabIsPresent();
            await pcbplayerdetailpage.clickOnCardsTab();
        });

    });

    test('Scenario Outline: As a user , I can print a card in card page @CardsTab @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can print a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPrintCard();
        });

    });


    test('Scenario Outline: As a user , I can see PIN LOCK status on card page @CardsTab @Regression @resetcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see PIN LOCK status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockStatus();
        });

    });


    test('Scenario Outline: As a user , I can see LOCK button and edit button disabled at Action when PIN is LOCKED in card page @CardsTab @Regression  @resetcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see PIN LOCK status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockStatus();
        });

        await test.step('Then I can see LOCK button and edit button disabled at Action on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyActionButtonsAtPinLock();
        });

    });

    test('Scenario Outline: As a user , I can cancel the Reseting card PIN LOCK status in card page @CardsTab @Regression  @resetcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see PIN LOCK status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockStatus();
        });

        await test.step('Then I can see Reset PIN lock Pop up', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockPopUp();
        });

        await test.step('Then I can cancel the Reseting card PIN LOCK status in card page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.resetPinLockClickCancel();
        });

        await test.step('Then I can see PIN LOCK status on a card after cancellation', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockStatus();
        });

    });

    test('Scenario Outline: As a user , I can Reseting card PIN LOCK status in card page @CardsTab @Regression  @resetcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see PIN LOCK status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockStatus();
        });

        await test.step('Then I can see Reset PIN lock Pop up', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyPinLockPopUp();
        });

        await test.step('Then I can click OK button on the Reseting card PIN LOCK status in card page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.resetPinLockClickOk();
        });

        await test.step('Then I can see Card status as ACTIVE on a card after cancellation', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardStatusAfterPinLockReset();
        });
    });

    test('Scenario Outline: As a user , I can see Abandoned status on card page @CardsTab @Regression @abandonedcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see Abandoned status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedLockStatus();
        });

    });


    test('Scenario Outline: As a user , I can see only edit button at Action when card is Abandoned in card page @CardsTab @Regression  @abandonedcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see Abandoned status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedLockStatus();
        });

        await test.step('Then I can see only edit button at Action when card is Abandoned', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyActionButtonsAbandoned();
        });

    });

    test('Scenario Outline: As a user , I can cancel the Reseting Abandoned card status in card page @CardsTab @Regression @abandonedcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see Abandoned status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedLockStatus();
        });

        await test.step('Then I can see Reset Abandoned lock Pop up', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedPopUp();
        });

        await test.step('Then I can cancel the Reseting Abandoned card status in card page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.resetAbandonedClickNo();
        });

        await test.step('Then I can see Abandoned status on a card after cancellation', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedLockStatus();
        });

    });

    test('Scenario Outline: As a user , I can Reseting card Abandoned status in card page @CardsTab @Regression @abandonedcard', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can see Abandoned status on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedLockStatus();
        });

        await test.step('Then I can see Reset Abandoned Pop up', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyAbandonedPopUp();
        });

        await test.step('Then I can click OK button on the Reseting card Abandoned status in card page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.resetAbandonedClickYes();
        });

        await test.step('Then I can see Card status as ACTIVE on a card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardStatusAfterPinLockReset();
        });
    });


    /**
     * The following test are no more valid. But keeping this incase any future refernce
     */
    test.skip('Scenario Outline: As a user , I can print the new card in card page (no more valid)', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can print the new card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyNewCardPrint();
        });

    });

    /**
     * The following test are no more valid. Butt keeping this incase any future refernce
     */
    test.skip('Scenario Outline: As a user , I can print the duplicate card in card page (no more valid)', async ({ page }) => {
        await test.step('Then I can navigate to Cards tab page', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyCardDetailsPageIsPresent()
        });

        await test.step('Then I can print the duplicate card', async () => {
            const pcpplayercarddetailpage=new PCBPlayerCardDetailsPage(page);
            await pcpplayercarddetailpage.verifyDuplicateCardPrint();
        });

    });


});
