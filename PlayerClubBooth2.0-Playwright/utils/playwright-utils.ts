import { BrowserContext, Locator, Page, expect } from "@playwright/test";

/**
 * This class act as a playwright wrapper
 */

export default class PlaywrightUtils {

  /**
   * This method is used to open the URL
   * @param page 
   * @param url 
   */
  async openURL(page: Page, url: string) {
    await page.goto(url);
  }

  /**
   * This methd is used to click on the given element
   * @param page 
   * @param element 
   */
  async clickElement(element: Locator) {
    await element.click();
  }


  async pressTab(element: Locator) {
    await element.press('Tab');
  }

  /**
   * This method is ued clear nd type the given text in to the element.
   * @param page 
   * @param element 
   * @param texttotype 
   */
  async typeText(element: Locator, texttotype: string) {
    await element.fill(texttotype);
  }

  /**
   * 
   * @param element This method is used to type the text like from Keyboard
   * @param texttotype 
   */
  async typeTextLikeFromKeyboard(element: Locator, texttotype: string) {
    await element.pressSequentially(texttotype);
  }

  /**
   * This method is used to verify the element is present
   * @param page 
   * @param element 
   */
  async verifyElementPresent(element: Locator) {
    await expect(element).toBeVisible();

  }

  /**
   * This method is used to verify the element is not present 
   * @param element 
   */
  async verifyElementNotPresent(element: Locator) {
    await expect(element).not.toBeVisible();

  }

  /**
   * This method is used to pause the action for the specified time
   * @param page 
   */
  async waitForPagetoLoad(page: Page, timeout: number) {
    await page.waitForTimeout(timeout);

  }

  /**
   * This method is used to verify the element is present or not and returns true or false
   * @param page 
   * @param element 
   * @returns 
   */
  async isElementPresent(element: Locator): Promise<boolean> {
    let result: boolean = false;
    try {
      await element.waitFor({ state: "visible", timeout: 5000 });
      result = true;
    }
    catch {
      result = false;
    }
    return result;
  }

  /**
   * This method is used to open a new tab or page and will return that tab or page reference
   * @param context 
   * @returns 
   */
  async openNewTab(context: BrowserContext): Promise<Page> {

    const page = context.newPage();
    return page;
  }

  /**
   * This method is used to verify the give text is present with in the element
   * @param element 
   * @param texttoverify 
   */
  async verifyTextPresent(element: Locator, texttoverify: string) {
    await expect(element).toHaveText(texttoverify);

  }


  /**
   * This method is used to verify the give text is not present with in the element
   * @param element 
   * @param texttoverify 
   */
  async verifyTextNotPresent(element: Locator, texttoverify: string) {
    await expect(element).not.toHaveText(texttoverify);

  }


  /**
   * This method is used to verify the element contains the text
   * @param element 
   * @param texttoverify 
   */
  async verifyContainsText(element: Locator, texttoverify: string) {
    await expect(element).toContainText(texttoverify);

  }


  /**
   * This method is used to verify the element contains some text
   * @param element 
   * @param texttoverify 
   */
  async verifyContainsAnyText(element: Locator) {
    await expect(element).not.toBeEmpty();

  }

  /**
   * This method is used to verify the given text contains the element text
   * @param element 
   * @param texttoverify 
   */
  async verifyTextContainsElementText(element: Locator, texttoverify: string) {
    expect(texttoverify).toContain(String((await element.textContent())).toString().trim());
  }

  /**
   * This method is used to compare two text. It will return true if actual text contains expected text
   * @param actual 
   * @param expected 
   */
  async verifyGivenTextContainsAnotherText(actual: string, expected: string) {
    expect(actual).toContain(expected)
  }


  /**
  * This method is used to compare two text. 
  * @param actual 
  * @param expected 
  */
  async verifyGivenStringsEqual(actual: string, expected: string) {
    expect(actual).toEqual(expected)
  }

  /**
   * This method is used to verfy the value is present for the given locator
   * @param element 
   * @param valuetoverify 
   */
  async verifyValuePresent(element: Locator, valuetoverify: string) {
    await expect(element).toHaveValue(valuetoverify);

  }

  /**
   * This method is used to compare the element value
   * @param element 
   * @param attributename 
   * @param attributevalue 
   */
  async verifyElementAttribute(element: Locator, attributename: string, attributevalue: string) {
    await expect(element).toHaveAttribute(attributename, attributevalue);

  }

  /**
   * This method is used to verify the given text is present or not, and will return true or false
   * @param element 
   * @param texttoverify 
   * @returns true or false
   */
  async isTextPresent(element: Locator, texttoverify: string): Promise<boolean> {
    let result: boolean = await element.textContent() === texttoverify;
    return result;

  }

