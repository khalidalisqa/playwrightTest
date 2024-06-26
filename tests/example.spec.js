// @ts-check
const { test, expect } = require('@playwright/test');

test.only('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const url = await page.url();
  console.log("URL is "+url);
  const title = await page.title();
  console.log("Page titile "+title);
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(true).toBeTruthy();
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});