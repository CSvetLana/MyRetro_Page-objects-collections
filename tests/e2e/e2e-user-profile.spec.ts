import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page_objects/LoginPage";
import { Profile } from "../../page_objects/components/Profile";
let oldPhoneNumber;
let oldFirstName;
let oldLastName;

//let oldBirthdayDate;
test.describe("User Profile", () => {
    let loginPage: LoginPage;
    let profile: Profile;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        profile = new Profile(page);
        await loginPage.visitMyRetro();
        await loginPage.login("buratino2562", "111111");
    });
    test("Change First Name and Cancel", async ({ page }) => {
        await profile.profileBox();
        await profile.changeFirstName("Cancel First name");
        await profile.pressCansel();
        await profile.profileBox();
        await profile.checkResult1("Cancel First name");
    });
    test("Change First Name and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.changeFirstName("Submit First name");
        await profile.pressSubmit();
        await profile.profileBox();
        await profile.checkResult2("Submit First name");
    });
    test("Check Email Field", async ({ page }) => {
        await profile.profileBox();
        await profile.checkEmail("buratino2562@mail.ru");
    });
    test("Change Position and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.changePosition("project manager");
        await profile.pressSubmit();
        await profile.profileBox();
        await profile.checkPosition("project manager");
    });
    test("Change Work Experience and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.chengeWorkExperiense(13);
        await profile.pressSubmit();
        await profile.profileBox();
        await profile.checkWorkExperiense(13);
    });
    test("Change Birthday and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.changeBirthday("1999-05-15");
        await profile.pressSubmit();
        await profile.profileBox();
        await profile.checkBirthday("1999-05-15");
    });
    test("Change Last Name and Cancel", async ({ page }) => {
        await profile.profileBox();
        await profile.changeLastName("Cancel Last name");
        await profile.pressCansel();
        await profile.profileBox();
        await profile.checkResult3("Cancel Last name");

    });
    test("Change Last Name and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.changeLastName("Submit Last name");
        await profile.pressSubmit();
        await profile.profileBox();
        await profile.checkResult4("Submit Last name");
    });
    test("Change Phone Number and Cancel", async ({ page }) => {
        await profile.profileBox();
        await profile.changePhoneNumber(951753);
        await profile.pressCansel();
        await profile.profileBox();
        await profile.checkPhoneNumber1(951753);
    });
    test("Change Phone Number and Submit", async ({ page }) => {
        await profile.profileBox();
        await profile.changePhoneNumber(555777888);
        await profile.pressSubmit();
        await profile.checkPhoneNumber2(555777888);
    });
   /*  test.afterAll(async ({ page }) => {
        await page.goto("/");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");

        //Return old values
        const firstNameField = page.locator("#first-name");
        await firstNameField.fill(oldFirstName);
        const lastNameField = page.locator("#last-name");
        await lastNameField.fill(oldLastName);
        const phoneNumber = page.locator("#phone");
        await phoneNumber.fill(oldPhoneNumber);
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");

        //Check old values
        await expect(firstNameField).toHaveValue(oldFirstName);
        await expect(lastNameField).toHaveValue(oldLastName);
        await expect(phoneNumber).toHaveValue(oldPhoneNumber);
    }); */
});