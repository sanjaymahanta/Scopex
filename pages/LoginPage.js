export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailLink = "id=container"; 
        this.frameLocator = "//div[@id='root']//child::iframe"; 
        this.registeredEmail = "(//div[@class='space-y-2'])[1]//input";
        this.password = "//input[@type='password']";
        this.clickLogin = "//button[text()='Log in']";
     
    }

    async loginPage() {
        await this.page.goto("https://scopex.money/Login");
    }

    async clickEmailLink() {
        // Wait for the iframe to appear
        await this.page.waitForSelector(this.frameLocator);

        // Locate the frame dynamically and click the button inside
        await this.page
            .frameLocator(this.frameLocator)
            .locator(this.emailLink)
            .click();
    }

    async enterEmail(email){
        await this.page.fill(this.registeredEmail,email);
    }

    async enterPassword(password){
await this.page.fill(this.password,password);
    }

    async clickLogInButton(){
        await this.page.click(this.clickLogin);
    }

    
}
