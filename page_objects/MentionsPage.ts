import { expect, Locator, Page } from "@playwright/test";

export class MentionsPage {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly mentionPageField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.locator(".hamburger-checkbox");
        this.mentionPageField = page.getByTestId("mentions-option");
    };
    async clickMentionPage() {
        await this.hamburgerMenu.click();
        await this.mentionPageField.click();
    };
};