import { test ,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('Validate login through email' , async ( { page}) => {

const home = new HomePage(page);
await home.gotoHomePage();
await home.clickLogin();
await page.waitForTimeout(3000)
await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});
