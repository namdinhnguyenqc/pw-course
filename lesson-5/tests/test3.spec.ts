import { test } from '@playwright/test';

test('Todo list', async ({ page }) => {
    await test.step('Tao 100ToDo list', async () => {
        //Truy cap vao trang
        await page.goto('https://material.playwrightvn.com/');
        //Click vao link 100 lan todo list
        await page.click("//a[@href='03-xpath-todo-list.html']");
        for (let i = 0; i < 5; i++) {
            await page.locator("//input[@id='new-task']").fill('Todo <i>');
            await page.click("//button[@id='add-task']");
        }
        //xoa các dòng todo số lẻ
        const countToDoList = await page.locator('//ul/li').count(); //count dòng
        for (let j = 0; j < countToDoList; j++) { //sử dụng for để chạy số dòng của countToDolist
            if (j % 2 === 1) { //lọc số lẻ j chia 2 khác không / số lẻ
                page.on('dialog', async dialog => dialog.accept());
                await page.click(`button[@'onclick=deleteTask(${j})']`)
            }
        }
    });
});
