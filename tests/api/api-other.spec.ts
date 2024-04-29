import {test, expect} from "@playwright/test";
let templateId: number;

test.describe.parallel("Other API endpoints testing", () => {

    test("Get info about user", async ({ request })=>{
        const response = await request.get("me");
        
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);

        expect (response.status()).toBe(200);
        expect (responseBody.id).toBe(379);
        expect (responseBody.username).toBe("buratino2562");
        expect (responseBody.email).toBe("buratino2562@mail.ru");   
        expect (responseBody.position.id).toBe(3);   
    });
    test("Return template of board parameters", async ({ request }) => {
        const response = await request.get("templates");

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);

        var columnName = responseBody.filter(function (chain) {
            return chain.id === 1;
        })[0].columns[0].name; 

        console.log("Name column 1 for template id=1 - "+columnName);
        
        expect(columnName).toBe("Good");
    });
});