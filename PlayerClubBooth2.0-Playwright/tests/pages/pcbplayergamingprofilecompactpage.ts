import { FrameLocator, Locator, Page } from "@playwright/test";
import PlaywrightUtil from "../../utils/playwright-utils";
import { APIRequestContext, expect } from "@playwright/test";
import Utils from "../../utils/common-utils"

export default class PCBPlayerGamingProfileCompactPage {

    //library objects declaration
    page: Page;
    util: PlaywrightUtil;
    common: Utils;
    framelocator: FrameLocator;

    //Gaming tab
    gamingtabloc: Locator;

    //Site tab
    siteopt: Locator; siteall: Locator; site1: Locator; site2: Locator

    //linked Player tab
    linkedplayeropt: Locator; linkedall: Locator

    //Periods tab
    periodopt: Locator; periodtoday: Locator; periodrecenttrip: Locator; periodthismonth: Locator; periodthisyear: Locator; periodlasttrip: Locator;
    periodlastmonth: Locator; periodlastyear: Locator; periodlifetime: Locator; periodcustom: Locator;

    //Show trip tab
    showtriptotal: Locator; showtripavg: Locator; showdayavg: Locator;

    // Filter btn
    loaderimg: Locator
    filterbtn: Locator

    // Slots options
    slotcoinin: Locator; slotcoininvalue: Locator; slotcoinout: Locator; slotcoinoutvalue: Locator; slottimeplayed: Locator; slottimeplayedvalue: Locator; slotjackpot: Locator; slotjackpotvalue: Locator;
    slotactual: Locator; slotactualvalue: Locator; slottheoritical: Locator; slottheoriticalvalue: Locator; slotpoints: Locator; slotpointsvalue: Locator; slotprimarycomp: Locator; slotprimarycompvalue: Locator;
    slotsecondcomp: Locator; slotsecondcompvalue: Locator;

    // Tables locators
    tablebuyin: Locator; tablebuyinvalue: Locator; tablecashvalue: Locator; tablechipsvalue: Locator; tablecreditvalue: Locator; tablecashlessinvalue: Locator; tableothervalue: Locator; tabletotaloutvalue: Locator;
    tableavgbetvalue: Locator; tabletimeplayedvalue: Locator; tableactualvalue: Locator; tabletheoriticalvalue: Locator; tablepointsvalue: Locator; tableprimarycompvalue: Locator; tablesecondcompvalue: Locator;

    // Custom rating locators
    customamountvalue: Locator; customtimespentvalue: Locator; custompointsvalue: Locator; customprimarycompvalue: Locator; customsecondaryvalue: Locator;

    // Redemptions locators
    redemppointsliabvalue: Locator; redemppointroomvalue: Locator; redemppointfoodvalue: Locator; redemppointshowvalue: Locator; redemppointtravelvalue: Locator; redemppointeventvalue: Locator; redemppointothervalue: Locator; redemptotalpointsvalue: Locator;
    redempcomproomvalue: Locator; redempcompfoodvalue: Locator; redempcompshowvalue: Locator; redempcomptravelvalue: Locator; redempcompeventvalue: Locator; redempcompothervalue: Locator; redemptotalcompsvalue: Locator;
    redempexpensevalue: Locator; redemplocalvalue: Locator; redempglobalvalue: Locator;
    redempnetvalue: Locator; redempnetpercentvalue: Locator; redemptheonetvalue: Locator; redemptheonetpercentsvalue: Locator;



