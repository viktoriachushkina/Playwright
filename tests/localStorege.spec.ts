import { test, expect } from '@playwright/test';

test.describe('Test with localStor', () =>{

    test.beforeEach(async ({page}) => {

        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('vika@test.test');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('Test1234567890');
        await page.locator('//button[text()="Login"]').click();

    // Сохранение данных из localStorage
const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));

// Добавление скрипта для восстановления localStorage
await page.addInitScript((storage) => {
    Object.entries(JSON.parse(storage) as Record<string, string>).forEach(([key, value]) => {
        window.localStorage.setItem(key, value);
    });
}, localStorage);


});
    


    test ( "Local Stor add", async ({page}) => {
          await page.goto('https://qauto.forstudy.space/panel/garage');
         

        });

   
});