  /**
   * This method is used to verify the element is enable
   * @param element 
   */
  async verifyEnabled(element: Locator) {
    await expect(element).toBeEnabled();
  }

  /**
   * This method is used to verify the element is enable
   * @param element 
   */
  async verifyChecked(element: Locator) {
    await expect(element).toBeChecked();
  }

  /**
   * This method is used to verify the element is disable
   * @param element 
   */
  async verifyDisabled(element: Locator) {
    await expect(element).toBeDisabled();
  }

  /**
   * This method is used to get the text from the element
   * @param element 
   * @returns 
   */
  async getText(element: Locator): Promise<string | null> {
    return await element.textContent();
  }

  /**
    * This method is used to get the value from the element
    * @param element 
    * @returns 
    */
  async getValue(element: Locator): Promise<string> {
    return await element.inputValue();
  }

  /**
   * 
   * @param element This method is used to return the number of matched elements
   * @returns 
   */
  async getCount(element: Locator): Promise<number> {
    return await element.count();
  }


  /**
    * This method is used to get the attribute value from the element
    * @param element 
    * @returns 
    */
  async getAttributeValue(element: Locator, attributename: string): Promise<any> {
    return await element.getAttribute(attributename);
  }

  // Function to generate a random zip code
  async generateRandomNumber() {
    return Math.floor(10001 + Math.random() * 99999).toString();
  }

  /**
* This method is used to verify the element is present using soft assertion
* @param page 
* @param element 
*/
  async softVerifyElementPresent(element: Locator) {
    await expect.soft(element).toBeVisible();

  }

  /**
 * This method is used to verify the element is not present using soft assertion
 * @param element 
 */
  async softVerifyElementNotPresent(element: Locator) {
    await expect.soft(element).not.toBeVisible();

  }

  /**
   * This method is used to verify the give text is present with in the element using soft assertion
   * @param element 
   * @param texttoverify 
   */
  async softVerifyTextPresent(element: Locator, texttoverify: string) {
    await expect.soft(element).toHaveText(texttoverify);

  }

  /**
   * This method is used to verify the element contains the text using soft assertion
   * @param element 
   * @param texttoverify 
   */
  async softVerifyContainsText(element: Locator, texttoverify: string) {
    await expect.soft(element).toContainText(texttoverify);

  }

  /**
  * This method is used to verify the element contains some text usign soft assertion
  * @param element 
  * @param texttoverify 
  */
  async softVerifyContainsAnyText(element: Locator) {
    await expect.soft(element).not.toBeEmpty();

  }

  /**
   * This method is used to verify the given text contains the element text using soft assertion
   * @param element 
   * @param texttoverify 
   */
  async softVerifyTextContainsElementText(element: Locator, texttoverify: string) {
    expect.soft(texttoverify).toContain(String((await element.textContent())).toString().trim());
  }

  /**
   * This method is used to compare two text. It will return true if actual text contains expected text using soft assertion
   * @param actual 
   * @param expected 
   */
  async softVerifyGivenTextContainsAnotherText(actual: string, expected: string) {
    expect.soft(actual).toContain(expected)
  }

  /**
  * This method is used to compare two texts are equal using soft assertion
  * @param actual 
  * @param expected 
  */
  async softVerifyGivenStringsEqual(actual: string, expected: string) {
    expect.soft(actual).toEqual(expected)
  }

  /**
  * This method is used to compare two texts are not equal using soft assertion
  * @param actual 
  * @param expected 
  */
  async softVerifyGivenStringsNotEqual(actual: string, expected: string) {
    expect(actual).not.toEqual(expected)
  }

  /**
   * This method is used to verfy the value is present for the given locator using soft assertion
   * @param element 
   * @param valuetoverify 
   */
  async softVerifyValuePresent(element: Locator, valuetoverify: string) {
    await expect.soft(element).toHaveValue(valuetoverify);

  }

  /**
   * This method is used to compare the element value using soft assertion
   * @param element 
   * @param attributename 
   * @param attributevalue 
   */
  async softVerifyElementAttribute(element: Locator, attributename: string, attributevalue: string) {
    expect.soft(await element.getAttribute(attributename)).toEqual(attributevalue);
  }

  /**
   * This method is used to verify the element is enable using soft assertion
   * @param element 
   */
  async softVerifyEnabled(element: Locator) {
    await expect.soft(element).toBeEnabled();
  }


  /**
   * This method is used to verify the element is disable using soft assertion
   * @param element 
   */
  async softVerifyDisabled(element: Locator) {
    await expect.soft(element).toBeDisabled();
  }


}