    constructor(page: Page) {
        this.page = page;
        this.util = new PlaywrightUtil();
        this.common = new Utils();
        const frameid = "#iframe-PatronManagement";
        this.framelocator = this.page.frameLocator(`${frameid}`);
        this.gamingtabloc = this.framelocator.locator("#mat-tab-label-0-5");

        //Site options
        this.siteopt = this.framelocator.locator('#mat-select-value-7')
        this.siteall = this.framelocator.getByText('All')
        this.site1 = this.framelocator.getByText('BVT 9.1 Site1')
        this.site2 = this.framelocator.getByText('BVT 9.1 Site2')

        this.loaderimg = this.framelocator.getByText('Fetching data...');

        //Linked Players options
        this.linkedplayeropt = this.framelocator.locator('#mat-select-value-9');
        this.linkedall = this.framelocator.locator('.mat-option-text').first();

        //Period options
        this.periodopt = this.framelocator.locator('li:nth-child(3) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');  //li:nth-child(3) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix
        this.periodtoday = this.framelocator.getByRole('option', { name: 'Today' }).locator('span');
        this.periodrecenttrip = this.framelocator.getByText('Recent Trip');
        this.periodthismonth = this.framelocator.getByText('This Month')
        this.periodthisyear = this.framelocator.getByText('This year');
        this.periodlasttrip = this.framelocator.getByText('Last Trip');
        this.periodlastmonth = this.framelocator.getByText('Last Month');
        this.periodlastyear = this.framelocator.getByText('Last Year');
        this.periodlifetime = this.framelocator.getByText('Lifetime').first();
        this.periodcustom = this.framelocator.getByText('Custom', { exact: true });
        //  this.periodfrom =
        //  this.periodto =


        //Show Trip Data
        this.showtriptotal = this.framelocator.getByText('Total', { exact: true });
        this.showtripavg = this.framelocator.getByText('Trip Average');
        this.showdayavg = this.framelocator.getByText('Day Average');

        //Filter button
        this.filterbtn = this.framelocator.getByRole('button', { name: 'filter_list Filter' })

        //Slots options

        this.slotcoininvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[2]');
        this.slotcoinoutvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[4]');
        this.slottimeplayedvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[6]');
        this.slotjackpotvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[8]');
        this.slotactualvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[10]');
        this.slottheoriticalvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[12]');
        this.slotpointsvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[14]');
        this.slotprimarycompvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[16]');
        this.slotsecondcompvalue = this.framelocator.locator('(//*[@class="compact-column compact-slots mr-2 mb-3"]//div/ul/li/span)[18]');

        // Tables options
        this.tablebuyinvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[2]');
        this.tablecashvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[4]');
        this.tablechipsvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[6]');
        this.tablecreditvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[8]');
        this.tablecashlessinvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[10]');
        this.tableothervalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[12]');
        this.tabletotaloutvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[13]');
        this.tableavgbetvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[14]');
        this.tabletimeplayedvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[15]');
        this.tableactualvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[17]');
        this.tabletheoriticalvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[19]');
        this.tablepointsvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[21]');
        this.tableprimarycompvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[23]');
        this.tablesecondcompvalue = this.framelocator.locator('(//*[@class="compact-column compact-tables ml-2 mr-2 mb-3"]//div/ul/li/span)[25]');

        // Custom Rating
        this.customamountvalue = this.framelocator.locator('(//*[@class="compact-column compact-custom-ratings ml-2 mr-2 mb-3"]//div/ul/li/span)[2]')
        this.customtimespentvalue = this.framelocator.locator('(//*[@class="compact-column compact-custom-ratings ml-2 mr-2 mb-3"]//div/ul/li/span)[4]')
        this.custompointsvalue = this.framelocator.locator('(//*[@class="compact-column compact-custom-ratings ml-2 mr-2 mb-3"]//div/ul/li/span)[6]')
        this.customprimarycompvalue = this.framelocator.locator('(//*[@class="compact-column compact-custom-ratings ml-2 mr-2 mb-3"]//div/ul/li/span)[8]')
        this.customsecondaryvalue = this.framelocator.locator('(//*[@class="compact-column compact-custom-ratings ml-2 mr-2 mb-3"]//div/ul/li/span)[10]')

        // Redemptions rating
        // Points
        this.redemppointsliabvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[1]');
        this.redemppointroomvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[3]');
        this.redemppointfoodvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[5]');
        this.redemppointshowvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[7]');
        this.redemppointtravelvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[9]');
        this.redemppointeventvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[11]');
        this.redemppointothervalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[13]');
        this.redemptotalpointsvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[15]');
        // Comps
        this.redempcomproomvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[17]');
        this.redempcompfoodvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[19]');
        this.redempcompshowvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[21]');
        this.redempcomptravelvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[23]');
        this.redempcompeventvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[25]');
        this.redempcompothervalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[27]');
        this.redemptotalcompsvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[29]');
        // Extra
        this.redempexpensevalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[30]');
        this.redemplocalvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[32]');
        this.redempglobalvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[34]');
        // Net
        this.redempnetvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[36]');
        this.redempnetpercentvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[38]');
        this.redemptheonetvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[40]');
        this.redemptheonetpercentsvalue = this.framelocator.locator('(//*[@class="compact-column compact-comp-issued ml-2 mb-3"]//div/ul/li/span)[42]');

    }

