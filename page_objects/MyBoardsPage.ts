import {expect, Locator, Page} from "@playwright/test";
export class MyBoardsPage {
    readonly page: Page;
    readonly addNewBoardButton: Locator;
    readonly projectNameFild: Locator;
    readonly columnsNumberFild: Locator;
    readonly columnNamesFild: Locator;
    readonly startRetroButton: Locator;

constructor(page:Page) {
    this.page = page;
    this.addNewBoardButton = page.getByTestId("add-new-board");
    this.projectNameFild = page.locator("[data-qa=new-board-project-name]");
    this.columnsNumberFild = page.getByTestId("new-board-columns-number");
    this.columnNamesFild = page.getByTestId("new-board-column-names");
    this.startRetroButton = page.getByTestId("start-retro-button");
};    
async fillNewBoardForm(projectName:string, columnsNumber:number, columnsNames:string) {
    await this.addNewBoardButton.click();
    await this.projectNameFild.type(projectName);
    await this.columnsNumberFild.click();
    await this.page.click("text=- "+(columnsNumber)+" -");
    await this.columnNamesFild.click();
    await this.page.click("text=- "+(columnsNumber)+" - "+(columnsNames));
};
async clickStartRetroButton(){
    await this.startRetroButton.click();
};
};