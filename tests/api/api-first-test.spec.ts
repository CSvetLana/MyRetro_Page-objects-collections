import {test, expect} from "@playwright/test";

test.describe.parallel("API test", () => {

    test("First API Test", async ({ request })=>{
        const response = await request.get("me");
        expect (response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
    });
});