    /**
     * This method is used to format API reponse
     */

    formatJsonResponse(jsonResponse): any {
        const formattedResponse = {};

        const formatCurrency = (value) => {
            const absValue = Math.abs(value).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            return value < 0 ? `($${absValue})` : `$${absValue}`;
        };

        const formatPoints = (value) => value.toLocaleString("en-US");

        const formatValue = (value) => {
            if (typeof value === "number") {
                return formatCurrency(value);
            }
            return value;
        };

        const truncateToTwoDecimalsWithComma = (value) => {
            const truncatedValue = Math.floor(value * 100) / 100;
            return truncatedValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        };

        const formattedData = {};
        for (const key in jsonResponse) {
            if (jsonResponse.hasOwnProperty(key)) {
                if (['PointsEarned', 'NonGamingPointsEarned', 'Net', 'Net Percent', 'Theo Net', 'Theo Net Percent'].includes(key)) {
                    formattedData[key] = Math.floor(jsonResponse[key]);
                } else if (['NonGamingSecondaryCompsEarned', 'SecondaryCompEarned'].includes(key)) {
                    formattedData[key] = `$${truncateToTwoDecimalsWithComma(jsonResponse[key])}`;
                } else {
                    formattedData[key] = formatValue(jsonResponse[key]);
                }
            }
        }

        return formattedData;
    }





