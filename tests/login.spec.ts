import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Constants
const VALID_USERNAME = 'student';
const VALID_PASSWORD = 'Password123';
const INVALID_USERNAME = 'wrongUsername';
const INVALID_PASSWORD = 'invalidPassword';
const ERROR_INVALID_USERNAME = 'Your username is invalid!';
const ERROR_INVALID_PASSWORD = 'Your password is invalid!';
const SUCCESS_MESSAGE = 'Congratulations student. You successfully logged in!';
const SUCCESS_PAGE_TITLE = 'Logged In Successfully';
const EMPTY_STRING = '';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test('User Successfully Login with Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
  await expect(page.getByRole('heading')).toContainText(SUCCESS_PAGE_TITLE);
  await expect(page.getByRole('strong')).toContainText(SUCCESS_MESSAGE);

  await loginPage.logout();
  await expect(loginPage.headerLogin).toContainText('Test login');
});

test('User Failed Login with Invalid Username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(INVALID_USERNAME, VALID_PASSWORD);
  await expect(loginPage.errorSnackbar).toContainText(ERROR_INVALID_USERNAME);
});

test('User Failed Login with Invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(VALID_USERNAME, INVALID_PASSWORD);
  await expect(loginPage.errorSnackbar).toContainText(ERROR_INVALID_PASSWORD);
});

test('User Failed Login when Username and Password Empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(EMPTY_STRING, EMPTY_STRING);
  await expect(loginPage.errorSnackbar).toContainText(ERROR_INVALID_USERNAME);
});

test('User Failed Login when Username Empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(EMPTY_STRING, INVALID_PASSWORD);
  await expect(loginPage.errorSnackbar).toContainText(ERROR_INVALID_USERNAME);
});

test('User Failed Login when Password Empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(VALID_USERNAME, EMPTY_STRING);
  await expect(loginPage.errorSnackbar).toContainText(ERROR_INVALID_PASSWORD);
});
