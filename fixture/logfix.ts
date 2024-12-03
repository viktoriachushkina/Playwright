import { test as base, expect } from '@playwright/test';

// Расширяем тест для создания кастомной фикстуры `userGaragePage`
export const test = base.extend<{
  userGaragePage: any;
}>({
  userGaragePage: async ({ page }, use) => {
    // Авторизация и сохранение состояния
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByLabel('Email').fill('vika@test.test');
    await page.getByLabel('Password').fill('Test1234567890');
    await page.locator('//button[text()="Login"]').click();

    // Сохраняем состояние страницы
    await use(page);
  },
});