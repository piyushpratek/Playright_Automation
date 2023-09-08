import { test, expect } from '@playwright/test';

test("My first test", async ({ page }) => {
    await page.goto("https://www.google.co.in/")
    await expect(page).toHaveTitle("Google")
})