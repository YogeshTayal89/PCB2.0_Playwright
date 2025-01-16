import { test } from "@playwright/test";
import Loginpage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import PCBHomePage from "../pages/pcbhome.page";
import PCBPlayerDetailPage from "../pages/pcbplayerdetailpage";
import PCBSearchPage from "../pages/pcbsearchpage";
import PCBPlayerGamingProfileCompactPage from "../pages/pcbplayergamingprofilecompactpage"
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
    //================================================================= SHOW AS Total ===========================================================

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Today and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Today and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithTodayAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as RecentTrip(Current Trip) and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Recent trip', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForRecentTrip();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithRecentTripAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Month and show as Total @GamingTab @Regression @2' , async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This month and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisMonthTrip();
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);

            await pcbplayergamingprofilepage.validateCompactDataWithThisMonthAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Year and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This Year and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisYearTrip();
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithThisYearAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Trip and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Trip and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastTrip();
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastTripAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Month and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Month and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastMonthTrip();
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastMonthAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Year and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Year and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastYearTrip();
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastYearAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as lifetime and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as lifetime', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForLifetime();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);

            await pcbplayergamingprofilepage.validateCompactDataWithLifetimeAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });

    //================================================================= SHOW AS TRIP AVERAGE ===========================================================


    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Today and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Today and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithTodayAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as RecentTrip(Current Trip) and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Recent trip and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForRecentTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithRecentTripAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Month and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This month and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisMonthTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithThisMonthAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Year and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This Year and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisYearTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithThisYearAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Trip and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Trip and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastTripAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Month and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Month and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastMonthTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastMonthAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Year and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Year and show as Trip Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastYearTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastYearAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as lifetime and show as Trip Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page then select period as lifetime and show as Trip Average ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForLifetime();
            await pcbplayergamingprofilepage.selectCompactShowAsTripAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLifetimeAndTripAverage(request, token, baseSecurityApiIp, gamingdata.playerid);
        });

    });


    //================================================================= SHOW AS DAY AVERAGE ===========================================================


    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Today and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Today and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithTodayAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as RecentTrip(Current Trip) and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Recent trip and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForRecentTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithRecentTripAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Month and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This month and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisMonthTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithThisMonthAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as This Year and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This Year and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodThisYearTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithThisYearAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Trip and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Trip and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastTripAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Month and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Month and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastMonthTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastMonthAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as Last Year and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Year and show as Day Average', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodLastYearTrip();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLastYearAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with Period as lifetime and show as Day Average @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page then select period as lifetime and show as Day Average ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactPeriodForLifetime();
            await pcbplayergamingprofilepage.selectCompactShowAsDayAverage();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataWithLifetimeAndTripDay(request, token, baseSecurityApiIp, gamingdata.playerid);
        });

    });


    //======================== ALL Site and ALL Players for SHOW as TOTAL=======================================================


    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as Today and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Today and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithTodayAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as RecentTrip(Current Trip) and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Recent trip', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodForRecentTrip();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithRecentTripAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as This Month and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This month and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodThisMonthTrip();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);

            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithThisMonthAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as This Year and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as This Year and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodThisYearTrip();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });;

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithThisYearAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as Last Trip and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Trip and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodLastTrip();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });;

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithLastTripAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as Last Month and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Month and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodLastMonthTrip();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithLastMonthAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as Last Year and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as Last Year and click on Filter button', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodLastYearTrip();
        });

        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();
        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithLastYearAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);

        });

    });

    test('Scenario Outline: As a user , I can validate Compact Details data with ALL Site and ALL Players, Period as lifetime and show as Total @GamingTab @Regression @2', async ({ page, request }) => {

        await test.step('Then I can navigate to Compact tab page and select period as lifetime', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.selectCompactAllSites();
            await pcbplayergamingprofilepage.selectCompactAllPlayers();
            await pcbplayergamingprofilepage.selectCompactPeriodForLifetime();
        });
        await test.step('Then I can click on filter button ', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.clickFilterBtn();

        });

        await test.step('Then I validate the api response with UI', async () => {
            const pcbplayergamingprofilepage = new PCBPlayerGamingProfileCompactPage(page);
            await pcbplayergamingprofilepage.validateCompactDataAllSiteAllPlayerWithLifetimeAndTotal(request, token, baseSecurityApiIp, gamingdata.playerid);


        });

    });



});
