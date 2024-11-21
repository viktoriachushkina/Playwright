// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config({
  path: `.env`, // Убедитесь, что указываете путь к существующему файлу
});


/**
 * Playwright Configuration
 * https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  /* Директория с тестами */
  testDir: './tests',
  /* Параллельный запуск тестов */
  fullyParallel: true,
  /* Защитный механизм для CI, запрещающий использование test.only */
  forbidOnly: !!process.env.CI,
  /* Повторение тестов на CI в случае неудачи */
  retries: process.env.CI ? 2 : 0,
  /* Количество воркеров на CI */
  workers: process.env.CI ? 1 : undefined,
  /* Репортер для отображения результатов */
  reporter: 'html',
  /* Базовые настройки для всех проектов */
  use: {
    actionTimeout: 70_000, // Таймаут для действий
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    // URL для вашего тестового приложения
   
    trace: 'on-first-retry', // Сбор трассы при первой ошибке
  },

  /* Настройка проектов для разных браузеров */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Дополнительные проекты можно добавить здесь
  ],

  /* Настройка локального dev-сервера перед запуском тестов */
  webServer: process.env.CI
    ? {
        command: 'npm run start',
        url: process.env.BASE_URL,
        reuseExistingServer: true,
      }
    : undefined,
});
