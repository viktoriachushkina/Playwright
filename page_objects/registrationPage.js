// page_objects/registrationPage.js
export class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.signInButton = page.getByRole('button', { name: 'Sign In' });
      this.registrationButton = page.getByRole('button', { name: 'Registration' });
      this.nameInput = page.locator('#signupName');
      this.lastNameInput = page.locator('#signupLastName');
      this.emailInput = page.getByLabel('Name');
      this.passwordInput = page.locator('#signupPassword');
      this.reenterPasswordInput = page.getByLabel('Re-enter password');
      this.registerButton = page.getByRole('button', { name: 'Register' });
    }
  
    async navigateToRegistrationPage() {
      console.log('Navigating to:', process.env.BASE_URL);
      if (!process.env.BASE_URL) {
        throw new Error('BASE_URL is not defined in environment variables.');
      }
      await this.page.goto(process.env.BASE_URL);
      await this.signInButton.click();
      await this.registrationButton.click();
    }
    
    
  
    async fillRegistrationForm(name, lastName, email, password) {
      await this.nameInput.waitFor({ state: 'visible' });
      await this.nameInput.fill(name);
      await this.lastNameInput.fill(lastName);
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.reenterPasswordInput.fill(password);
    }
  
    async submitRegistration() {
      await this.registerButton.click();
    }
  }
  