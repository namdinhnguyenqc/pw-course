import { test } from 'playwright/test';
test('Product page1', async ({ page }) => {
    await test.step('add product', async () => {
        //Truy cap vao trang material
        await page.goto('https://material.playwrightvn.com/');
        //click vao bai hoc 2
        await page.click("//a[@href='02-xpath-product-page.html']");
        //double click product 1
        await page.locator("//button[@data-product-id='1']").dblclick();
        //tripble click product 2
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@data-product-id='2']").click();
        }
        //click product 3
        await page.locator("//button[@data-product-id='3']").click();
    });
});