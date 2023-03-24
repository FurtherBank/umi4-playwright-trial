import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

  const element = page.getByText('New Issue');
  expect(element).toBeTruthy();
});

test('simple test', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  await page.waitForSelector('#root > div');

  //
  const text = 'Yay! Welcome to umi!';
  let elementHandle = await page.$(`:text("${text}")`);
  expect(elementHandle).not.toBeNull();

  elementHandle = await page.$('img');
  expect(elementHandle).not.toBeNull();
});

test('simple test with playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForSelector('#docusaurus_skipToContent_fallback > main > section.features_keug');
});
