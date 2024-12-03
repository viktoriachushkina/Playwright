import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://provider.sticklab.click/login');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('alexchurilov20102010@gmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('AlexChurilov20102010');
  await page.getByRole('button', { name: 'Продовжити' }).click();
  await page.getByRole('button', { name: 'Гаразд, я зрозумів!' }).click();
  await page.getByRole('link', { name: 'PayOut' }).click();
 
  await page.getByRole('tab', { name: 'Перегляд (0)' }).click();
  await page.getByRole('tab', { name: 'В роботі (1)' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.locator('select[name="status"]').selectOption('completed');
  await page.locator('#changeStatusModal').getByRole('list').locator('div').click();
  await page.getByRole('button', { name: 'Надіслати' }).click();
  await page.getByRole('img', { name: 'metronic' }).click();
  await page.getByText('Вийти з системи').click();

});
