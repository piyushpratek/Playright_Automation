import { test, expect } from '@playwright/test';

test("My first test", ({ page }) => {
    page.goto("https://www.google.co.in/")
})