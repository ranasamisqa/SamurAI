import {test, expect} from '@playwright/test';
import path from 'path';

test('test', async ({page}) => {
    await page.goto('https://admin.samuraiinnovations.com/');
    await page.getByRole('textbox', {name: 'doe.john@gmail.com'}).click();
    await page.getByRole('textbox', {name: 'doe.john@gmail.com'}).fill('shadi.azzam@samuraiinnovations.com');
    await page.getByRole('textbox', {name: '**********'}).click();
    await page.getByRole('textbox', {name: '**********'}).fill('Call@911');
    await page.getByRole('button', {name: 'Login to Admin'}).click();
    await page.getByRole('heading', {name: 'Welcome, Admin'}).getByRole('img').click();
    await page.getByRole('link', {name: 'School Intake List'}).click();
    await page.getByRole('button', {name: 'Add School'}).click();
    await page.getByRole('textbox', {name: 'Enter School Name'}).click();
    await page.getByRole('textbox', {name: 'Enter School Name'}).fill('The City School');
    await page.getByRole('textbox', {name: 'Enter full name'}).click();
    await page.getByRole('textbox', {name: 'Enter full name'}).fill('Wajahat Baloch');
    await page.getByRole('textbox', {name: 'Enter email Address'}).click();
    await page.getByRole('textbox', {name: 'Enter email Address'}).fill('wajahat.hrmanager@gmail.com');
    await page.getByRole('textbox', { name: 'Phone' }).click();
    await page.getByRole('textbox', { name: 'Phone' }).fill('+974 1234 2255');
    await page.locator('.DropdownOptionContainer.undefined__input-container').click();
    await page.getByRole('option', { name: 'Doha' }).click();
    await page.getByRole('textbox', { name: 'Enter address'}).click();
    await page.getByRole('textbox', { name: 'Enter address'}).fill('123 Main Street');
    const pdfPath = path.resolve("D:\\Rana Samiuddin\\Automation\\Software Testing Strategies.pdf");
    await page.locator('input[type="file"]').setInputFiles(pdfPath);
    await page.getByRole('button', { name: 'Submit' }).click();
});