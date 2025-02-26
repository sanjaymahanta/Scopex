import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DashBoardPage } from '../pages/DashBoardPage.js';
import { AddRecipientPage } from '../pages/AddRecipientPage.js';
import { LogoutPage } from '../pages/LogoutPage.js';


test('verify logout functionality', async ({ page }) => {

    const home = new HomePage(page);
    await home.gotoHomePage();
    await home.clickLogin();
    await page.waitForTimeout(3000)

    const login = new LoginPage(page);
    await login.loginPage();
    await login.enterEmail("sanjaykmahanta28@gmail.com");
    await login.enterPassword("Sanjay@123");
    await login.clickLogInButton();
    await page.waitForTimeout(3000);

    const dashboard = new DashBoardPage(page);
    await dashboard.gotoDashboardPage();
    await dashboard.clickRecipient();
    await dashboard.clickAddRecipient();
    await page.waitForTimeout(3000);

    const addrecipient = new AddRecipientPage(page);
    await addrecipient.enterRecipientName("Sanjay Mahanta");
    await addrecipient.enterNickName("babu");
    await addrecipient.enterAccountNumber("37057557745");
    await addrecipient.enterIFSC_Code("SBIN0000303");
    await addrecipient.clickSubmit();
    await page.waitForTimeout(3000);
    await addrecipient.clickConfirm();
    await page.waitForTimeout(3000);

    const lout = new LogoutPage(page);
    lout.logoutFromApplication();
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'LogoutPage.png'})

});