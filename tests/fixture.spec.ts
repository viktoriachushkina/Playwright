import { test as base, expect } from '@playwright/test';

// Расширяем тест для создания кастомной фикстуры `userGaragePage`
const test = base.extend<{
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

// Используем `test.describe` для объединения тестов
test.describe('Garage Page Tests with Fixture', () => {
  // Первый тест - проверка доступа к странице Garage
  test('Navigate to Garage Page', async ({ userGaragePage }) => {
    console.log('Navigating to /panel/garage');
    await userGaragePage.goto('https://qauto.forstudy.space/panel/garage');
    console.log('Checking the URL...');
    await expect(userGaragePage).toHaveURL('https://qauto.forstudy.space/panel/garage');
  });

  // Второй тест - добавление машины в гараж
  test('Add Car to Garage', async ({ userGaragePage }) => {
    await userGaragePage.goto('https://qauto.forstudy.space/panel/garage');

    // Клик по кнопке "Add car"
    await userGaragePage.locator('button.btn.btn-primary').click();

    // Заполнение пробега
    await userGaragePage.locator('input#addCarMileage').fill('999');

    // Клик по кнопке "Add"
    await userGaragePage.locator('button.btn.btn-primary:has-text("Add")').click();

    // Проверка, что машина успешно добавлена
    const addedCar = await userGaragePage.locator('//tr[contains(., "999")]');
    await expect(addedCar).toBeVisible();
  });
});
