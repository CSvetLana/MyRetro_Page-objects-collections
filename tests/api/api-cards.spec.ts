import { test, expect } from "@playwright/test";
let cardId: number;

test.describe("Cards API endpoints testing", () => {
    test("Add new cards", async ({ request }) => {
        const response = await request.post("cards", {
            data: {
                "columnId": 3938,
                "content": "new card testing"
            }
        });
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.content).toBe("new card testing");

        cardId = responseBody.id;
        console.log("new card id " + cardId);
    });
   
    test.afterAll(async ({ request }) => {
        const response = await request.delete(`cards/${cardId}`);
        console.log("deleted card id" +cardId);
        expect(response.status()).toBe(200);
    });
});