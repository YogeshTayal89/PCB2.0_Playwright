import { FrameLocator, Locator, Page } from "@playwright/test";
import PlaywrightUtil from "../../utils/playwright-utils";
import { APIRequestContext, expect } from "@playwright/test";
import Utils from "../../utils/common-utils"

export default class PCBPlayerGamingProfileExtendedPage {

    //library objects declaration
    page: Page;
    util: PlaywrightUtil;
    common: Utils;
    framelocator: FrameLocator;


    //Gaming tab
    gamingtabloc: Locator;
    loaderimg: Locator

    // Extented tab
    extendedtab: Locator;

    //Site tab
    siteopt: Locator; siteall: Locator; site1: Locator; site2: Locator

    //linked Player tab
    linkedplayeropt: Locator; linkedall: Locator

    //Show tab
    showopt: Locator; showsummary: Locator; showavg: Locator; showtotal: Locator; showratings: Locator; daysmenu:Locator; tripsmenu :Locator;
    // LTD toggle
    ltdtoggle: Locator
    // Filter btn
    filterbtn: Locator

    // ===================================Slots tab data================================
    slottab: Locator;
    // Slot recent trip
    slotrecentcoinin: Locator; slotrecentcoinout: Locator; slotrecentpointsearned: Locator; slotrecentactualwin: Locator; slotrecenttheowin: Locator; slotrecentjackpots: Locator;
    // Slot Averge trip
    slotavgtripcoinin: Locator; slotavgtripcoinout: Locator; slotavgtrippointsearned: Locator; slotavgtripactualwin: Locator; slotavgtriptheowin: Locator; slotavgtripjackpots: Locator;
    // Slot Averge Day
    slotavgdaycoinin: Locator; slotavgdaycoinout: Locator; slotavgdaypointsearned: Locator; slotavgdayactualwin: Locator; slotavgdaytheowin: Locator; slotavgdayjackpots: Locator;
    // Slot MTD
    slotMTDcoinin: Locator; slotMTDcoinout: Locator; slotMTDpointsearned: Locator; slotMTDactualwin: Locator; slotMTDtheowin: Locator; slotMTDjackpots: Locator;
    // Slot YTD
    slotYTDcoinin: Locator; slotYTDcoinout: Locator; slotYTDpointsearned: Locator; slotYTDactualwin: Locator; slotYTDtheowin: Locator; slotYTDjackpots: Locator;
    // Slot LTD
    slotLTDcoinin: Locator; slotLTDcoinout: Locator; slotLTDpointsearned: Locator; slotLTDactualwin: Locator; slotLTDtheowin: Locator; slotLTDjackpots: Locator;

    // ==================================Tables tab data==================================
    tabletab: Locator;
    netbuyinplus: Locator;  // to magnify netbuyin

    // Tables recent trip
    tablesrecenttime: Locator; tablesrecentavgbet: Locator; tablesrecent4hrconv: Locator; tablesrecentpoints: Locator; tablesrecentnetbuyin: Locator; tablesrecentcash: Locator;
    tablesrecentchips: Locator; tablesrecentmarker: Locator; tablesrecenttheowin: Locator; tablesrecentactwin: Locator;
    // Tables Averge trip
    tablesavgtriptime: Locator; tablesavgtripavgbet: Locator; tablesavgtrip4hrconv: Locator; tablesavgtrippoints: Locator; tablesavgtripnetbuyin: Locator; tablesavgtripcash: Locator;
    tablesavgtripchips: Locator; tablesavgtripmarker: Locator; tablesavgtriptheowin: Locator; tablesavgtripactwin: Locator;
    // Tables Averge Day
    tablesavgdaytime: Locator; tablesavgdayavgbet: Locator; tablesavgday4hrconv: Locator; tablesavgdaypoints: Locator; tablesavgdaynetbuyin: Locator; tablesavgdaycash: Locator;
    tablesavgdaychips: Locator; tablesavgdaymarker: Locator; tablesavgdaytheowin: Locator; tablesavgdayactwin: Locator;
    // Tables MTD
    tablesMTDtime: Locator; tablesMTDavgbet: Locator; tablesMTD4hrconv: Locator; tablesMTDpoints: Locator; tablesMTDnetbuyin: Locator; tablesMTDcash: Locator;
    tablesMTDchips: Locator; tablesMTDmarker: Locator; tablesMTDtheowin: Locator; tablesMTDactwin: Locator;
    // Tables YTD
    tablesYTDtime: Locator; tablesYTDavgbet: Locator; tablesYTD4hrconv: Locator; tablesYTDpoints: Locator; tablesYTDnetbuyin: Locator; tablesYTDcash: Locator;
    tablesYTDchips: Locator; tablesYTDmarker: Locator; tablesYTDtheowin: Locator; tablesYTDactwin: Locator;
    // Tables LTD
    tablesLTDtime: Locator; tablesLTDavgbet: Locator; tablesLTD4hrconv: Locator; tablesLTDpoints: Locator; tablesLTDnetbuyin: Locator; tablesLTDcash: Locator;
    tablesLTDchips: Locator; tablesLTDmarker: Locator; tablesLTDtheowin: Locator; tablesLTDactwin: Locator;

    // =============================custom rating tab data================================
    customratingtab: Locator;
    // customrating recent trip
    customraterecentamount: Locator; customraterecentitemcount: Locator; customraterecenttime: Locator; customraterecentpoints: Locator; customraterecentprimarycomp: Locator; customraterecentsecondcomp: Locator;
    // customrating Averge trip
    customrateavgtripamount: Locator; customrateavgtripitemcount: Locator; customrateavgtriptime: Locator; customrateavgtrippoints: Locator; customrateavgtripprimarycomp: Locator; customrateavgtripsecondcomp: Locator;
    // customrating Averge Day
    customrateavgdayamount: Locator; customrateavgdayitemcount: Locator; customrateavgdaytime: Locator; customrateavgdaypoints: Locator; customrateavgdayprimarycomp: Locator; customrateavgdaysecondcomp: Locator;
    // customrating MTD
    customrateMTDamount: Locator; customrateMTDitemcount: Locator; customrateMTDtime: Locator; customrateMTDpoints: Locator; customrateMTDprimarycomp: Locator; customrateMTDsecondcomp: Locator;
    // customrating YTD
    customrateYTDamount: Locator; customrateYTDitemcount: Locator; customrateYTDtime: Locator; customrateYTDpoints: Locator; customrateYTDprimarycomp: Locator; customrateYTDsecondcomp: Locator;
    // customrating LTD
    customrateLTDamount: Locator; customrateLTDitemcount: Locator; customrateLTDtime: Locator; customrateLTDpoints: Locator; customrateLTDprimarycomp: Locator; customrateLTDsecondcomp: Locator;


    // ===========================Expenses tab data  + Magnifier
    exptab: Locator;
    pointplus: Locator; primarycompplus: Locator; secondcompplus: Locator; //Magnifier
    // Earned Tab
    // point earned recent trip
    exprecentpointearn: Locator; exprecentpointslot: Locator; exprecentpointtable: Locator; exprecentpointcustomrating: Locator;
    exprecentprimcompearn: Locator; exprecentprimcompslot: Locator; exprecentprimcomptable: Locator; exprecentprimcompcustomrating: Locator;
    exprecentsecndcompearn: Locator; exprecentsecndcompslot: Locator; exprecentsecndcomptable: Locator; exprecentsecndcompcustomrating: Locator;

