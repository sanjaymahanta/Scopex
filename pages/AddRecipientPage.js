import { expect } from '@playwright/test'; // Add this import at the top

export class AddRecipientPage {

    constructor(page) {
        this.page = page;
        this.recipientName = 'input[name="recipient_name"]';
        this.recipientNickName = 'input[name="recipient_nick_name"]';
        this.accountNumber = 'input[name="bank_account_number"]';
        this.ifscCode = 'input[name="ifsc_code"]';
        this.submit = "//button[text()='Submit']";
        this.frameLoacte = "//iframe[@title='archetype']";
        this.confirm = "//button[text()='Confirm']"
       
    }
    async gotoAddRecipientPage() {
        await this.page.goto("https://scopex.money/Add-Recipient");
    }


    async enterRecipientName(recipientName) {
        await this.page.fill(this.recipientName, recipientName); // Fill recipient name
    }

    async enterNickName(nickName) {
        await this.page.fill(this.recipientNickName, nickName); // Fill recipient nickname
    }

    async enterAccountNumber(accountnumber) {
        await this.page.fill(this.accountNumber, accountnumber);
    }

    async enterIFSC_Code(ifscCode) {
        await this.page.fill(this.ifscCode, ifscCode);
    }

    async clickSubmit() {
        await this.page.click(this.submit);
    }


    async clickConfirm() {
        
        const element = await this.page.locator(this.confirm);
if (await element.isVisible()) {
    console.log('Element found outside iframe');
    await element.click();
} else {
    console.log('Element not found outside iframe. Checking inside iframes...');
    await this.clickConfirm(); 
}

    }
    



}