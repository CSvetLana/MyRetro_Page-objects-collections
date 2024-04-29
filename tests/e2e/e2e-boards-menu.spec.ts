import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";
import { ActionItemsPage } from "../../page_objects/ActionItemsPage";
import { MentionsPage } from "../../page_objects/MentionsPage";
test.describe("Boards menu", () => {
    let loginPage: LoginPage;
    let actionItemsPage: ActionItemsPage;
    let mentionsPage: MentionsPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        actionItemsPage = new ActionItemsPage(page);
        mentionsPage = new MentionsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("buratino2562", "111111");
    });
    test("Check Action Items Menu Option", async ({ page }) => {
        await actionItemsPage.clickActionItems();

        const actionItemsTitle = page.locator("[data-qa=action-items-title]");
        await expect(actionItemsTitle).toHaveText("Action Items");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/action_items");
    });
    test("Check Mentions Menu Option", async ({ page }) => {
        await mentionsPage.clickMentionPage();

        const mentionsTitle = page.locator("[data-qa=mentions-title]");
        await expect(mentionsTitle).toHaveText("Mentions");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/mentions");
    });
});