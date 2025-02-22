import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';

test('TC_002', async ({ page }) => {
   
    const home = new HomePage(page);
await home.gotoHomePage();
await home.validate();
    const login = new LoginPage(page);
   await login.loginPage();
   await  login.clickEmailLink();
    await page.waitForTimeout(3000);

}

);