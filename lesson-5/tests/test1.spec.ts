import { test, expect } from '@playwright/test';

test('Register Page ', async ({ page }) => {
    await test.step('Truy cap trang & click register', async () => {
        //Truy cập vào trang
        await page.goto("https://material.playwrightvn.com/");
        //Click vào Register Page
        await page.click("//a[@href='01-xpath-register-page.html']");
        //Nhap username
        await page.locator("//input[@id='username']").fill('Nguyen Dinh Ha Nam');
        //Nhap username
        await page.locator("//input[@id='email']").fill('namdinhnguyen2611@gmail.com');
        //chon Gender
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='female']").check();
        //check hobbies
        const isChecked = await page.locator("//input[@id='reading']").isChecked();
        expect(isChecked).toBeFalsy();
        //tick vào 3 ô
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
        //uncheck cookings
        await page.locator("//input[@id='cooking']").uncheck();
        //nhap biography 
        await page.locator("//textarea[@id='bio']").fill('tôi tên là nam')
        //check  newsletter
        await page.locator("//input[@id='newsletter']").check();
        //click register
        await page.locator("//button[@type='submit']").click();
    });
});




