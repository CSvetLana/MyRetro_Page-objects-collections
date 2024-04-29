import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";

test.describe("Login and Logout", () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        //await page.goto("https://myretro-stg.tochkavhoda.ru/");
        await loginPage.visitMyRetro();
    });
    //Negativ test
    test("Login with invalid credentials", async ({ page }) => {
        await loginPage.login("wrong email", "wrong password");
        await loginPage.assertErrorMessage();
    });
    //Positiv test
    test("Login with valid credentials", async ({ page }) => {
        await loginPage.login("buratino2562", "111111");
    });
});