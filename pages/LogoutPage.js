
export class LogoutPage{

    constructor(page){
        this.page = page;
        this.profile = "(//button[@type='button'])[2]";
        this.logOut = "//a[text()='Log out']";


    }

    async gotologoutPage(){
        await this.page.goto("https://scopex.money/Dashboard");
    }


    async logoutFromApplication() {
       
        await this.page.locator(this.profile).waitFor({ state: 'visible' });
        await this.page.click(this.profile);
    
      
        await this.page.locator(this.logOut).waitFor({ state: 'visible' });
        await this.page.click(this.logOut);
    }
    
}