    async verifyCompactSlotGamingData(SlotGamingData: any) {
        // Format the entire JSON response
        const formattedResponse = this.formatJsonResponse(SlotGamingData);
        // console.log("slot formattedResponse", formattedResponse);
        // coin in
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.CoinIn}`, ((await this.util.getText(this.slotcoininvalue))?.trim()!));
        // coin out
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.CoinOut}`, ((await this.util.getText(this.slotcoinoutvalue))?.trim()!));
        // Jackpot
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.Jackpot}`, ((await this.util.getText(this.slotjackpotvalue))?.trim()!));
        // Actual win
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.ActualWin}`, ((await this.util.getText(this.slotactualvalue))?.trim()!));
        // Theoritical win
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TheoreticalWin}`, ((await this.util.getText(this.slottheoriticalvalue))?.trim()!));
        // Points Earned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.PointsEarned}`, ((await this.util.getText(this.slotpointsvalue))?.trim()!));
        // Primary Comps Earned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.CompEarned}`, ((await this.util.getText(this.slotprimarycompvalue))?.trim()!));
        // Secondary comps Earned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.SecondaryCompEarned}`, ((await this.util.getText(this.slotsecondcompvalue))?.trim()!));
    }

    async verifyCompactTablesGamingData(TableGamingData: any) {
        // Format the entire JSON response
        const formattedResponse = this.formatJsonResponse(TableGamingData);
        //  console.log("table formated data", formattedResponse)
        // Buy in
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.BuyIn}`, ((await this.util.getText(this.tablebuyinvalue))?.trim()!));
        // CashBuyIn
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.CashBuyIn}`, ((await this.util.getText(this.tablecashvalue))?.trim()!));
        // ChipsBuyIn
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.ChipsBuyIn}`, ((await this.util.getText(this.tablechipsvalue))?.trim()!));
        // TableNonCashBuyInAverage  CREDIT
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TableNonCashBuyInAverage}`, ((await this.util.getText(this.tablecreditvalue))?.trim()!));
        // TableCashlessAverage Cashless in
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TableCashlessAverage}`, ((await this.util.getText(this.tablecashlessinvalue))?.trim()!));
        // TableOthersAverage Others
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TableOthersAverage}`, ((await this.util.getText(this.tableothervalue))?.trim()!));
        // TableTotalOut
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TableTotalOut}`, ((await this.util.getText(this.tabletotaloutvalue))?.trim()!));
        // AverageBet
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.AverageBet}`, ((await this.util.getText(this.tableavgbetvalue))?.trim()!));
        // ActualWin
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.ActualWin}`, ((await this.util.getText(this.tableactualvalue))?.trim()!));
        //TheoreticalWin
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.TheoreticalWin}`, ((await this.util.getText(this.tabletheoriticalvalue))?.trim()!));
        // PointsEarned  -- use slot
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.PointsEarned}`, ((await this.util.getText(this.tablepointsvalue))?.trim()!));
        // Primary CompEarned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.CompEarned}`, ((await this.util.getText(this.tableprimarycompvalue))?.trim()!));
        // SecondaryCompEarned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.SecondaryCompEarned}`, ((await this.util.getText(this.tablesecondcompvalue))?.trim()!));

    }

    async verifyCompactCustomRatingData(CustomRatingData: any) {
        // Format the entire JSON response
        const formattedResponse = this.formatJsonResponse(CustomRatingData);
        // console.log("custom rating formattedResponse", formattedResponse);
        // Amount spent
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.NonGamingSpend}`, ((await this.util.getText(this.customamountvalue))?.trim()!));
        // PointsEarned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.NonGamingPointsEarned}`, ((await this.util.getText(this.custompointsvalue))?.trim()!));
        // Primary Comps Earned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.NonGamingCompsEarned}`, ((await this.util.getText(this.customprimarycompvalue))?.trim()!));
        // SecondaryCompsEarned
        await this.util.softVerifyGivenStringsEqual(`${formattedResponse.NonGamingSecondaryCompsEarned}`, ((await this.util.getText(this.customsecondaryvalue))?.trim()!));
    }

    async verifyCompactRedemptionData(compactresponseJson: any) {
        await this.validateRedemptionsCompactEvaluationTablesData(compactresponseJson);   // To validate Point liablity and Total expense
        await this.validateRedemptionsCompactPointsData(compactresponseJson)  // validate Points data on Compact Redemption tab - PointsCompactEvaluationTables (API)
        await this.validateRedemptionsCompactCompsData(compactresponseJson) // validate Comps data on Compact Redemption tab - CompactEvaluationTables (API)
        await this.validateRedemptionsCompactExtraCreditData(compactresponseJson)  // Validate Extra Credit data on Compact Redemption tab
        // await this.validateCompactNetData(compactresponseJson)  -- Not working
    }
    /**
     * To validate Point liablity and Total expense on Compact Redemption
     */
    async validateRedemptionsCompactEvaluationTablesData(compactresponseJson: any) {
        compactresponseJson.CompactViewCompDetails.RedemptionsCompactEvaluationTables.forEach(element => {
            element.Value = parseFloat(element.Value);
        });

        let redemptionsCompactEvaluation = compactresponseJson.CompactViewCompDetails.RedemptionsCompactEvaluationTables;
        // console.log('redemptionsCompactEvaluation', redemptionsCompactEvaluation)

        let pointliability = redemptionsCompactEvaluation.find(item => item.Description == 'Point Liability');

        let totalexpense = redemptionsCompactEvaluation.find(item => item.Description == 'Total Expense');
        const pointliabilityResponse = this.formatJsonResponse(pointliability);

        const totalexpenseResponse = this.formatJsonResponse(totalexpense);

        // Point Lib
        await this.util.softVerifyGivenStringsEqual(`${pointliabilityResponse.Value}`, ((await this.util.getText(this.redemppointsliabvalue))?.trim()!));

        // Total expemse
        await this.util.softVerifyGivenStringsEqual(`${totalexpenseResponse.Value}`, ((await this.util.getText(this.redempexpensevalue))?.trim()!));


    }
    /**
     * This method is used to validate Points data on Compact Redemption tab - PointsCompactEvaluationTables (API)
     */
    async validateRedemptionsCompactPointsData(compactresponseJson: any) {
        const PointsCompactEvaluation = compactresponseJson.CompactViewCompDetails.PointsCompactEvaluationTables.map(element => {
            element.Value = parseFloat(element.Value);
            return element;
        });

        // console.log('PointsCompactEvaluationTables tab data', PointsCompactEvaluation);

        const descriptions = ['Room', 'Food & Beverage', 'Show', 'Travel', 'Special Events', 'Other', 'Total Points'];
        const uiFields = [this.redemppointroomvalue, this.redemppointfoodvalue, this.redemppointshowvalue, this.redemppointtravelvalue, this.redemppointeventvalue, this.redemppointothervalue, this.redemptotalpointsvalue];

        for (let i = 0; i < descriptions.length; i++) {
            const item = PointsCompactEvaluation.find(item => item.Description === descriptions[i]);
            if (item) {
                // console.log(`Redemption ${descriptions[i].toLowerCase()} `, item);
                // console.log(`Redemption ${descriptions[i].toLowerCase()} value `, item.Value);

                const formattedResponse = this.formatJsonResponse(item);
                // console.log(`Redemption ${descriptions[i].toLowerCase()} formattedResponse`, formattedResponse.Value);

                await this.util.softVerifyGivenStringsEqual(`${formattedResponse.Value}`, ((await this.util.getText(uiFields[i]))!));
                // console.log(`${descriptions[i]} checked`);
            }
        }
    }
    /**
     * This method is used to validate Comps data on Compact Redemption tab - CompactEvaluationTables (API)
     */
    async validateRedemptionsCompactCompsData(compactresponseJson: any) {
        const CompsCompactEvaluation = compactresponseJson.CompactViewCompDetails.CompsCompactEvaluationTables.map(element => {
            element.Value = parseFloat(element.Value);
            return element;
        });

        // console.log('CompsCompactEvaluationTables tab data', CompsCompactEvaluation);

        const descriptions = ['Room', 'Food & Beverage', 'Show', 'Travel', 'Special Events', 'Other', 'Total Comps'];
        const uiFields = [this.redempcomproomvalue, this.redempcompfoodvalue, this.redempcompshowvalue, this.redempcomptravelvalue, this.redempcompeventvalue, this.redempcompothervalue, this.redemptotalcompsvalue];

        for (let i = 0; i < descriptions.length; i++) {
            const item = CompsCompactEvaluation.find(item => item.Description === descriptions[i]);
            if (item) {
                // console.log(`Redemption ${descriptions[i].toLowerCase()} `, item);
                // console.log(`Redemption ${descriptions[i].toLowerCase()} value `, item.Value);

                const formattedResponse = this.formatJsonResponse(item);
                // console.log(`Redemption ${descriptions[i].toLowerCase()} formattedResponse`, formattedResponse.Value);

                await this.util.softVerifyGivenStringsEqual(`${formattedResponse.Value}`, ((await this.util.getText(uiFields[i]))!));
                //console.log(`${descriptions[i]} checked`);
            }
        }
    }

    /**
     * This method is used to validate Extra credit on Compact Redemption tab - ExtraCreditCompactEvaluationTables (API)
     */
    async validateRedemptionsCompactExtraCreditData(compactresponseJson: any) {
        const XtraCredCompactEvaluation = compactresponseJson.CompactViewCompDetails.ExtraCreditCompactEvaluationTables.map(element => {
            element.Value = parseFloat(element.Value);
            return element;
        });

        // console.log('PointsCompactEvaluationTables tab data', XtraCredCompactEvaluation);

        const descriptions = ['Local', 'Global'];
        const uiFields = [this.redemplocalvalue, this.redempglobalvalue];

        for (let i = 0; i < descriptions.length; i++) {
            const item = XtraCredCompactEvaluation.find(item => item.Description.includes(descriptions[i]));
            if (item) {
                // console.log(`Redemption ${descriptions[i].toLowerCase()} `, item);
                //  console.log(`Redemption ${descriptions[i].toLowerCase()} value `, item.Value);

                const formattedResponse = this.formatJsonResponse(item);
                // console.log(`Redemption ${descriptions[i].toLowerCase()} formattedResponse`, formattedResponse.Value);

                await this.util.softVerifyGivenStringsEqual(`${formattedResponse.Value}`, ((await this.util.getText(uiFields[i]))!));
                //console.log(`${descriptions[i]} checked`);
            }
        }
    }

    //--------------------- SHOW as TOTAL---------------------------------------------------------------------------------------------------

    /**
    * This method is used to validate Compact data of Today and Total
    */
    async validateCompactDataWithTodayAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const todaydate = await this.common.getTodayDate()
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=11/29/2024&ToDate=11/29/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${todaydate}&ToDate=${todaydate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
    * This method is used to validate Compact data of Recent Trip(Current Trip) and Total
    */
    async validateCompactDataWithRecentTripAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=CurrentTrip&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=CurrentTrip&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Month and Total
     */
    async validateCompactDataWithThisMonthAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const { startDate, endDate } = await this.common.getCurrentMonthData()
        // Construct the URL with the current month's dates
        //cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=11/01/2024&ToDate=11/29/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Year and Total
     */
    async validateCompactDataWithThisYearAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getCurrentYearData()
        //${securityapiip}bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=01/01/2024&ToDate=11/29/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Trip and Total
     */
    async validateCompactDataWithLastTripAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LastTrip&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Month and Total
     */
    async validateCompactDataWithLastMonthAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastMonthData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        console.log("Last Month URL ", url)
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        // console.log(responseBody);
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Year and Total
     */
    async validateCompactDataWithLastYearAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate compact data with lifetime and total
     */
    async validateCompactDataWithLifetimeAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LifeToDate&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        // console.log(responseBody);
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    //-----------------------------------------------------SHOW as TRIP AVERAGE----------------------------------------------------

    /**
    * This method is used to validate Compact data of Today and TripAverage
    */
    async validateCompactDataWithTodayAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const todaydate = await this.common.getTodayDate()
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=11/29/2024&ToDate=11/29/2024&ShowType=TripAverage
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${todaydate}&ToDate=${todaydate}&ShowType=TripAverage`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
    * This method is used to validate Compact data of Recent Trip(Current Trip) and show as TripAverage
    */
    async validateCompactDataWithRecentTripAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=CurrentTrip&ShowType=TripAverage`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Month and show as TripAverage
     */
    async validateCompactDataWithThisMonthAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const { startDate, endDate } = await this.common.getCurrentMonthData()
        // Construct the URL with the current month's dates
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripAverage`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Year and show as TripAverage
     */
    async validateCompactDataWithThisYearAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getCurrentYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=01/01/2024&ToDate=11/12/2024&ShowType=TripAverage
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripAverage`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Trip and TripAverage
     */
    async validateCompactDataWithLastTripAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LastTrip&ShowType=TripAverage`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Month and TripAverage
     */
    async validateCompactDataWithLastMonthAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastMonthData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=TripAverage
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&SiteId=1&IncludeLinkedPlayers=false&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripAverage`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //   console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Year and TripAverage
     */
    async validateCompactDataWithLastYearAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=TripAverage
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripAverage`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        //console.log(responseBody);
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate compact data with lifetime and TripAverage
     */
    async validateCompactDataWithLifetimeAndTripAverage(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LifeToDate&ShowType=TripAverage`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        // console.log(responseBody);
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }


    //========================== SHOW AS TripDay Average  ===========================================================================================

    /**
    * This method is used to validate Compact data of Today and TripDay
    */
    async validateCompactDataWithTodayAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const todaydate = await this.common.getTodayDate()
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${todaydate}&ToDate=${todaydate}&ShowType=TripDay`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
    * This method is used to validate Compact data of Recent Trip(Current Trip) and show as TripDay
    */
    async validateCompactDataWithRecentTripAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=CurrentTrip&ShowType=TripDay`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Month and show as TripDay
     */
    async validateCompactDataWithThisMonthAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const { startDate, endDate } = await this.common.getCurrentMonthData()
        // Construct the URL with the current month's dates
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripDay`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Year and show as TripDay
     */
    async validateCompactDataWithThisYearAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getCurrentYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=01/01/2024&ToDate=11/12/2024&ShowType=TripDay
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripDay`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Trip and TripDay
     */
    async validateCompactDataWithLastTripAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LastTrip&ShowType=TripDay`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Month and TripDay
     */
    async validateCompactDataWithLastMonthAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastMonthData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=TripDay
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripDay`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //  console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Year and TripDay
     */
    async validateCompactDataWithLastYearAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=TripDay
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=TripDay`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate compact data with lifetime and TripDay
     */
    async validateCompactDataWithLifetimeAndTripDay(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=false&SiteId=1&Period=LifeToDate&ShowType=TripDay`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }


    //======================== ALL Site and ALL Players for SHOW as TOTAL=======================================================

    /**
     * This method is used to validate Compact data of Today and Total
     */
    async validateCompactDataAllSiteAllPlayerWithTodayAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const todaydate = await this.common.getTodayDate()
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=11/29/2024&ToDate=11/29/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=${todaydate}&ToDate=${todaydate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
    * This method is used to validate Compact data of Recent Trip(Current Trip) and Total
    */
    async validateCompactDataAllSiteAllPlayerWithRecentTripAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&Period=CurrentTrip&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=CurrentTrip&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        const responseBody = await compactresponse.json();

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Month and Total
     */
    async validateCompactDataAllSiteAllPlayerWithThisMonthAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        // Get the current month's start and end dates
        const { startDate, endDate } = await this.common.getCurrentMonthData()
        // Construct the URL with the current month's dates
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of This Year and Total
     */
    async validateCompactDataAllSiteAllPlayerWithThisYearAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getCurrentYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=01/01/2024&ToDate=11/12/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Trip and Total
     */
    async validateCompactDataAllSiteAllPlayerWithLastTripAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=LastTrip&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        //  console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Month and Total
     */
    async validateCompactDataAllSiteAllPlayerWithLastMonthAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastMonthData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;
        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        // console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        //  console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate Compact data of Last Year and Total
     */
    async validateCompactDataAllSiteAllPlayerWithLastYearAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const { startDate, endDate } = await this.common.getLastYearData()
        //${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=162&OriginSiteId=1&SiteId=1&LinkedPlayerId=162&Period=Custom&FromDate=10/01/2024&ToDate=10/31/2024&ShowType=Total
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=Custom&FromDate=${startDate}&ToDate=${endDate}&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        // console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //  console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }

    /**
     * This method is used to validate compact data with lifetime and total
     */
    async validateCompactDataAllSiteAllPlayerWithLifetimeAndTotal(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Compact?PlayerId=${playerid}&OriginSiteId=1&IncludeLinkedPlayers=true&Period=LifeToDate&ShowType=Total`;

        const compactresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });

        // Handle the response as needed
        //  const responseBody = await compactresponse.json();
        expect(compactresponse.status()).toBe(200);
        const compactresponseJson = await compactresponse.json();
        //console.log(compactresponseJson)
        //console.log("Slot Actual data", compactresponseJson.SlotGamingData)
        await this.verifyCompactSlotGamingData(compactresponseJson.SlotGamingData)
        //console.log("Table actual data", compactresponseJson.TableGamingData)
        await this.verifyCompactTablesGamingData(compactresponseJson.TableGamingData)
        // console.log("Custom rating actual data", compactresponseJson.CustomRatingData)
        await this.verifyCompactCustomRatingData(compactresponseJson.CustomRatingData)
        // console.log("Redemption actual data", compactresponseJson)
        await this.verifyCompactRedemptionData(compactresponseJson);
    }




    /**
     * This method is used to click the Filter button
     */
    async clickFilterBtn() {
        await this.util.clickElement(this.filterbtn);
        await this.util.verifyElementNotPresent(this.loaderimg)
        await this.util.waitForPagetoLoad(this.page, 2000);
    }

    /**
     * This method is used to verify the different sites are present
     */
    async verifySitesDetailsPageIsPresent() {
        await this.util.verifyElementPresent(this.siteopt);

    }


    /**
    * This method is used to select Recent/Current Trip period.
    */
    async selectCompactPeriodForRecentTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodrecenttrip);
    }

    /**
    * This method is used to select This Month Trip period.
    */
    async selectCompactPeriodThisMonthTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodthismonth);
    }

    /**
    * This method is used to select This Year Trip period.
    */
    async selectCompactPeriodThisYearTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodthisyear);
    }

    /**
    * This method is used to select Last Trip period.
    */
    async selectCompactPeriodLastTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodlasttrip);
    }

    /**
    * This method is used to select Last Month Trip period.
    */
    async selectCompactPeriodLastMonthTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodlastmonth);
    }

    /**
    * This method is used to select Last Year Trip period.
    */
    async selectCompactPeriodLastYearTrip() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodlastyear);
    }
    /**
     * This method is used to select Lifetime period.
     */
    async selectCompactPeriodForLifetime() {
        await this.util.clickElement(this.periodopt);
        await this.util.clickElement(this.periodlifetime);

    }

    /**
     * This method is used to select Show as Trip Average.
     */
    async selectCompactShowAsTripAverage() {
        await this.util.clickElement(this.showtriptotal);
        await this.util.clickElement(this.showtripavg);

    }

    /**
     * This method is used to select Show as Day Average.
     */
    async selectCompactShowAsDayAverage() {
        await this.util.clickElement(this.showtriptotal);
        await this.util.clickElement(this.showdayavg);

    }

    /**
     * This method is used to select All Sites.
     */
    async selectCompactAllSites() {
        await this.util.clickElement(this.siteopt);
        await this.util.clickElement(this.siteall);

    }

    /**
     * This method is used to select All Linked Player.
     */
    async selectCompactAllPlayers() {
        await this.util.clickElement(this.linkedplayeropt);
        await this.util.clickElement(this.linkedall);

    }



}
