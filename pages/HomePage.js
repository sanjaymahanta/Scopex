export class HomePage{

constructor(page) {
    this.page = page;
    this.loginLink = "//a[text()='Login']";
   
}

async gotoHomePage(){
    await this.page.goto("https://scopex.money/");
}

async clickLogin(){


    await this.page.click(this.loginLink);
  
}
}