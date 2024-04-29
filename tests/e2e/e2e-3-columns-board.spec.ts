import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";
import { MyBoardsPage } from "../../page_objects/MyBoardsPage";
import { Board } from "../../page_objects/Board";
test.describe("Work with 3 columns Board", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;
    let board: Board;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        board = new Board(page);
        await loginPage.visitMyRetro();
        await loginPage.login("buratino2562", "111111");
        await myBoardsPage.fillNewBoardForm("Test proiect123", 3, "Good - Bad - Actions");
        await myBoardsPage.clickStartRetroButton();

        await expect(page).toHaveURL(/board/);
    });
    test.afterEach(async ({ page }) => {
        await page.goto("/");
        const deleteButton = page.locator(".row.content > div:nth-child(2)").getByText("Delete");
        await deleteButton.click();
        await page.getByRole("button", { name: "Yes" }).click();
    });
    test("Add New Card in Good column", async ({ page }) => {
        await board.newCard("test content");
        await page.keyboard.press("Enter");
        await board.testCardsText("test content");
    });
});