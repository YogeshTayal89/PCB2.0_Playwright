import { test } from "@playwright/test";
import Loginpage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import PCBHomePage from "../pages/pcbhome.page";
import PCBPlayerBasicDetailsPage from "../pages/pcbplayerbasicdetailspage";
import PCBPlayerDetailPage from "../pages/pcbplayerdetailpage";
import PCBSearchPage from "../pages/pcbsearchpage";
import PreRequisites from "../../test-setup/pre-requisites";
const testdata = require(`../testdata/${String(process.env.ENVIRONMENT)}.json`);

//variable for Login credentials
let username: any;
let userlname: any;
let password: any;

        //For config value
        let configvalue:string;
        let configreason:string;


//variable for enrollment data
let coupondata: any;

//for db
let dburl: any;


test.describe('PCB Player Detail Basic Tab Suite', () => {
    test.beforeAll(async () => {
        //reading credentials test data from ${environment}.json file
        username = testdata.credentials.testdata[0].username;
        userlname = testdata.credentials.testdata[0].userlname;
        //console.log("usernamecheck", userlname);
        password = testdata.credentials.testdata[0].password;
        //reading dburl
        dburl = testdata.credentials.testdata[0].dbpm;

        //reading enrollment test data
        coupondata = testdata.redeemcoupons.testdata[0];

    });

    test.beforeEach(async ({ page }, testInfo) => {
        // Tag is creating to run below method only for Patlock
        if (testInfo.tags[3] == '@patlock') {
            const prerequisite = new PreRequisites();
            prerequisite.addLock(dburl, coupondata.playerid)
        }else {
            configvalue='2';
            const prerequisite = new PreRequisites();
            prerequisite.clearLock(dburl, coupondata.playerid)
        }

        await test.step(`Updated Configglobal config value to ${configvalue} of Item id 302 and 303 for ${configreason}`, async () => {
            const prerequisites=new PreRequisites();
            await prerequisites.updatecompAuthorizeCommentConfig(dburl,configvalue)
            console.log("Config Value updated to "+configvalue);
            });



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
        await test.step('When I can do the search using any matching text', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.doSearch(coupondata.playerid + "," + coupondata.firstname);
        });
        await test.step('Then I can see the search result', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.verifySearchResultIsPresent(coupondata);
        });
        await test.step('Then it should show player details page dialog, there click on Basic tab button', async () => {
            const pcbplayerdetailpage = new PCBPlayerDetailPage(page);
            await pcbplayerdetailpage.verifyBasicTabIsPresent();
            //   await pcbplayerdetailpage.clickOnBasicTab();
        });

    });


    test('Scenario Outline: As a user , I can search a player and Verify Marketing Authorizer is assigned  @BasicTab @Regression', async ({ page }) => {

        await test.step('Then I can navigate to Basic tab page and see Marketing Authorizer is assigned', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthValueOnSearch(userlname);
            // await pcbplayerbasicdetailspage.verifyMarketingAuthClick();
        });

    });

    test('Scenario Outline: As a user , I can Search and verify assigned marketing authorizer information pop up and then close on player details basic tab page @BasicTab @Smoke @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page and click on Market Auth ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthClick();
        });

        await test.step('Then I can see marketing info pop up and close pop up ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthInfoOnSearch(userlname);
            await pcbplayerbasicdetailspage.clickOnMarktAuthOKButton();
        });

    });


    test('Scenario Outline: As a user , I can able to click rewards link to make sure Comp Authorization window is opening @BasicTab @Regression', async ({ page }) => {

        await test.step('When I can click the rewards arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickRewards();
        });

        await test.step('Then I can see the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRewardPopupIsPresent();
        });

        await test.step('Then I can close the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.closeRewardsPopup();
        });

    });

    test('Scenario Outline: As a user , I can click Cashback/Point arrow link to make sure Comp Authorization window is opening @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the Cashback/Point arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickCashBack();
        });

        await test.step('Then I can see the Cashback/Point popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyCashbackPopupIsPresent();
        });

        await test.step('Then I can close the cashback/point popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.closeCashbackPopup();
        });

    });

    test('Scenario Outline: As a user , I can click primarycomp arrow link to make sure Comp Authorization window is opening @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the primary comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickPrimaryComp();
        });
        await test.step('Then I can see the primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPrimaryCompPopupIsPresent();
        });

        await test.step('Then I can close the primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.closePrimaryCompPopup();
        });

    });

    test('Scenario Outline: As a user , I can click secondary comp arrow link to make sure Comp Authorization window is opening @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the secondary comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickSecondaryComp();
        });
        await test.step('Then I can see the secondary comp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifySecondaryCompPopupIsPresent();
        });

        await test.step('Then I can close the secondary comp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.closeSecondaryCompPopup();
        });

    });

    test('Scenario Outline: As a user , I can able to see error message if Restricted comment is not entered @BasicTab @Regression', async ({ page }) => {

        await test.step('When I can click the rewards arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickRewards();
        });

        await test.step('Then I can see the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRewardPopupIsPresent();
        });

        await test.step('Then I can see restricted comment if not filled while Issue a reward', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.validateRestrictedCommentError();

        });

    });



    test('Scenario Outline: As a user , I can Issue single Rewards from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the rewards arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickRewards();
        });

        await test.step('Then I can see the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRewardPopupIsPresent();
        });

        await test.step('Then I can Issue a reward', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueSingleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();

        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();


        });

    });

    test('Scenario Outline: As a user , I can Issue Single Cashback (Points) from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the cashback arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickCashBack();
        });

        await test.step('Then I can see the cashback popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyCashbackPopupIsPresent();
        });

        await test.step('Then I can Issue a cashback', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueSingleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();
        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();


        });

    });

    test('Scenario Outline: As a user , I can Issue Single Primary Comp from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the primary comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickPrimaryComp();
        });
        await test.step('Then I can see the primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPrimaryCompPopupIsPresent();
        });
        await test.step('Then I can Issue Single primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueSingleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();

        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });

    });

    test('Scenario Outline: As a user , I can Issue Single Secondary Comp from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the Secondary Comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickSecondaryComp();
        });
        await test.step('Then I can see the Secondary Comp popup and issue single comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifySecondaryCompPopupIsPresent();
            await pcbplayerbasicdetailspage.issueSingleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();
        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)
        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });

    });


    test('Scenario Outline: As a user , I can Issue Multiple Rewards from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the rewards arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickRewards();
        });

        await test.step('Then I can see the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRewardPopupIsPresent();
        });

        await test.step('Then I can Issue Multiple reward', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueMultipleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();

        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();


        });

    });
    test('Scenario Outline: As a user , I can Issue Multiple Cashback (Points) from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        let remainingpoint: any;
        await test.step('When I can click the cashback arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickCashBack();
        });

        await test.step('Then I can see the cashback popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyCashbackPopupIsPresent();
        });

        await test.step('Then I can Issue Multiple cashback', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueMultipleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();

        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();


        });

    });
    test('Scenario Outline: As a user , I can Issue Multiple Primary Comp from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the primary comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickPrimaryComp();
        });
        await test.step('Then I can see the primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPrimaryCompPopupIsPresent();
        });
        await test.step('Then I can Issue Multiple primarycomp popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueMultipleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();

        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });

    });

    test('Scenario Outline: As a user , I can Issue Multiple Secondary Comp from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the Secondary Comp arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickSecondaryComp();
        });
        await test.step('Then I can see the Secondary Comp popup and issue Multiple comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifySecondaryCompPopupIsPresent();
            await pcbplayerbasicdetailspage.issueMultipleComps(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();
        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)
        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });

    });

    test('Scenario Outline: As a user , I can Issue Multiple Comp Types from Player Basic tab @BasicTab @Regression', async ({ page }) => {
        await test.step('When I can click the rewards arrow button', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.clickRewards();
        });

        await test.step('Then I can see the reward popup', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRewardPopupIsPresent();
        });

        await test.step('Then I can Issue Multiple Comps Types reward', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.issueMultipleCompsTypes(coupondata);
            await pcbplayerbasicdetailspage.clickIssueBtn();
        });
        await test.step('Then I can Authorize Comp', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAuthorizeCompPopup(username, password)

        });
        await test.step('Then I can see the Redemption confirmation pop up and redirect to balance point in Basic Details Tab', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyRedemptionConfirmPopupIsPresent();
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();


        });

    });



    test('Scenario Outline: As a user , I can verify PatLock button is clickable and close @BasicTab @Smoke @Regression @patlock', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page', async () => {

            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearPatLockBtnPresent();
        });
        await test.step('Then I can open and cloe Patlock pop up', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearPatLockBtnclickclose();
        });



    });

    test('Scenario Outline: As a user , I can clear single patlock @BasicTab @Smoke @Regression @patlock', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page', async () => {

            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearPatLockBtnPresent();
        });
        await test.step('Then I can clear single patlock', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearSinglePatLock();

        });

    });

    test('Scenario Outline: As a user , I can clear ALL patlocks @BasicTab @Smoke @Regression @patlock', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page', async () => {

            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearPatLockBtnPresent();
        });
        await test.step('Then I can clear multiple or ALL locks', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyclearAllPatLocks();

        });

    });

});
