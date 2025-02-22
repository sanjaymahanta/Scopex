export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailLink = "#container"; // Update the selector based on the actual button
        this.frameLocator = "div#root iframe"; // Corrected to CSS selector
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
}