    // exp Averge trip
    expavgtrippointearn: Locator; expavgtrippointslot: Locator; expavgtrippointtable: Locator; expavgtripppointcustomrating: Locator;
    expavgtripprimcompearn: Locator; expavgtripprimcompslot: Locator; expavgtripprimcomptable: Locator; expavgtripprimcompcustomrating: Locator;
    expavgtripsecndcompearn: Locator; expavgtripsecndcompslot: Locator; expavgtripsecndcomptable: Locator; expavgtripsecndcompcustomrating: Locator;

    // exp Averge Day
    expavgdaypointearn: Locator; expavgdaypointslot: Locator; expavgdaypointtable: Locator; expavgdaypointcustomrating: Locator;
    expavgdayprimcompearn: Locator; expavgdayprimcompslot: Locator; expavgdayprimcomptable: Locator; expavgdayprimcompcustomrating: Locator;
    expavgdaysecndcompearn: Locator; expavgdaysecndcompslot: Locator; expavgdaysecndcomptable: Locator; expavgdaysecndcompcustomrating: Locator;

    // exp MTD
    expMTDpointearn: Locator; expMTDpointslot: Locator; expMTDpointtable: Locator; expMTDpointcustomrating: Locator;
    expMTDprimcompearn: Locator; expMTDprimcompslot: Locator; expMTDprimcomptable: Locator; expMTDprimcompcustomrating: Locator;
    expMTDsecndcompearn: Locator; expMTDsecndcompslot: Locator; expMTDsecndcomptable: Locator; expMTDsecndcompcustomrating: Locator;

    // exp YTD
    expYTDpointearn: Locator; expYTDpointslot: Locator; expYTDpointtable: Locator; expYTDpointcustomrating: Locator;
    expYTDprimcompearn: Locator; expYTDprimcomplot: Locator; expYTDprimcomptable: Locator; expYTDprimcompcustomrating: Locator;
    expYTDsecndcompearn: Locator; expYTDsecndcomplot: Locator; expYTDsecndcomptable: Locator; expYTDsecndcompcustomrating: Locator;

    // exp LTD
    expLTDpointearn: Locator; expLTDpointslot: Locator; expLTDpointtable: Locator; expLTDpointcustomrating: Locator;
    expLTDprimcompearn: Locator; expLTDprimcompslot: Locator; expLTDprimcomptable: Locator; expLTDprimcompcustomrating: Locator;
    expLTDsecndcompearn: Locator; expLTDsecndcompslot: Locator; expLTDsecndcomptable: Locator; expLTDsecndcompcustomrating: Locator;

    // Expense Redeemed data

    // redeem  recent trip
    exprecentexpenses: Locator; exprecentpointliability: Locator;

    // redeem Averge trip
    expavgtripexpenses: Locator; expavgtrippointliability: Locator;

    // redeem Averge Day
    expavgdayexpenses: Locator; expavgdaypointliability: Locator;

    // redeem MTD
    expMTDexpenses: Locator; expMTDpointliability: Locator;

    // redeem YTD
    expYTDexpenses: Locator; expYTDpointliability: Locator;

    // redeem LTD
    expLTDexpenses: Locator; expLTDpointliability: Locator;

    // ===============================Additional stats tab data=================================================
    addstatstab: Locator;

    // addstatss recent trip
    addstatssrecenttheoincome: Locator; addstatssrecentactincome: Locator; addstatssrecenttotalexp: Locator; addstatssrecenttotalexpact: Locator; addstatssrecentactcompguide: Locator;
    // addstatss Averge trip
    addstatssavgtriptheoincome: Locator; addstatssavgtripactincome: Locator; addstatssavgtriptotalexp: Locator; addstatssavgtriptotalexpact: Locator; addstatssavgtripactcompguide: Locator;
    // addstatss Averge Day
    addstatssavgdaytheoincome: Locator; addstatssavgdayactincome: Locator; addstatssavgdaytotalexp: Locator; addstatssavgdaytotalexpact: Locator; addstatssavgdayactcompguide: Locator;
    // addstatss MTD
    addstatssmtdtheoincome: Locator; addstatssmtdactincome: Locator; addstatssmtdtotalexp: Locator; addstatssmtdtotalexpact: Locator; addstatssmtdactcompguide: Locator;
    // addstatss YTD
    addstatssytdtheoincome: Locator; addstatssytdactincome: Locator; addstatssytdtotalexp: Locator; addstatssytdtotalexpact: Locator; addstatssytdactcompguide: Locator;
    // addstatss LTD
    addstatssltdtheoincome: Locator; addstatssltdactincome: Locator; addstatssltdtotalexp: Locator; addstatssltdtotalexpact: Locator; addstatssltdactcompguide: Locator;

