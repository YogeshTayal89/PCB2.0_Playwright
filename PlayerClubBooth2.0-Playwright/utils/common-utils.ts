import moment from 'moment';
/**
 * This class is having all the utility methods
 */
export default class Utils {

    /**
     * MEthod is used to get the random number
     * @param max 
     * @returns 
     */
    async getRandomNumber(max: number): Promise<string> {
        return String(Math.floor(Math.random() * max));
    }



     /**
     * MEthod is used to get the random number between two numbers
     * @param min 
     * @param max
     * @returns 
     */
     async getRandomNumberBetweenTwoNumbers(min:number,max: number): Promise<string> {
        return String(Math.floor(Math.random() * max)+min);
    }

    /**
     * This method is used to get the future date
     * @returns 
     */
    async getFutureDate(): Promise<string> {
        let futuredate = moment(new Date(), 'MM/DD/yyyy').add(5, "years")
        let futuredateformat: string = moment(futuredate).format('MM/D/yyyy, hh:mm A');
        return futuredateformat;
    }

    /**
     * This method is used to get the past date 
     * @returns 
     */
    async getPastDate(): Promise<string> {
        let pastdate = moment(new Date(), 'MM/DD/yyyy').subtract(5, "years")
        let pastdateformat: string = moment(pastdate).format('MM/D/yyyy, hh:mm A');
        return pastdateformat;
    }
    /**
     * 
     *  This method is used to get current month data
     */
    async  getCurrentMonthData(): Promise<{ startDate: string, endDate: string }> {
        // Calculate the start date of the current month
        const startDate = moment().startOf('month').format('MM/DD/yyyy');
        console.log(startDate)
        // Calculate the today's date of the current month
        const endDate = moment().format('MM/DD/yyyy');
        console.log(endDate)
        // Return the formatted start and end dates
        return { startDate, endDate };
    }

    /**
     * @returns This method will return today's date
     */
    async  getTodayDate() : Promise<string>{
        // Calculate the today's date
        let todaydate = moment().format('MM/DD/yyyy');
       return todaydate;
    }
    /**
     * This method will return data of this year - start date will be FromDate=01/01/2024&ToDate=Todats date
     */
    async getCurrentYearData(): Promise<{ startDate: string, endDate: string }> {
        // Calculate the start date of the current year
        const startDate = moment().startOf('year').format('MM/DD/yyyy');
        console.log(startDate);
        // Calculate today's date
        const endDate = moment().format('MM/DD/yyyy');
        console.log(endDate);
        // Return the formatted start and end dates
        return { startDate, endDate };
    }

    /**
     * This method is used to get data of last month
     */
    async getLastMonthData(): Promise<{ startDate: string, endDate: string }> {
        // Calculate the start date of the last month
        const startDate = moment().subtract(1, 'months').startOf('month').format('MM/DD/yyyy');
        console.log(startDate);
        // Calculate the end date of the last month
        const endDate = moment().subtract(1, 'months').endOf('month').format('MM/DD/yyyy');
        console.log(endDate);
        // Return the formatted start and end dates
        return { startDate, endDate };
    }
    /**
     * This method is used to get data of last Year
     */
    async getLastYearData(): Promise<{ startDate: string, endDate: string }> {
        // Calculate the start date of the last year
        const startDate = moment().subtract(1, 'years').startOf('year').format('MM/DD/yyyy');
        console.log(startDate);
        // Calculate the end date of the last year
        const endDate = moment().subtract(1, 'years').endOf('year').format('MM/DD/yyyy');
        console.log(endDate);
        // Return the formatted start and end dates
        return { startDate, endDate };
    }
    
    
    

}