export class HomePage{

constructor(page) {
    this.page = page;
    this.loginLink = "//div[@class='hidden lg:flex']/a";
    this.userEmailLink = "//div[text()='sanjaykmahanta28@gmail.com']";
}

async gotoHomePage(){
    await this.page.goto('https://scopex.money/');
}

async validate(){


    await this.page.locator(this.loginLink).click();
  
}
}