import { expect } from '@playwright/test'; 

export class DashBoardPage {

    constructor(page) {
        this.page = page;
        this.recipient = '//span[text()="Recipients"]';
        this.addRecipient = "((//button[@type='button'])[3]//following::li//a)[2]";
    }
    async gotoDashboardPage(){
            await this.page.goto("https://scopex.money/Dashboard");
        }

        async clickRecipient() {
            await this.page.click(this.recipient);
        }
        
        async clickAddRecipient() {
            await this.page.click(this.addRecipient);
        }
        

    }
