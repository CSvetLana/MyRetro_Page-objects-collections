import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";
import { MyBoardsPage } from "../../page_objects/MyBoardsPage";
test.describe("My Boards Page", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("buratino2562", "111111");
    });
    test("Create New Board with 3 columns", async ({ page }) => {
        await myBoardsPage.fillNewBoardForm("Test proiect", 3, "Good - Bad - Actions");
        await myBoardsPage.clickStartRetroButton();

        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test proiect");
        await expect(page).toHaveURL(/board/);
    });
    test("Create New Board with 4 columns", async ({ page }) => {
        await myBoardsPage.fillNewBoardForm("Test proiect_4", 4, "Good - Bad - Keep - Actions");
        await myBoardsPage.clickStartRetroButton();

        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test proiect_4");
        await expect(page).toHaveURL(/board/);
    });
});