import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page_objects/registrationPage';

test('Positive Registration Test', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const uniqueEmail = process.env.USERNAME;
  await registrationPage.navigateToRegistrationPage();
  await registrationPage.fillRegistrationForm('vikatest', 'vikatest', uniqueEmail, process.env.PASSWORD);
  await registrationPage.submitRegistration();
  const userDropdown = page.locator('#userNavDropdown');
  await expect(userDropdown).toBeVisible({ timeout: 10000 }); // Увеличьте до 10 секунд


});
test('Negativ Name Test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = process.env.USERNAME;

    await registrationPage.navigateToRegistrationPage();
    await registrationPage.fillRegistrationForm('....', 'vikatest', uniqueEmail, process.env.PASSWORD);
  
  });

  test('Last wrong Name', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = process.env.USERNAME;
  
    await registrationPage.navigateToRegistrationPage();
    await registrationPage.fillRegistrationForm('vikatest', 'Last name is invalid', uniqueEmail, process.env.PASSWORD);
  
  });
  

  test('Email Wrong Test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    
    await registrationPage.navigateToRegistrationPage();
    await registrationPage.fillRegistrationForm('vikatest', 'vikatest', 'Email is invalid', 'Test1234567890');
    
  });
  

  test('Wrong Pass Test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = `aqa-${Date.now()}@test.com`;
  
    await registrationPage.navigateToRegistrationPage();
    await registrationPage.fillRegistrationForm('vikatest', 'vikatest', uniqueEmail, '0');

  });
 