    constructor(page: Page) {
        this.page = page;
        this.util = new PlaywrightUtil();
        this.common = new Utils();
        const frameid = "#iframe-PatronManagement";
        this.framelocator = this.page.frameLocator(`${frameid}`);
        this.gamingtabloc = this.framelocator.locator("#mat-tab-label-0-5");
        this.extendedtab = this.framelocator.getByRole('button', { name: 'Extended' })
        this.loaderimg = this.framelocator.getByText('Fetching data...');

        //Site options
        this.siteopt = this.framelocator.locator('.mat-form-field-infix').first();
        this.siteall = this.framelocator.getByText('All')
        this.site1 = this.framelocator.getByText('BVT 9.1 Site1')
        this.site2 = this.framelocator.getByText('BVT 9.1 Site2')

        //Linked Players options
        this.linkedplayeropt = this.framelocator.locator('li:nth-child(2) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
        this.linkedall = this.framelocator.locator('.mat-option-text').first();

        //Show Trip Data
       this.showopt = this.framelocator.locator('li:nth-child(3) > .formControl > .igt-input-select > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix');
        this.showsummary = this.framelocator.getByRole('option', { name: 'Summary' }).locator('span');
        this.showavg = this.framelocator.getByText('Average');
        this.showtotal = this.framelocator.getByText('Total');
        this.showratings = this.framelocator.getByText('Ratings', { exact: true });
        this.daysmenu = this.framelocator.locator("//span[contains(.,'Days')]");
        this.tripsmenu = this.framelocator.getByText(' Trips ')   ////span[contains(.,'Trips')]

        // LTD toggle locator
        this.ltdtoggle = this.framelocator.locator('.mat-slide-toggle-bar')

        //Filter button
        this.filterbtn = this.framelocator.getByRole('button', { name: 'filter_list Filter' })

        //Slots options
        // slottab: Locator;
        this.slottab = this.framelocator.getByText('Slots');

        //Slot recent trip
        this.slotrecentcoinin = this.framelocator.locator('td:nth-child(2)').first();
        this.slotrecentcoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(2)');
        this.slotrecentpointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(2)');
        this.slotrecentactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(2)');
        this.slotrecenttheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(2)');
        this.slotrecentjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(2)');

        //Slot Averge trip
        this.slotavgtripcoinin = this.framelocator.locator('td:nth-child(3)').first();
        this.slotavgtripcoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(3)');
        this.slotavgtrippointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(3)');
        this.slotavgtripactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(3)');
        this.slotavgtriptheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(3)');
        this.slotavgtripjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(3)');

        //Slot Averge Day
        this.slotavgdaycoinin = this.framelocator.locator('td:nth-child(4)').first();
        this.slotavgdaycoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(4)');
        this.slotavgdaypointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(4)');
        this.slotavgdayactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(4)');
        this.slotavgdaytheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(4)');
        this.slotavgdayjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(4)');

        //Slot MTD
        this.slotMTDcoinin = this.framelocator.locator('td:nth-child(5)').first();
        this.slotMTDcoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(5)');
        this.slotMTDpointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(5)');
        this.slotMTDactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(5)');
        this.slotMTDtheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(5)');
        this.slotMTDjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(5)');

        //Slot YTD
        this.slotYTDcoinin = this.framelocator.locator('td:nth-child(6)').first();
        this.slotYTDcoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(6)');
        this.slotYTDpointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(6)');
        this.slotYTDactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(6)');
        this.slotYTDtheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(6)');
        this.slotYTDjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(6)');

        //Slot LTD
        this.slotLTDcoinin = this.framelocator.locator('td:nth-child(7)').first();
        this.slotLTDcoinout = this.framelocator.locator('tr:nth-child(3) > td:nth-child(7)');
        this.slotLTDpointsearned = this.framelocator.locator('tr:nth-child(5) > td:nth-child(7)');
        this.slotLTDactualwin = this.framelocator.locator('tr:nth-child(7) > td:nth-child(7)');
        this.slotLTDtheowin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(7)');
        this.slotLTDjackpots = this.framelocator.locator('tr:nth-child(11) > td:nth-child(7)');

        // ==========================Tables options
        this.tabletab = this.framelocator.locator("//span[contains(.,'Tables')]")
        //getByLabel('Tables').getByRole('button');
        this.netbuyinplus = this.framelocator.locator("//mat-icon[contains(.,'add')]")
        //getByRole('button', { name: ' add ' });// to magnify netbuyin

        // Tables recent trip
        this.tablesrecenttime = this.framelocator.locator('td:nth-child(2)').first();
        this.tablesrecentavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(2)').first();
        this.tablesrecent4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(2)').first();
        this.tablesrecentpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(2)');
        this.tablesrecentnetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(2)');
        this.tablesrecentcash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(2)').first();
        this.tablesrecentchips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(2)');
        this.tablesrecentmarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(2)');
        this.tablesrecenttheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(2)');
        this.tablesrecentactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(2)');

        // Tables Averge trip
        this.tablesavgtriptime = this.framelocator.locator('td:nth-child(3)').first();
        this.tablesavgtripavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(3)').first();
        this.tablesavgtrip4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(3)').first();
        this.tablesavgtrippoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(3)');
        this.tablesavgtripnetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(3)');
        this.tablesavgtripcash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(3)').first();
        this.tablesavgtripchips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(3)');
        this.tablesavgtripmarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(3)');
        this.tablesavgtriptheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(3)');
        this.tablesavgtripactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(3)');

        // Tables Averge Day
        this.tablesavgdaytime = this.framelocator.locator('td:nth-child(4)').first();
        this.tablesavgdayavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(4)').first();
        this.tablesavgday4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(4)').first();
        this.tablesavgdaypoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(4)');
        this.tablesavgdaynetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(4)');
        this.tablesavgdaycash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(4)').first();
        this.tablesavgdaychips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(4)');
        this.tablesavgdaymarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(4)');
        this.tablesavgdaytheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(4)');
        this.tablesavgdayactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(4)');

        //Tables MTD
        this.tablesMTDtime = this.framelocator.locator('td:nth-child(5)').first();
        this.tablesMTDavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(5)').first();
        this.tablesMTD4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(5)').first();
        this.tablesMTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(5)');
        this.tablesMTDnetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(5)');
        this.tablesMTDcash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(5)').first();
        this.tablesMTDchips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(5)');
        this.tablesMTDmarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(5)');
        this.tablesMTDtheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(5)');
        this.tablesMTDactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(5)');

        // Tables YTD
        this.tablesYTDtime = this.framelocator.locator('td:nth-child(6)').first();
        this.tablesYTDavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(6)').first();
        this.tablesYTD4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(6)').first();
        this.tablesYTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(6)');
        this.tablesYTDnetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(6)');
        this.tablesYTDcash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(6)').first();
        this.tablesYTDchips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(6)');
        this.tablesYTDmarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(6)');
        this.tablesYTDtheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(6)');
        this.tablesYTDactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(6)');

        // Tables LTD
        this.tablesLTDtime = this.framelocator.locator('td:nth-child(7)').first();
        this.tablesLTDavgbet = this.framelocator.locator('tr:nth-child(3) > td:nth-child(7)').first();
        this.tablesLTD4hrconv = this.framelocator.locator('tr:nth-child(5) > td:nth-child(7)').first();
        this.tablesLTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(7)');
        this.tablesLTDnetbuyin = this.framelocator.locator('tr:nth-child(9) > td:nth-child(7)');
        this.tablesLTDcash = this.framelocator.locator('#extended-subtable > tbody > tr > td:nth-child(7)').first();
        this.tablesLTDchips = this.framelocator.locator('tr:nth-child(2) > td:nth-child(7)');
        this.tablesLTDmarker = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(3) > td:nth-child(7)');
        this.tablesLTDtheowin = this.framelocator.locator('tr:nth-child(4) > td:nth-child(7)');
        this.tablesLTDactwin = this.framelocator.locator('#extended-subtable > tbody > tr:nth-child(5) > td:nth-child(7)');

        // Custom Rating
        this.customratingtab = this.framelocator.getByText('Custom Ratings');
        // customrating recent trip
        this.customraterecentamount = this.framelocator.locator('td:nth-child(2)').first()
        this.customraterecentitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(2)')
        this.customraterecenttime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(2)')
        this.customraterecentpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(2)')
        this.customraterecentprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(2)')
        this.customraterecentsecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(2)')
        // customrating Averge trip
        this.customrateavgtripamount = this.framelocator.locator('td:nth-child(3)').first()
        this.customrateavgtripitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(3)')
        this.customrateavgtriptime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(3)')
        this.customrateavgtrippoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(3)')
        this.customrateavgtripprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(3)')
        this.customrateavgtripsecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(3)')
        // customrating Averge Day
        this.customrateavgdayamount = this.framelocator.locator('td:nth-child(4)').first()
        this.customrateavgdayitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(4)')
        this.customrateavgdaytime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(4)')
        this.customrateavgdaypoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(4)')
        this.customrateavgdayprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(4)')
        this.customrateavgdaysecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(4)')
        // customrating MTD
        this.customrateMTDamount = this.framelocator.locator('td:nth-child(5)').first()
        this.customrateMTDitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(5)')
        this.customrateMTDtime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(5)')
        this.customrateMTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(5)')
        this.customrateMTDprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(5)')
        this.customrateMTDsecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(5)')
        // customrating YTD
        this.customrateYTDamount = this.framelocator.locator('td:nth-child(6)').first()
        this.customrateYTDitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(6)')
        this.customrateYTDtime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(6)')
        this.customrateYTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(6)')
        this.customrateYTDprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(6)')
        this.customrateYTDsecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(6)')
        // customrating LTD
        this.customrateLTDamount = this.framelocator.locator('td:nth-child(7)').first()
        this.customrateLTDitemcount = this.framelocator.locator('tr:nth-child(3) > td:nth-child(7)')
        this.customrateLTDtime = this.framelocator.locator('tr:nth-child(5) > td:nth-child(7)')
        this.customrateLTDpoints = this.framelocator.locator('tr:nth-child(7) > td:nth-child(7)')
        this.customrateLTDprimarycomp = this.framelocator.locator('tr:nth-child(9) > td:nth-child(7)')
        this.customrateLTDsecondcomp = this.framelocator.locator('tr:nth-child(11) > td:nth-child(7)')


        // Expenses 
        this.exptab = this.framelocator.getByText('Expenses');
        // Earned Tab-----
        this.pointplus = this.framelocator.getByRole('cell', { name: 'Points Earned', exact: true }).getByRole('button');
        this.primarycompplus = this.framelocator.getByRole('cell', { name: 'Primary Comp Earned', exact: true }).getByRole('button');
        this.secondcompplus = this.framelocator.getByRole('cell', { name: ' Second Comp Earned', exact: true }).getByRole('button'); //.locator("(//mat-icon[contains(.,'add')])[3]");
        // Recent trip
        // point 
        this.exprecentpointearn = this.framelocator.locator('td:nth-child(2)').first()
        this.exprecentpointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(2)').first();
        this.exprecentpointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(2)').first();
        this.exprecentpointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(2)').first();
        // Primary comp
        this.exprecentprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(2)');
        this.exprecentprimcompslot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(2)').first();
        this.exprecentprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(2)');
        this.exprecentprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(2)');
        // Secondary comp
        this.exprecentsecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(2)')
        this.exprecentsecndcompslot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(2)').first()
        this.exprecentsecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(2)')
        this.exprecentsecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(2)')
        // Redeemed
        // redeem  recent trip
        this.exprecentexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(2)').first();
        this.exprecentpointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(2)');


        //earned Average trip
        // point 
        this.expavgtrippointearn = this.framelocator.locator('td:nth-child(3)').first()
        this.expavgtrippointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(3)').first();
        this.expavgtrippointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(3)').first();
        this.expavgtripppointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(3)').first();
        // Primary comp
        this.expavgtripprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(3)');
        this.expavgtripprimcompslot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(3)').first();
        this.expavgtripprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(3)');
        this.expavgtripprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(3)');
        // Secondary comp
        this.expavgtripsecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(3)');
        this.expavgtripsecndcompslot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(3)').first();
        this.expavgtripsecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(3)');
        this.expavgtripsecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(3)');
        // redeem Averge trip
        this.expavgtripexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(3)').first();
        this.expavgtrippointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(3)');

        // exp Averge Day
        // point 
        this.expavgdaypointearn = this.framelocator.locator('td:nth-child(4)').first();
        this.expavgdaypointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(4)').first();
        this.expavgdaypointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(4)').first();
        this.expavgdaypointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(4)').first();
        // Primary comp
        this.expavgdayprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(4)');
        this.expavgdayprimcompslot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(4)').first();
        this.expavgdayprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(4)');
        this.expavgdayprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(4)');
        // Secondary comp
        this.expavgdaysecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(4)');
        this.expavgdaysecndcompslot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(4)').first();
        this.expavgdaysecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(4)');
        this.expavgdaysecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(4)');

        // redeem Averge Day
        this.expavgdayexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(4)').first();
        this.expavgdaypointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(4)');

        // exp MTD
        // point 
        this.expMTDpointearn = this.framelocator.locator('td:nth-child(5)').first()
        this.expMTDpointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(5)').first();
        this.expMTDpointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(5)').first();
        this.expMTDpointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(5)').first();
        // Primary comp
        this.expMTDprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(5)');
        this.expMTDprimcompslot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(5)').first();
        this.expMTDprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(5)');
        this.expMTDprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(5)');
        // Secondary comp
        this.expMTDsecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(5)')
        this.expMTDsecndcompslot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(5)').first();
        this.expMTDsecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(5)')
        this.expMTDsecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(5)')
        // redeem MTD
        this.expMTDexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(5)').first();
        this.expMTDpointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(5)');

        // exp YTD
        // point 
        this.expYTDpointearn = this.framelocator.locator('td:nth-child(6)').first();
        this.expYTDpointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(6)').first();
        this.expYTDpointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(6)').first();
        this.expYTDpointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(6)').first();
        // Primary comp
        this.expYTDprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(6)');
        this.expYTDprimcomplot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(6)').first();
        this.expYTDprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(6)');
        this.expYTDprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(6)');
        // Secondary comp
        this.expYTDsecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(6)');
        this.expYTDsecndcomplot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(6)').first();
        this.expYTDsecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(6)');
        this.expYTDsecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(6)');
        // redeem YTD
        this.expYTDexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(6)').first();
        this.expYTDpointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(6)');

        // exp LTD
        // point 
        this.expLTDpointearn = this.framelocator.locator('td:nth-child(7)').first();
        this.expLTDpointslot = this.framelocator.locator('#expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(7)').first();
        this.expLTDpointtable = this.framelocator.locator('tr:nth-child(2) > td:nth-child(7)').first();
        this.expLTDpointcustomrating = this.framelocator.locator('tr:nth-child(3) > td:nth-child(7)').first();
        // Primary comp
        this.expLTDprimcompearn = this.framelocator.locator('tr:nth-child(2) > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(7)');
        this.expLTDprimcompslot = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(7)').first();
        this.expLTDprimcomptable = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(7)');
        this.expLTDprimcompcustomrating = this.framelocator.locator('tr:nth-child(4) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(7)');
        // Secondary comp
        this.expLTDsecndcompearn = this.framelocator.locator('tr:nth-child(5) > td:nth-child(7)');
        this.expLTDsecndcompslot = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr > td:nth-child(7)').first();
        this.expLTDsecndcomptable = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(2) > td:nth-child(7)');
        this.expLTDsecndcompcustomrating = this.framelocator.locator('tr:nth-child(6) > td > #expenses-sub-table > tr > td > #expenses-table-Earned > tbody > tr:nth-child(3) > td:nth-child(7)');
        // redeem LTD
        this.expLTDexpenses = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr > td:nth-child(7)').first();
        this.expLTDpointliability = this.framelocator.locator('#expenses-table-Redeemed > tbody > tr:nth-child(2) > td:nth-child(7)')



        // Additional Statistics Tab
        this.addstatstab = this.framelocator.getByText('Additional Statistics');
        // addstatss recent trip
        this.addstatssrecenttheoincome = this.framelocator.locator('td:nth-child(2)').first();
        this.addstatssrecentactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(2)');
        this.addstatssrecenttotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(2)');
        this.addstatssrecenttotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(2)')
        this.addstatssrecentactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(2)')
        // addstatss Averge trip
        this.addstatssavgtriptheoincome = this.framelocator.locator('td:nth-child(3)').first();
        this.addstatssavgtripactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(3)');
        this.addstatssavgtriptotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(3)');
        this.addstatssavgtriptotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(3)')
        this.addstatssavgtripactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(3)')
        // addstatss Averge Day
        this.addstatssavgdaytheoincome = this.framelocator.locator('td:nth-child(4)').first();
        this.addstatssavgdayactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(4)');
        this.addstatssavgdaytotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(4)');
        this.addstatssavgdaytotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(4)')
        this.addstatssavgdayactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(4)')
        // addstatss MTD
        this.addstatssmtdtheoincome = this.framelocator.locator('td:nth-child(5)').first();
        this.addstatssmtdactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(5)');
        this.addstatssmtdtotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(5)');
        this.addstatssmtdtotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(5)')
        this.addstatssmtdactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(5)')
        // addstatss YTD
        this.addstatssytdtheoincome = this.framelocator.locator('td:nth-child(6)').first();
        this.addstatssytdactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(6)');
        this.addstatssytdtotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(6)');
        this.addstatssytdtotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(6)')
        this.addstatssytdactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(6)')
        // addstatss LTD
        this.addstatssltdtheoincome = this.framelocator.locator('td:nth-child(7)').first();
        this.addstatssltdactincome = this.framelocator.locator('tr:nth-child(3) > td:nth-child(7)');
        this.addstatssltdtotalexp = this.framelocator.locator('tr:nth-child(5) > td:nth-child(7)');
        this.addstatssltdtotalexpact = this.framelocator.locator('tr:nth-child(7) > td:nth-child(7)')
        this.addstatssltdactcompguide = this.framelocator.locator('tr:nth-child(9) > td:nth-child(7)')

    }

    /**
     * This method is used to format API reponse
     */
    formatExtendedJsonResponse = (jsonResponse, isSecondaryComp = false) => {
        const formattedResponse = {};

        // Function to format numbers to 2 decimal places, handle negative values, and add commas
        const formatNumber = (value) => {
            const roundedValue = Math.round(value * 100) / 100; // Properly round to two decimal places
            const formattedValue = roundedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return value < 0 ? `(${Math.abs(roundedValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})` : formattedValue;
        };

        // Function to truncate to two decimal places and format with commas
        const truncateToTwoDecimalsWithComma = (value) => {
            const truncatedValue = Math.floor(value * 100) / 100;
            return truncatedValue.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        };

        // Function to check and format each value in the data object
        const formatValue = (value, key) => {
            if (typeof value === "number") {
                if (key === 'PointsEarned' || key === 'ItemsCount' || key === 'TotalPointBalance') {
                    return Math.trunc(value).toString(); // Remove decimal part and convert to string
                }
                if (key === 'TotalExpensesAsPerOfTheo') {
                    const formattedValue = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return `${formattedValue}%`; // Format with commas and % at the end
                }
                if (key === 'SecondaryComp' || key === 'TotalSecondaryCompEarned' || (isSecondaryComp && key == 'Amount')) {
                    return truncateToTwoDecimalsWithComma(value); // Use the truncate function
                }
                return formatNumber(value); // Use `formatNumber` for other numbers
            }
            return value; // Return as-is if it's not a number (e.g., strings like time)
        };

        // Iterate over each key-value pair in the data and format accordingly
        for (const key in jsonResponse) {
            if (jsonResponse.hasOwnProperty(key)) {
                formattedResponse[key] = formatValue(jsonResponse[key], key);
            }
        }

        return formattedResponse;
    };


    /**
    * This method is used to validate Extended Slot data for show as summary
    */
    async validateExtendedSummarySlots(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const slotGamingDataList = extendedresponseJson.SlotGamingDataList;
        // console.log("Extended Slot Actual data", slotGamingDataList);
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.verifySlotRecentTrip(slotGamingDataList)
        await this.verifySlotAvgTrip(slotGamingDataList)
        await this.verifySlotAvgDay(slotGamingDataList)
        await this.verifySlotMTD(slotGamingDataList)
        await this.verifySlotYTD(slotGamingDataList)
        await this.verifySlotLTD(slotGamingDataList)
    }

    async validateExtendedAllSiteAllPlayersSummarySlots(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //     https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IsProfileForAllLinkedPlayers=true
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=true`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const slotGamingDataList = extendedresponseJson.SlotGamingDataList;
        // console.log("Extended Slot Actual data", slotGamingDataList);
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.verifySlotRecentTrip(slotGamingDataList)
        await this.verifySlotAvgTrip(slotGamingDataList)
        await this.verifySlotAvgDay(slotGamingDataList)
        await this.verifySlotMTD(slotGamingDataList)
        await this.verifySlotYTD(slotGamingDataList)
        await this.verifySlotLTD(slotGamingDataList)
    }

    async verifySlotRecentTrip(data: any) {
        const recentTrip = data.find(item => item.Header === "Recent Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(recentTrip);
        // console.log("slot recentTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotrecentcoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotrecentcoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotrecentpointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotrecentactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotrecenttheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotrecentjackpots))?.trim()!));
    }

    async verifySlotAvgTrip(data: any) {
        const avgTrip = data.find(item => item.Header === "Average Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgTrip);
        //  console.log("slot avgTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotavgtripcoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotavgtripcoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotavgtrippointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotavgtripactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotavgtriptheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotavgtripjackpots))?.trim()!));
    }

    async verifySlotAvgDay(data: any) {
        const avgDay = data.find(item => item.Header === "Average Day");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgDay);
        //  console.log("slot Average Day formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotavgdaycoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotavgdaycoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotavgdaypointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotavgdayactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotavgdaytheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotavgdayjackpots))?.trim()!));
    }

    async verifySlotMTD(data: any) {
        const MTDdata = data.find(item => item.Header === "Month to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(MTDdata);
        //  console.log("slot Month to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotMTDcoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotMTDcoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotMTDpointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotMTDactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotMTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotMTDjackpots))?.trim()!));
    }

    async verifySlotYTD(data: any) {
        const YTDdata = data.find(item => item.Header === "Year to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(YTDdata);
        //   console.log("slot Year to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotYTDcoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotYTDcoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotYTDpointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotYTDactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotYTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotYTDjackpots))?.trim()!));
    }

    async verifySlotLTD(data: any) {
        const LTDdata = data.find(item => item.Header === "Life to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(LTDdata);
        // console.log("slot Life to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinIn, ((await this.util.getText(this.slotLTDcoinin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CoinOut, ((await this.util.getText(this.slotLTDcoinout))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.slotLTDpointsearned))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.slotLTDactualwin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.slotLTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.Jackpots, ((await this.util.getText(this.slotLTDjackpots))?.trim()!));
    }

    //=========== Extended Tables data
    /**
    * This method is used to validate Extended TABLES data for show as summary
    */
    async validateExtendedSummaryTables(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const tableGamingDataList = extendedresponseJson.TableGamingDataList;
        //  console.log("Extended Tables tab Actual data", tableGamingDataList)
        await this.verifyTablesRecentTrip(tableGamingDataList)
        await this.verifyTablesAvgTrip(tableGamingDataList)
        await this.verifyTablesAvgDay(tableGamingDataList)
        await this.verifyTablesMTD(tableGamingDataList)
        await this.verifyTablesYTD(tableGamingDataList)
        await this.verifyTablesLTD(tableGamingDataList)
    }

    async validateExtendedAllSiteAllPlayersSummaryTables(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=true`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const tableGamingDataList = extendedresponseJson.TableGamingDataList;
        //console.log("Extended Tables tab Actual data", tableGamingDataList)
        await this.verifyTablesRecentTrip(tableGamingDataList)
        await this.verifyTablesAvgTrip(tableGamingDataList)
        await this.verifyTablesAvgDay(tableGamingDataList)
        await this.verifyTablesMTD(tableGamingDataList)
        await this.verifyTablesYTD(tableGamingDataList)
        await this.verifyTablesLTD(tableGamingDataList)
    }

    async verifyTablesRecentTrip(data: any) {
        const recentTrip = data.find(item => item.Header === "Recent Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(recentTrip);
        // console.log("Tables recentTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesrecentavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesrecent4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesrecentpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesrecentnetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesrecentcash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesrecentchips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesrecentmarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesrecenttheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesrecentactwin))?.trim()!));
    }

    async verifyTablesAvgTrip(data: any) {
        const avgTrip = data.find(item => item.Header === "Average Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgTrip);
        //  console.log("Tables avgTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesavgtripavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesavgtrip4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesavgtrippoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesavgtripnetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesavgtripcash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesavgtripchips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesavgtripmarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesavgtriptheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesavgtripactwin))?.trim()!));
    }

    async verifyTablesAvgDay(data: any) {
        const avgDay = data.find(item => item.Header === "Average Day");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgDay);
        // console.log("Tables avg Day formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesavgdayavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesavgday4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesavgdaypoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesavgdaynetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesavgdaycash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesavgdaychips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesavgdaymarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesavgdaytheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesavgdayactwin))?.trim()!));
    }

    async verifyTablesMTD(data: any) {
        const MTDdata = data.find(item => item.Header === "Month to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(MTDdata);
        //  console.log("Tables Month to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesMTDavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesMTD4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesMTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesMTDnetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesMTDcash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesMTDchips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesMTDmarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesMTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesMTDactwin))?.trim()!));
    }

    async verifyTablesYTD(data: any) {
        const YTDdata = data.find(item => item.Header === "Year to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(YTDdata);
        // console.log("Tables Year to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesYTDavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesYTD4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesYTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesYTDnetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesYTDcash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesYTDchips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesYTDmarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesYTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesYTDactwin))?.trim()!));
    }

    async verifyTablesLTD(data: any) {
        const LTDdata = data.find(item => item.Header === "Life to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(LTDdata);
        // console.log("Tables Life to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AverageBet, ((await this.util.getText(this.tablesLTDavgbet))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.FourHrConversion, ((await this.util.getText(this.tablesLTD4hrconv))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.tablesLTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetBuyIn, ((await this.util.getText(this.tablesLTDnetbuyin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.CashBuyIn, ((await this.util.getText(this.tablesLTDcash))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ChipsBuyIn, ((await this.util.getText(this.tablesLTDchips))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.NetMarkers, ((await this.util.getText(this.tablesLTDmarker))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalWin, ((await this.util.getText(this.tablesLTDtheowin))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualWin, ((await this.util.getText(this.tablesLTDactwin))?.trim()!));
    }

    //=========== Extended Custom Ratings data
    /**
    * This method is used to validate Extended Custum Ratings data for show assummary
    */
    async validateExtendedSummaryCustomRatings(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const customratingsGamingDataList = extendedresponseJson.CustomRatingDataList;
        //  console.log("Extended Custom Ratings tab Actual data", customratingsGamingDataList)
        await this.verifyCusRatingsRecentTrip(customratingsGamingDataList)
        await this.verifyCusRatingsAvgTrip(customratingsGamingDataList)
        await this.verifyCusRatingsAvgDay(customratingsGamingDataList)
        await this.verifyCusRatingsMTD(customratingsGamingDataList)
        await this.verifyCusRatingsYTD(customratingsGamingDataList)
        await this.verifyCusRatingsLTD(customratingsGamingDataList)
    }
    async validateExtendedSummaryAllSiteAllPlayersCustomRatings(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=true`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const customratingsGamingDataList = extendedresponseJson.CustomRatingDataList;
        // console.log("Extended Custom Ratings tab Actual data", customratingsGamingDataList)
        await this.verifyCusRatingsRecentTrip(customratingsGamingDataList)
        await this.verifyCusRatingsAvgTrip(customratingsGamingDataList)
        await this.verifyCusRatingsAvgDay(customratingsGamingDataList)
        await this.verifyCusRatingsMTD(customratingsGamingDataList)
        await this.verifyCusRatingsYTD(customratingsGamingDataList)
        await this.verifyCusRatingsLTD(customratingsGamingDataList)
    }
    async verifyCusRatingsRecentTrip(data: any) {
        const recentTrip = data.find(item => item.Header === "Recent Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(recentTrip);
        //   console.log("Custom Ratings recentTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customraterecentamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customraterecentitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customraterecentpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customraterecentprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customraterecentsecondcomp))?.trim()!));
    }
    async verifyCusRatingsAvgTrip(data: any) {
        const avgTrip = data.find(item => item.Header === "Average Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgTrip);
        //console.log("Custom Ratings Average Trip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customrateavgtripamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customrateavgtripitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customrateavgtrippoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customrateavgtripprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customrateavgtripsecondcomp))?.trim()!));
    }
    async verifyCusRatingsAvgDay(data: any) {
        const avgDay = data.find(item => item.Header === "Average Day");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgDay);
        //  console.log("Custom Ratings avg Day formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customrateavgdayamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customrateavgdayitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customrateavgdaypoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customrateavgdayprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customrateavgdaysecondcomp))?.trim()!));
    }

    async verifyCusRatingsMTD(data: any) {
        const MTDdata = data.find(item => item.Header === "Month to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(MTDdata);
        //  console.log("Custom Ratings Month to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customrateMTDamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customrateMTDitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customrateMTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customrateMTDprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customrateMTDsecondcomp))?.trim()!));
    }
    async verifyCusRatingsYTD(data: any) {
        const YTDdata = data.find(item => item.Header === "Year to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(YTDdata);
        //  console.log("Custom Ratings Year to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customrateYTDamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customrateYTDitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customrateYTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customrateYTDprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customrateYTDsecondcomp))?.trim()!));
    }
    async verifyCusRatingsLTD(data: any) {
        const LTDdata = data.find(item => item.Header === "Life to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(LTDdata);
        // console.log("Custom Ratings Life to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.AmountSpent, ((await this.util.getText(this.customrateLTDamount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ItemsCount, ((await this.util.getText(this.customrateLTDitemcount))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PointsEarned.toString(), ((await this.util.getText(this.customrateLTDpoints))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.customrateLTDprimarycomp))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.SecondaryComp, ((await this.util.getText(this.customrateLTDsecondcomp))?.trim()!));
    }


    //=========== Extended EXPENSES  data
    /**
    * This method is used to validate Extended EXPENSES Ratings data for show as summary
    */
    async validateExtendedSummaryExpenses(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const expensesearnedDataList = extendedresponseJson.EarnedGamingExpensesList;
        //  console.log("Extended Expenses tab Actual data", expensesearnedDataList)
        await this.verifyExpensesRecentTrip(expensesearnedDataList)
        await this.verifyExpensesAvgTrip(expensesearnedDataList)
        await this.verifyExpensesAvgDay(expensesearnedDataList)
        await this.verifyExpensesMTD(expensesearnedDataList)
        await this.verifyExpensesYTD(expensesearnedDataList)
        await this.verifyExpensesLTD(expensesearnedDataList)
    }
    async validateExtendedSummaryAllSiteAllPlayersExpenses(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=true`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const expensesearnedDataList = extendedresponseJson.EarnedGamingExpensesList;
        //    console.log("Extended Expenses tab Actual data", expensesearnedDataList)
        await this.verifyExpensesRecentTrip(expensesearnedDataList)
        await this.verifyExpensesAvgTrip(expensesearnedDataList)
        await this.verifyExpensesAvgDay(expensesearnedDataList)
        await this.verifyExpensesMTD(expensesearnedDataList)
        await this.verifyExpensesYTD(expensesearnedDataList)
        await this.verifyExpensesLTD(expensesearnedDataList)
    }


    async verifyExpensesRecentTrip(data: any) {

        const recentTrip = data.find(item => item.Header === "Recent Trip" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(recentTrip);
        //   console.log("ADDITIONAL STATS recentTrip formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        recentTrip.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        //console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        recentTrip.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        //console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        recentTrip.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));
        });
        //console.log('subSecondaryCompEarnedList', subSecondaryCompEarnedList);


        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.exprecentpointearn))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.exprecentprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.exprecentprimcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.exprecentprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.exprecentprimcompcustomrating))?.trim()!));


        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.exprecentsecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.exprecentsecndcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.exprecentsecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.exprecentsecndcompcustomrating))?.trim()!));


    }

    async verifyExpensesAvgTrip(data: any) {

        const avgTrip = data.find(item => item.Header === "Average Trip" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgTrip);
        //  console.log("Expens Average Trip formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        avgTrip.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        //  console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        avgTrip.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        // console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        avgTrip.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));

        });
        //   console.log('subSecondaryCompEarnedList', subSecondaryCompEarnedList);

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.expavgtrippointearn))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(subPointBalanceList[0].Amount.toString(), ((await this.util.getText(this.expavgtrippointslot))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(subPointBalanceList[1].Amount.toString(), ((await this.util.getText(this.expavgtrippointtable))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(subPointBalanceList[2].Amount.toString(), ((await this.util.getText(this.expavgtripppointcustomrating))?.trim()!));


        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.expavgtripprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.expavgtripprimcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.expavgtripprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.expavgtripprimcompcustomrating))?.trim()!));
        // console.log('formattedResponse PrimaryCompEarnedList balance 0 YT ', subPrimaryCompEarnedList[0].Amount);
        // console.log('formattedResponse PrimaryCompEarnedList balance 1 YT ', subPrimaryCompEarnedList[1].Amount);
        // console.log('formattedResponse PrimaryCompEarnedList balance 2 YT ', subPrimaryCompEarnedList[2].Amount);

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.expavgtripsecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.expavgtripsecndcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.expavgtripsecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.expavgtripsecndcompcustomrating))?.trim()!));
        // console.log('formattedResponse SecondaryCompEarnedList balance 0 YT ', subSecondaryCompEarnedList[0].Amount);
        // console.log('formattedResponse SecondaryCompEarnedList balance 1 YT ', subSecondaryCompEarnedList[1].Amount);
        // console.log('formattedResponse SecondaryCompEarnedList balance 2 YT ', subSecondaryCompEarnedList[2].Amount);

    }

    async verifyExpensesAvgDay(data: any) {

        const avgDay = data.find(item => item.Header === "Average Day" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgDay);
        //  console.log("Expens Average Day formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        avgDay.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        //  console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        avgDay.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        // console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        avgDay.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));

        });


        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.expavgdaypointearn))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.expavgdayprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.expavgdayprimcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.expavgdayprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.expavgdayprimcompcustomrating))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.expavgdaysecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.expavgdaysecndcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.expavgdaysecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.expavgdaysecndcompcustomrating))?.trim()!));

    }

    async verifyExpensesMTD(data: any) {

        const mtddata = data.find(item => item.Header === "Month to Date" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(mtddata);
        //  console.log("Expens Month to Date formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        mtddata.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        // console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        mtddata.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        // console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        mtddata.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));

        });
        // console.log('subSecondaryCompEarnedList', subSecondaryCompEarnedList);

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.expMTDpointearn))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.expMTDprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.expMTDprimcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.expMTDprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.expMTDprimcompcustomrating))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.expMTDsecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.expMTDsecndcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.expMTDsecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.expMTDsecndcompcustomrating))?.trim()!));

    }
    async verifyExpensesYTD(data: any) {

        const ytddata = data.find(item => item.Header === "Year to Date" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(ytddata);
        //  console.log("Expens Year to Date formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        ytddata.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        // console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        ytddata.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        //  console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        ytddata.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));

        });
        //  console.log('subSecondaryCompEarnedList', subSecondaryCompEarnedList);

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.expYTDpointearn))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.expYTDprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.expYTDprimcomplot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.expYTDprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.expYTDprimcompcustomrating))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.expYTDsecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.expYTDsecndcomplot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.expYTDsecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.expYTDsecndcompcustomrating))?.trim()!));

    }

    async verifyExpensesLTD(data: any) {

        const ltddata = data.find(item => item.Header === "Life to Date" && item.CompProfilePointsEarned === 'Points Earned');
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(ltddata);
        //console.log("Expense Life to Date formattedResponse", formattedResponse);
        // Formating child of Points,prinary and secondary
        let subPointBalanceList: any[] = [];
        ltddata.PointBalanceList.forEach(element => {
            subPointBalanceList.push(this.formatExtendedJsonResponse(element));
        });
        //console.log('objPoint ', subPointBalanceList);

        let subPrimaryCompEarnedList: any[] = [];
        ltddata.PrimaryCompEarnedList.forEach(element => {
            subPrimaryCompEarnedList.push(this.formatExtendedJsonResponse(element));
        });
        //console.log('objPrimaryCompEarnedList', subPrimaryCompEarnedList);

        let subSecondaryCompEarnedList: any[] = [];
        ltddata.SecondaryCompEarnedList.forEach(element => {
            subSecondaryCompEarnedList.push(this.formatExtendedJsonResponse(element, true));

        });
        // console.log('subSecondaryCompEarnedList', subSecondaryCompEarnedList);

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPointBalance.toString(), ((await this.util.getText(this.expLTDpointearn))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalPrimaryCompEarned, ((await this.util.getText(this.expLTDprimcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[0].Amount, ((await this.util.getText(this.expLTDprimcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[1].Amount, ((await this.util.getText(this.expLTDprimcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subPrimaryCompEarnedList[2].Amount, ((await this.util.getText(this.expLTDprimcompcustomrating))?.trim()!));

        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalSecondaryCompEarned, ((await this.util.getText(this.expLTDsecndcompearn))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[0].Amount, ((await this.util.getText(this.expLTDsecndcompslot))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[1].Amount, ((await this.util.getText(this.expLTDsecndcomptable))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(subSecondaryCompEarnedList[2].Amount, ((await this.util.getText(this.expLTDsecndcompcustomrating))?.trim()!));

    }



    //=========== Extended ADDITIONAL STATS  data
    /**
    * This method is used to validate Extended ADDITIONAL STATS Ratings data for show assummary
    */
    async validateExtendedSummaryAdditionalStats(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=false&SiteId=1`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const gamingrevenueDataList = extendedresponseJson.GamingRevenueList;
        //   console.log("Extended ADDITIONAL STATS Ratings tab Actual data", gamingrevenueDataList)
        await this.verifyAddStatsRecentTrip(gamingrevenueDataList)
        await this.verifyAddStatsAvgTrip(gamingrevenueDataList)
        await this.verifyAddStatsAvgDay(gamingrevenueDataList)
        await this.verifyAddStatsMTD(gamingrevenueDataList)
        await this.verifyAddStatsYTD(gamingrevenueDataList)
        await this.verifyAddStatsLTD(gamingrevenueDataList)
    }

    async validateExtendedSummaryAllSiteAllPlayersAdditionalStats(req: APIRequestContext, accesstoken: string, securityapiip: string, playerid: string) {
        //https://192.168.128.249/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=162&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&SiteId=1&LinkedPlayerId=162
        const url = `${securityapiip}/cmsapi/bearer/PlayerTracking.svc/Patrons/GamingProfile/Extended?PlayerId=${playerid}&OriginSiteId=1&IncludeLTD=true&DisplayType=Summary&IsUnitTripNumber=false&IncludeLinkedPlayers=true`;
        const extendedresponse = await req.get(url, {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Bearer ${accesstoken}`
            }
        });
        expect(extendedresponse.status()).toBe(200);
        const extendedresponseJson = await extendedresponse.json();
        const gamingrevenueDataList = extendedresponseJson.GamingRevenueList;
        //    console.log("Extended ADDITIONAL STATS Ratings tab Actual data", gamingrevenueDataList)
        await this.verifyAddStatsRecentTrip(gamingrevenueDataList)
        await this.verifyAddStatsAvgTrip(gamingrevenueDataList)
        await this.verifyAddStatsAvgDay(gamingrevenueDataList)
        await this.verifyAddStatsMTD(gamingrevenueDataList)
        await this.verifyAddStatsYTD(gamingrevenueDataList)
        await this.verifyAddStatsLTD(gamingrevenueDataList)
    }


    async verifyAddStatsRecentTrip(data: any) {
        const recentTrip = data.find(item => item.Header === "Recent Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(recentTrip);
        //   console.log("ADDITIONAL STATS recentTrip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssrecenttheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssrecentactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssrecenttotalexp))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssrecenttotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssrecentactcompguide))?.trim()!));
    }
    async verifyAddStatsAvgTrip(data: any) {
        const avgTrip = data.find(item => item.Header === "Average Trip");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgTrip);
        //   console.log("ADDITIONAL STATS Average Trip formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssavgtriptheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssavgtripactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssavgtriptotalexp))?.trim()!));
        //   await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssavgtriptotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssavgtripactcompguide))?.trim()!));
    }
    async verifyAddStatsAvgDay(data: any) {
        const avgDay = data.find(item => item.Header === "Average Day");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(avgDay);
        //  console.log("ADDITIONAL STATS avg Day formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssavgdaytheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssavgdayactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssavgdaytotalexp))?.trim()!));
        //   await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssavgdaytotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssavgdayactcompguide))?.trim()!));
    }
    async verifyAddStatsMTD(data: any) {
        const MTDdata = data.find(item => item.Header === "Month to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(MTDdata);
        //   console.log("ADDITIONAL STATS Month to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssmtdtheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssmtdactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssmtdtotalexp))?.trim()!));
        //  await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssmtdtotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssmtdactcompguide))?.trim()!));
    }
    async verifyAddStatsYTD(data: any) {
        const YTDdata = data.find(item => item.Header === "Year to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(YTDdata);
        //  console.log("ADDITIONAL STATS Year to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssytdtheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssytdactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssytdtotalexp))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssytdtotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssytdactcompguide))?.trim()!));
    }
    async verifyAddStatsLTD(data: any) {
        const LTDdata = data.find(item => item.Header === "Life to Date");
        //   Format the entire JSON response
        let formattedResponse: any = this.formatExtendedJsonResponse(LTDdata);
        // console.log("ADDITIONAL STATS Life to Date formattedResponse", formattedResponse);
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TheoreticalIncome, ((await this.util.getText(this.addstatssltdtheoincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualIncome, ((await this.util.getText(this.addstatssltdactincome))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.TotalExpensesAsPerOfTheo, ((await this.util.getText(this.addstatssltdtotalexp))?.trim()!));
        // await this.util.softVerifyGivenStringsEqual(formattedResponse.PrimaryComp, ((await this.util.getText(this.addstatssltdtotalexpact))?.trim()!));
        await this.util.softVerifyGivenStringsEqual(formattedResponse.ActualCompGuideline, ((await this.util.getText(this.addstatssltdactcompguide))?.trim()!));
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
    * This method is used to select SHOW as Summary.
    */
    async selectExtendedShowAsSummary() {
       await this.util.clickElement(this.showopt);
        await this.util.clickElement(this.showsummary);
    }

    /**
    * This method is used to select SHOW as Summary.
    */
    async selectExtendedOptionsAsTrips() {
        await this.util.clickElement(this.tripsmenu);
    }   
    
    /**
    * This method is used to select SHOW as Summary.
    */
    async selectExtendedOptionsAsDays() {
        await this.util.clickElement(this.tripsmenu);
        await this.util.clickElement(this.daysmenu);
    }  

    /**
    * This method is used to select SHOW as Average.
    */
    async selectExtendedShowAsAverage() {
        await this.util.clickElement(this.showopt);
        await this.util.clickElement(this.showavg);
    }

    /**
    * This method is used to select SHOW as Total.
    */
    async selectExtendedShowAsTotal() {
       await this.util.clickElement(this.showopt);
        await this.util.clickElement(this.showtotal);
    }

    /**
    * This method is used to select SHOW as Ratings.
    */
    async selectExtendedShowAsRatings() {
       await this.util.clickElement(this.showopt);
        await this.util.clickElement(this.showratings);
    }


    /**
     * This method is used to select Extended tab
     */
    async selectExtendedTab() {
        await this.util.clickElement(this.extendedtab);
        await this.util.verifyElementNotPresent(this.loaderimg)
        await this.util.waitForPagetoLoad(this.page, 2000);
    }

    /**
     * This method is used to select All Sites.
     */
    async selectExtendedAllSites() {
        await this.util.clickElement(this.siteopt);
        await this.util.clickElement(this.siteall);
    }

    /**
     * This method is used to select All Linked Player.
     */
    async selectExtendedAllPlayers() {
        await this.util.clickElement(this.linkedplayeropt);
        await this.util.clickElement(this.linkedall);
    }
    /**
    * This method is used to enable LTD toggle.
    */
    async selectExtendedOnLTD() {
        await this.util.clickElement(this.ltdtoggle);
    }

    /**
    * This method is used to select TABLES and magnify tabs
    */
    async selectExtendedTablestab() {
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.clickElement(this.tabletab);
        await this.util.clickElement(this.netbuyinplus);
    }

    /**
    * This method is used to select Custom Ratings.
    */
    async selectExtendedCustomRatingstab() {
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.clickElement(this.customratingtab);
    }

    /**
    * This method is used to select Expenses.      
    */
    async selectExtendedExpensestab() {
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.clickElement(this.exptab);
        await this.util.clickElement(this.pointplus);
        await this.util.clickElement(this.primarycompplus);
        await this.util.clickElement(this.secondcompplus);
    }

    /**
    * This method is used to select Additional Stats tab.
    */
    async selectExtendedAddStatstab() {
        await this.util.waitForPagetoLoad(this.page, 2000);
        await this.util.clickElement(this.addstatstab);
        await this.util.waitForPagetoLoad(this.page, 2000);
    }


}
