import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page_objects/registrationPage';

test('Positive Registration Test', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const uniqueEmail = `aqa-${Date.now()}@test.com`;

  await registrationPage.navigateToRegistrationPage();


  await registrationPage.fillRegistrationForm('vikatest', 'vikatest', uniqueEmail, 'Test1234567890');

  await registrationPage.submitRegistration();

  const userDropdown = page.locator('#userNavDropdown');
  await expect(userDropdown).toBeVisible();

});
test('Negativ Name Test', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = `aqa-${Date.now()}@test.com`;
  
    await registrationPage.navigateToRegistrationPage();
  
    await registrationPage.fillRegistrationForm('....', 'vikatest', uniqueEmail, 'Test1234567890');
  
  });

  test('Last wrong Name', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const uniqueEmail = `aqa-${Date.now()}@test.com`;
  
    await registrationPage.navigateToRegistrationPage();
  
    await registrationPage.fillRegistrationForm('vikatest', 'Last name is invalid', uniqueEmail, 'Test1234567890');
  
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
 