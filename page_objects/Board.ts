import { expect, Locator, Page } from "@playwright/test";

export class Board {
    readonly page: Page;
    readonly nameColumnField: Locator;
    readonly newCardsField: Locator;
    readonly cardsText: Locator

    constructor(page: Page) {
        this.page = page;
        this.nameColumnField = page.getByRole("button", { name: "GOOD" });        
        this.newCardsField = page.locator(".row .content");
        this.cardsText = page.locator(".row .content");
    };
    async newCard(cardsField: string) {
        await this.nameColumnField.click();
        await this.newCardsField.type(cardsField);
    };
    async testCardsText(text: string) {
        await expect(this.cardsText).toHaveText(text);
    };
};