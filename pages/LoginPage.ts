import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly errorSnackbar: Locator;
  readonly fieldUsername: Locator;
  readonly fieldPassword: Locator;
  readonly buttonSubmit: Locator;
  readonly headerLogin: Locator;
  readonly buttonLogout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorSnackbar = page.locator('#error');
    this.fieldUsername = page.getByRole('textbox', { name: 'Username' });
    this.fieldPassword = page.getByRole('textbox', { name: 'Password' });
    this.buttonSubmit = page.getByRole('button', { name: 'Submit' });
    this.headerLogin = page.getByRole('heading', { name: 'Test login' });
    this.buttonLogout = page.getByRole('link', { name: 'Log out' });
  }

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.fieldUsername.fill(username);
    await this.fieldPassword.fill(password);
    await this.buttonSubmit.click();
  }

  async logout() {
    await this.buttonLogout.click();
  }
}
