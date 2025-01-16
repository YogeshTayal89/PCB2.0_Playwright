import { test } from "@playwright/test";
import Loginpage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import PCBHomePage from "../pages/pcbhome.page";
import PCBPlayerDetailPage from "../pages/pcbplayerdetailpage";
import PCBSearchPage from "../pages/pcbsearchpage";
import PCBPlayerGamingProfileExtendedPage from "../pages/pcbplayergamingprofileextendedpage"
import PreRequisites from "../../test-setup/pre-requisites";
const testdata = require(`../testdata/${String(process.env.ENVIRONMENT)}.json`);

//variable for Login credentials
let username: any;
let password: any;

//For config value
let configvalue:string;
let configreason:string;

//For DB
let dburl: any;

//variable for gaming profile data
let gamingdata: any;
let token: any;

//api url key
const baseSecurityIp = process.env.BASESECURITYIP!;
const baseSecurityApiIp = process.env.BASESECURITYAPIIP!;


test.describe('PCB Player Detail Gaming Profile Tab Suite', () => {
    test.beforeAll(async () => {
        //reading credentials test data from ${environment}.json file
        username = testdata.credentials.testdata[0].username;
        password = testdata.credentials.testdata[0].password;
        //db url
        dburl = testdata.credentials.testdata[0].dbpm;

        //Reading gaming profilr test data
        gamingdata = testdata.gamingprofile.testdata[0];

    });

    test.beforeEach(async ({ page, request },testInfo) => {
        if (testInfo.tags[2]=='@2'){
            configvalue='0';
            configreason='No Rounding Allowed'
        }

        await test.step(`Updated Configglobal config value to ${configvalue} of Item id 600 for ${configreason}`, async () => {
            const prerequisites=new PreRequisites();
            await prerequisites.setGamingRoundedConfig(dburl,configvalue)
            console.log("Config Value updated to "+configvalue+ ", and config reason "+configreason);
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
        await test.step('Then I should see PCB Search Page', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.verifySearchPageIsPresent();
        });
        await test.step('When I can do the search using any matching text', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.doSearch(gamingdata.playerid + "," + gamingdata.firstname);
        });
        await test.step('Then I can see the search result', async () => {
            const pcbsearchpage = new PCBSearchPage(page);
            await pcbsearchpage.verifySearchResultIsPresent(gamingdata);
        });
        await test.step('Then I can create token from API', async () => {
            const prerequisite = new PreRequisites();
            token = await prerequisite.getToken(baseSecurityIp, username, password, request)

        });
        await test.step('Then it should show player details page dialog, there click on comments tab button', async () => {
            const pcbplayerdetailpage = new PCBPlayerDetailPage(page);
            await pcbplayerdetailpage.verifyGamingProfileTabIsPresent
            await pcbplayerdetailpage.clickOnGamingProfileTab();
        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with Show as Summary for SLOTS tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
          await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.validateExtendedSummarySlots(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details data with ALL Site, ALL Players and Show as Summary for SLOTS tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select ALL Site, ALL Players and show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.validateExtendedAllSiteAllPlayersSummarySlots(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with Show as Summary for TABLE tab @GamingTab @Regression @2', async ({ page, request }) => {
        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTablestab()
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryTables(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

   test('Scenario Outline: As a user , I can validate Extended Details with ALL Site, ALL Players and Show as Summary for TABLE tab @GamingTab @Regression @2', async ({ page, request }) => {
        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTablestab()
            await pcbplayergamingprofileextendedpage.validateExtendedAllSiteAllPlayersSummaryTables(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with Show as Summary for Custom Ratings Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedCustomRatingstab()
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryCustomRatings(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with ALL Site, ALL Players and Show as Summary for Custom Ratings Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedCustomRatingstab()
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryAllSiteAllPlayersCustomRatings(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with Show as Summary for Expenses Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedExpensestab();
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryExpenses(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with ALL Site, ALL Players and Show as Summary for Expenses Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedExpensestab();
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryAllSiteAllPlayersExpenses(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with Show as Summary for ADDITIONAL STATS Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedAddStatstab()
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryAdditionalStats(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Extended Details with ALL Site, ALL Players and Show as Summary for ADDITIONAL STATS Tab @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as summary and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsSummary();
            await pcbplayergamingprofileextendedpage.selectExtendedOnLTD();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedAddStatstab()
            await pcbplayergamingprofileextendedpage.validateExtendedSummaryAllSiteAllPlayersAdditionalStats(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate navigation to Extended Details with ALL Site, ALL Players and Show as Average with trips @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as Average and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsAverage();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

    });

    test('Scenario Outline: As a user , I can validate navigation to Extended Details with ALL Site, ALL Players and Show as Average with days @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as Average and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsAverage();
            await pcbplayergamingprofileextendedpage.selectExtendedOptionsAsDays();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

    });

    test('Scenario Outline: As a user , I can validate navigation to Extended Details with ALL Site, ALL Players and Show as Total with trips @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as Total and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsTotal();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

    });

    test('Scenario Outline: As a user , I can validate navigation to Extended Details with ALL Site, ALL Players and Show as Rating with trips @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Extended tab page and select show as Average and click on Filter button', async () => {
            const pcbplayergamingprofileextendedpage = new PCBPlayerGamingProfileExtendedPage(page);
            await pcbplayergamingprofileextendedpage.selectExtendedTab();
            await pcbplayergamingprofileextendedpage.selectExtendedAllSites();
            await pcbplayergamingprofileextendedpage.selectExtendedAllPlayers();
           await pcbplayergamingprofileextendedpage.selectExtendedShowAsRatings();
            await pcbplayergamingprofileextendedpage.clickFilterBtn();
        });

    });



    });







