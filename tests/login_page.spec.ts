import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});


test.describe('Signin', () => {

  test('home has title Quanby LMS', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Quanby LMS/);
  });

  test('signin link is /auth/login', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Signin' }).click();

    // Expects page to have a URL.
    await expect(page).toHaveURL(/\/auth\/login$/);
  });

  test('try to signin', async ({ page }) => {  
    // Click the get started link.
    await page.getByRole('link', { name: 'Signin' }).click();

    // Type in test email
    await page.getByPlaceholder('Enter your email address').fill('test@email.com');

    // Type in test password
    await page.getByPlaceholder('Enter your password').fill('testpassword');

    // Click the Sign in button
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Expects page to have a heading with the name of Dashboard.
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });
}); 
