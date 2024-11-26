import { test, expect } from '@playwright/test';

test('positiv', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Registration' }).click();
  await page.locator('#signupName').click();
  await page.locator('#signupName').fill('vikatest');
  await page.locator('#signupLastName').click();
  await page.locator('#signupLastName').fill('vikatest');
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('vika@test.com');
  await page.locator('#signupPassword').click();
  await page.locator('#signupPassword').fill('Test1234567890');  
  await page.getByLabel('Re-enter password').click();
  await page.getByLabel('Re-enter password').fill('Test1234567890');
  await page.getByRole('button', { name: 'Register' }).click();


});

test('negativName', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Registration' }).click();
  await page.locator('#signupName').click();
  await page.locator('#signupName').fill('pypi');
  await page.locator('#signupLastName').click();
  await page.locator('#signupLastName').fill('pypi');
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('....');
  await page.locator('#signupPassword').click();
  await page.locator('#signupPassword').fill('Test1234567890');  
  await page.getByLabel('Re-enter password').click();
  await page.getByLabel('Re-enter password').fill('Test1234567890');
 
});
test('LastwrongName', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
    await page.locator('#signupName').click();
    await page.locator('#signupName').fill('vikatest');
    await page.locator('#signupLastName').click();
    await page.locator('#signupLastName').fill('Last name is invalid');
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('vika@test.com');
    await page.locator('#signupPassword').click();
    await page.locator('#signupPassword').fill('Test1234567890');  
    await page.getByLabel('Re-enter password').click();
    await page.getByLabel('Re-enter password').fill('Test1234567890');
    
  });
  test('emailwrong', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
    await page.locator('#signupName').click();
    await page.locator('#signupName').fill('vikatest');
    await page.locator('#signupLastName').click();
    await page.locator('#signupLastName').fill('vikatest');
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('Email is invalid');
    await page.locator('#signupPassword').click();
    await page.locator('#signupPassword').fill('Test1234567890');  
    await page.getByLabel('Re-enter password').click();
    await page.getByLabel('Re-enter password').fill('Test1234567890');
  });
  test('wrongpass', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
    await page.locator('#signupName').click();
    await page.locator('#signupName').fill('vikatest');
    await page.locator('#signupLastName').click();
    await page.locator('#signupLastName').fill('vikatest');
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('vika@test.com');
    await page.locator('#signupPassword').click();
    await page.locator('#signupPassword').fill('0');  
    await page.getByLabel('Re-enter password').click();
    await page.getByLabel('Re-enter password').fill('Test1234567890');
    await page.getByRole('button', { name: 'Register' }).click();

  });

test('wrongREpass', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
    await page.locator('#signupName').click();
    await page.locator('#signupName').fill('vikatest');
    await page.locator('#signupLastName').click();
    await page.locator('#signupLastName').fill('vikatest');
    await page.getByLabel('Name').click();
    await page.getByLabel('Name').fill('vika@test.com');
    await page.locator('#signupPassword').click();
    await page.locator('#signupPassword').fill('Test1234567890');  
    await page.getByLabel('Re-enter password').click();
    await page.getByLabel('Re-enter password').fill('Test123456');
   
  });