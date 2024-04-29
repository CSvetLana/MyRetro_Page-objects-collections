import { expect, Locator, Page } from "@playwright/test";

export class Profile {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly profileMenu: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly canselButton: Locator;
    readonly submitButton: Locator;
    readonly emailField: Locator;
    readonly positionField: Locator;
    readonly positionNameField: Locator;
    readonly workExperienceField: Locator;
    readonly birthdayField: Locator;
    readonly phoneNumberField: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.locator(".hamburger-checkbox");
        this.profileMenu = page.locator("[data-qa=profile-option]");
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.canselButton = page.locator("[data-qa=profile-cancel-button]");
        this.submitButton = page.locator("[data-qa=profile-submit-button]");
        this.emailField = page.locator("#email");
        this.positionField = page.locator(".md-select-value[name=position-id]");
        this.workExperienceField = page.locator("#workExperience");
        this.birthdayField = page.locator(".field-birthday .md-input");
        this.phoneNumberField = page.locator("#phone");
    };
    async profileBox() {
        await this.hamburgerMenu.click();
        await this.profileMenu.click();
    };
    async changeFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    };
    async changeLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    };
    async pressCansel() {
        await this.canselButton.click();
    };
    async pressSubmit() {
        await this.submitButton.click();
    };
    async checkResult1(name:string) {
        await expect(this.firstNameField).not.toHaveValue(name);
    };
    async checkResult2(name:string) {
        await expect(this.firstNameField).toHaveValue(name);
    };
    async checkResult3(name:string) {
        await expect(this.lastNameField).not.toHaveValue(name);
    };
    async checkResult4(name:string) {
        await expect(this.lastNameField).toHaveValue(name);
    };
    async checkEmail(email:string) {
        await expect(this.emailField).toHaveValue(email);
    };
    async changePosition(posname:string){
        await this.positionField.click();
        await this.page.click("text="+(posname));
    };
    async checkPosition(posname:string){
        await expect(this.positionField).toHaveValue(posname);
    };
    async chengeWorkExperiense(workNumber:number){
        await this.workExperienceField.fill(workNumber.toString());
    };
    async checkWorkExperiense(workNumber:number){
        await expect(this.workExperienceField).toHaveValue(workNumber.toString());
    };
    async changeBirthday(birthdayDate:string) {
        await this.birthdayField.fill(birthdayDate);
        await this.page.pause();
        await (await this.page.waitForSelector("text=Ok")).click();
        await this.page.pause();
    };
    async checkBirthday(birthdayDate:string) {
        await expect(this.birthdayField).toHaveValue(birthdayDate);
    };
    async changePhoneNumber(phoneNumber:number){
        await this.phoneNumberField.fill(phoneNumber.toString());
    };
    async checkPhoneNumber1(phoneNumber:number) {
        await expect(this.phoneNumberField).not.toHaveValue(phoneNumber.toString());
    };
    async checkPhoneNumber2(phoneNumber:number) {
        await expect(this.phoneNumberField).toHaveValue(phoneNumber.toString());
    };
};