import {test, expect} from "@playwright/test";

test ("Check page title", async ({page}) => {
    await page.goto("http://example.com/");
    const pageTitle = page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
    });