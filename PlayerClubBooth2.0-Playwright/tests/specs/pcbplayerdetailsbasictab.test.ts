import {test } from "@playwright/test";
import Loginpage from "../pages/login.page";
import DashboardPage from "../pages/dashboard.page";
import PCBHomePage from "../pages/pcbhome.page";
import PCBEnrollBasicPage from "../pages/pcbenrollbasic.page";
import PCBEnrollIdentificationPage from "../pages/pcbenrollidentification.page";
import PCBEnrollAddressPage from "../pages/pcbenrolladdress.page";
import PCBEnrollContactPage from "../pages/pcbenrollcontacts.page";
import PCBEnrollMarketingPage from "../pages/pcbenrollmarketing.page";
import PCBEnrollPreviewPage from "../pages/pcbenrollpreview.page";
import PCBPrintCardPage from "../pages/pcbprint.page";
import PCBPlayerDetailPage from "../pages/pcbplayerdetailpage";
import PCBPlayerBasicDetailsPage from "../pages/pcbplayerbasicdetailspage";
const testdata = require(`../testdata/${String(process.env.ENVIRONMENT)}.json`);

//variable for Login credentials
let username: any;
let password: any;

//variable for enrollment data
let enrollmentdata:any;


test.describe('PCB Player Detail Basic Tab Suite', () => {
    test.beforeAll(async () => {
     //reading credentials test data from ${environment}.json file
     username = testdata.credentials.testdata[0].username;
     password = testdata.credentials.testdata[0].password;

     //reading enrollment test data
     enrollmentdata=testdata.enrollment.testdata[0];

    });

    test.beforeEach(async ({ page }) => {

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
        await test.step('When I can click on PCB Enroll', async () => {
            const pcbhomepage = new PCBHomePage(page);
            await pcbhomepage.clickOnEnrollment();
        });
        await test.step('Then I should see PCB enrollment basic Page', async () => {
            const pcbenrollbasicpage = new PCBEnrollBasicPage(page);
            await pcbenrollbasicpage.verifyBasicEnrollmentPagePresent();
        });
        await test.step('Then I can fill the baic enrollment details and click on Next button', async () => {
            const pcbenrollbasicpage = new PCBEnrollBasicPage(page);
            await pcbenrollbasicpage.fillBasicEnrollmentDetails(enrollmentdata);
            await pcbenrollbasicpage.clickOnNextButton();
        });

        await test.step('Then I can fill the identification details and click on Next button', async () => {
            const pcbenrollidentipage = new PCBEnrollIdentificationPage(page);
            await pcbenrollidentipage.fillIdentificationEnrollmentDetails(enrollmentdata);
            await pcbenrollidentipage.clickOnNextButton();
        });
        await test.step('Then I can fill the address details and click on Next button', async () => {
            const pcbenrolladdress  = new PCBEnrollAddressPage(page);
            await pcbenrolladdress.fillAddressDetails(enrollmentdata);
            await pcbenrolladdress.clickOnNextButton();
        });
        await test.step('Then I can fill the contacts details and click on Next button', async () => {
            const pcbenrollcontacts  = new PCBEnrollContactPage(page);
            await pcbenrollcontacts.fillContactsDetails(enrollmentdata);
            await pcbenrollcontacts.clickOnNextButton();
        });

        await test.step('Then I can fill the marketing details and click on Next button', async () => {
            const pcbenrollmarketing  = new PCBEnrollMarketingPage(page);
            await pcbenrollmarketing.fillMarketingEnrollmentDetails(enrollmentdata);
            await pcbenrollmarketing.clickOnNextButton();
        });

        await test.step('Then I can click on Next button from preview page', async () => {
            const pcbenrollpreviewpage = new PCBEnrollPreviewPage(page)
            await pcbenrollpreviewpage.verifyEnrollPreviewPageIsPresent();
            await pcbenrollpreviewpage.createAPlayer(username,password)
        });

        await test.step('Then it should show print dialog, there click on cancel button', async () => {
            const pcbprintcardpage=new PCBPrintCardPage(page);
            await pcbprintcardpage.verifyEnrollPrintCardPageIsPresent();
            await pcbprintcardpage.clickOnCancelButton();
        });

        await test.step('Then it should show player details page dialog, there click on Basic tab button', async () => {
            const pcbplayerdetailpage = new PCBPlayerDetailPage(page);
            await pcbplayerdetailpage.verifyBasicTabIsPresent();
           // await pcbplayerdetailpage.clickOnBasicTab();
        });
    });
    

    test('Scenario Outline: As a user , I can navigate to player details basic tab page @BasicTab @Smoke @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });

    });

    test('Scenario Outline: As a user , I can see preferred name,phonnumber,emailid,address,playerinfo text and balances text under basic tab page (6 testscript combined) @BasicTab @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyBasicDetailsPageIsPresent();
        });
        await test.step('Then I can see preferred name ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPreferredName(enrollmentdata)
        });
        await test.step('Then I can see phone number ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPhoneNumber(enrollmentdata)
        });
        await test.step('Then I can see email id of a player ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyEmailID(enrollmentdata)
        });
        await test.step('Then I can see address of a player ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyAddress(enrollmentdata)
        });
        await test.step('Then I can see Playerinfo text in Basic tab page', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyPlayerInfoText();
        });
        await test.step('Then I can see Balances text in Basic tab page', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyBalancesText();
        });

    });


    test('Scenario Outline: As a user , I can see marketing Auth Label on player details basic tab after enrollment page @BasicTab @Smoke @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page and see marketing auth Label', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthLabelPresent()
        });

    });


    test('Scenario Outline: As a user , I can click on assigned value of marketing auth on player details basic tab page @BasicTab @Smoke @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page and click on Market Auth', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthValueOnEnrollment(enrollmentdata);
            await pcbplayerbasicdetailspage.verifyMarketingAuthClick();
        });

    });


    test('Scenario Outline: As a user , I can verify assigned marketing auth information pop up and then close on player details basic tab page @BasicTab @Smoke @Regression', async ({ page }) => {
        await test.step('Then I can navigate to Basic tab page and click on Market Auth ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthClick();
        });

        await test.step('Then I can see marketing info pop up and close pop up ', async () => {
            const pcbplayerbasicdetailspage = new PCBPlayerBasicDetailsPage(page);
            await pcbplayerbasicdetailspage.verifyMarketingAuthInfoOnEnroll(enrollmentdata);
            await pcbplayerbasicdetailspage.clickOnMarktAuthOKButton();
        });

    });





});
