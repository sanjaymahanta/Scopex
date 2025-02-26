import{ test ,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import {DashBoardPage} from '../pages/DashBoardPage.js';


test( 'dashboard test' , async ({page})=>{
    const home = new HomePage(page);
    await home.gotoHomePage();
    await home.clickLogin();
    await page.waitForTimeout(3000)
    const login = new LoginPage(page);
    await login.loginPage();
    await login.enterEmail("sanjaykmahanta28@gmail.com");
    await login.enterPassword("Sanjay@123");
    await login.clickLogInButton();
    await page.waitForTimeout(3000)
const dashboard = new DashBoardPage(page);
await dashboard.gotoDashboardPage();
await dashboard.clickRecipient();
await dashboard.clickAddRecipient();
await page.waitForTimeout(3000);
await page.screenshot({ path:'tests/screenshots/'+Date.now()+'DashBoardPage.png'})

});