import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';

test('Login with registered user',async({page}) => {
  const home = new HomePage(page);
  await home.gotoHomePage();
  await home.clickLogin();
  await page.waitForTimeout(3000)
const login = new LoginPage(page);
await login.loginPage();
await login.enterEmail("sanjaykmahanta28@gmail.com");
await page.waitForTimeout(3000)
await login.enterPassword("Sanjay@123");
await page.waitForTimeout(3000)
await login.clickLogInButton();
await page.waitForTimeout(3000)
await page.screenshot({ path:'tests/screenshots/'+Date.now()+'LoginPage.png'})


});