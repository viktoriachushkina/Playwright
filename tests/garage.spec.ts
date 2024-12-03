import { test, expect } from '../fixture/fixtures'; 
test.describe('Garage Page Tests', () => {
    test('Test6. Verify user can see Garage page after login', async ({ userGaragePage }) => {
        userGaragePage.navigateToGarage()
        await expect(userGaragePage.page).toHaveURL('https://qauto.forstudy.space/panel/garage');
        await expect(userGaragePage.page.locator('h1')).toHaveText('Garage');

        const brand = 'Audi';
        const model = 'TT';
        await userGaragePage.addCar(brand, model, '1000');
        const mileage = '1000'
        await userGaragePage.addCar(brand, model, mileage);

        const isCarVisible = await userGaragePage.isCarVisible(brand, model);
        expect(isCarVisible).toBeTruthy();
    });
});