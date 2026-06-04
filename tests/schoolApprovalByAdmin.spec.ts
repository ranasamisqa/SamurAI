import path from 'path';
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000); // 2 minutes timeout for this test
  await page.goto('https://admin.samuraiinnovations.com/');
  await page.getByRole('textbox', { name: 'doe.john@gmail.com' }).click();
  await page.getByRole('textbox', { name: 'doe.john@gmail.com' }).fill('shadi.azzam@samuraiinnovations.com');
  await page.getByRole('textbox', { name: '**********' }).click();
  await page.getByRole('textbox', { name: '**********' }).fill('Call@911');
  await page.getByRole('button', { name: 'Login to Admin' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('heading', { name: 'Welcome, Admin' }).getByRole('img').click();
  await page.getByRole('link', { name: 'School Intake List' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('row', { name: 'APSACS Steve Smith +' }).getByRole('button').click();
  await page.locator('.DropdownOptionContainer.undefined__input-container').click();
  await page.getByRole('option', { name: 'Al Shamal' }).click();
  const pdfPath = path.resolve(__dirname, '../fixtures/test-document.pdf');
  await page.locator('input[type="file"]').setInputFiles(pdfPath);
  await page.getByRole('button', { name: 'Submit' }).click();
 });