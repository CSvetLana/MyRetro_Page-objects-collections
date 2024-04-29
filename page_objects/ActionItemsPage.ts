import { expect, Locator, Page } from "@playwright/test";

export class ActionItemsPage {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly actionItemsField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.locator(".hamburger-checkbox");
        this.actionItemsField = page.getByTestId("action-items-option");
    };

    async clickActionItems(){
        await this.hamburgerMenu.click();
        await this.actionItemsField.click();
    };
};