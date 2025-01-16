import DBUtils from "../utils/db-utils";
import { APIRequestContext, expect } from "@playwright/test";

export default class PreRequisites {

    /**
     * This method is used to clear the linked players
     * @param dbconurl 
     * @param playerid 
     */
    async clearLinkedPlayer(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        const result = await dbutils.getResultSet("select top 1 LinkNumber from playerlink where playerid='" + playerid + "'")
        if (result.recordset.length > 0) {
            //  let linkid:string= result.recordset[0].LinkNumber
            //   await dbutils.doUpdateOrDelete("update link set Status='I' where LinkNumber='"+linkid+"'")
            await dbutils.doUpdateOrDelete("delete from playerlink where playerid='" + playerid + "'")
            console.log("Cleared the linked playerid")
        }
    }

    /**
    * This method is used to set linked players configuration
    * select * from configitem where Internaldescription = 'MaxPlayersInLink'
       select * from configglobal where ItemID =206
    */
    async setLinkedConfig(dbconurl: string, configvalue: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update ConfigGlobal set ConfigValue=" + configvalue + " where ItemID = 206");
    }



    /**
     * This method is used to clear the comments
     * @param dbconurl 
     * @param playerid 
     */
    async clearComments(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update playercomment set Status='I' where playerid ='" + playerid + "' and userid='30019' and Status='A'  and Expiration>(SELECT CONVERT(DATETIME, CONVERT(DATE, GETDATE()), 121))")
        console.log("clearing comment")
    }

    /**
     * This method is used to clear the lock
     * @param dbconurl 
     * @param playerid 
     */
    async clearLock(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("delete from pat where PlayerID='" + playerid + "'")
        console.log("Clear Lock")
    }

    // Function to get the current timestamp
    async getCurrentTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    /**
   * This method is used to add the lock
   * @param dbconurl 
   * @param playerid 
   */
    async addLock(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        const currentTime = this.getCurrentTimestamp();  // Get current timestamp
        await dbutils.doUpdateOrDelete(`INSERT INTO dbo.PAT (Location, PlayerID, CardInTime, CardID, SiteID, LockTypeID, Type)
             VALUES ('PCB-1-Site-1-NONE',`+ playerid + `, '2023-06-16T08:02:06.54', 12345665002277683635, 1, 0, 1)`)
        await dbutils.doUpdateOrDelete(`INSERT INTO dbo.PAT (Location, PlayerID, CardInTime, CardID, SiteID, LockTypeID, Type)
                VALUES ('PCB-1-Site-1-LOCAL',`+ playerid + `, '2023-06-16T08:02:06.54', 12345665002277683635, 1, 1, 2)`)
        console.log("Pat lock added")

    }

    /**
     * This method is used to update 
     */
    async updateEnrollmentDOBConfig(dbconurl: string, configvalue: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update ConfigGlobal set ConfigValue=" + configvalue + " where ItemID = 600");
    }
    /**
     * @param dbconurl This method is used to update Authorization configuration for postal code.
     */
    async updatepostalAuthorizeConfig(dbconurl: string, configvalue: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update ConfigGlobal set ConfigValue=" + configvalue + " where ItemID = 309");
    }

    async updateMarketAuthorizerHostID(dbconurl: string, hostid: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update playerhost set hostid=" + hostid + " where playerid = 408");
    }

    /**
     * Set Gaming profile set to 0 for Decimal and 1 for round off without decimal value in gaming profile data
     */
    async setGamingRoundedConfig(dbconurl: string, configvalue: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update ConfigSite set ConfigValue=" + configvalue + " where ItemID = 6000");
    }

    /**
     * @param dbconurl This method is used to update Comp Authrization and comment for 
     * select * from configitem where description like '%comp%'
     *  SELECT * FROM configglobal WHERE ItemID IN (302, 303)
     */
    async updatecompAuthorizeCommentConfig(dbconurl: string, configvalue: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("update ConfigGlobal set ConfigValue=" + configvalue + " where ItemID = 302");
        await dbutils.doUpdateOrDelete("update ConfigGlobal set ConfigValue=" + configvalue + " where ItemID = 303");
    }

    /**
     * This method is used to add PIN LOCK
     */
    async setPlayerCardPinLock(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("Update player set AbandonedCard='N' , PINLocked='Y' where playerid='" + playerid + "'");

    }

    /**
     * This method is used to handle abandoned card
     * @param dbconurl 
     * @param playerid 
     */
    async handleAbandonedCard(dbconurl: string, playerid: string) {
        const dbutils = new DBUtils(dbconurl);
        await dbutils.doUpdateOrDelete("Update player set AbandonedCard='Y' , PINLocked='N' where playerid='" + playerid + "'");
    }


    /**
     * This method is used to generate token
     * @param securityip 
     * @param username 
     * @param password 
     * @param req 
     * @returns 
     */
    async getToken(securityip: string, username: string, password: string, req: APIRequestContext) {

        //Creating token
        const tokenresponse = await req.post(`${securityip}/security/v2/domains/Site%201/applications/Portal/user/token?grant_type=password&username=${username}&password=${password}`)
        expect(tokenresponse.status()).toBe(200);
        //Get token
        const responseBody = await tokenresponse.json();
        const accesstoken = responseBody.access_token;
        //console.log(accesstoken)
        return accesstoken;
    }


}

