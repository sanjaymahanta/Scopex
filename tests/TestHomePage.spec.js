import { test ,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('Validate login through email' , async ( { page}) => {

const home = new HomePage(page);
await home.gotoHomePage();
await home.validate();
await page.waitForTimeout(3000)

});