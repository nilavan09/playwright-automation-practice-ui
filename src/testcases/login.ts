
import { expect, Page } from '@playwright/test';
import { LoginPage } from '../pages-objects/loginPage';
import { Dashboardpage } from '../pages-objects/dashboardPage'

export class LoginPageCases {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly dashboardPage: Dashboardpage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new Dashboardpage(page);
    }

    async navigateTo() {
        await this.page.goto('https://www.qaplayground.com/bank');
    }

    async successfulLogin(username: string, password: string) {
        await this.login(username, password);
        await this.loginPage.loginButton.click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard');
    }

    async failedLogin(username: string, password: string) {
        await this.login(username, password);
        await this.loginPage.loginButton.click();
        await expect(this.loginPage.errorMessage).toContainText('Invalid username or password. Please try again.');

    }

    async togglePasswordVisibility(password: string) {
        await this.loginPage.password.fill(password);
        await expect(this.loginPage.password).toHaveAttribute('type', 'password');
        await this.loginPage.togglePasswordButton.click();
        await expect(this.loginPage.password).toHaveAttribute('type', 'text');
        await this.loginPage.togglePasswordButton.click();
        await expect(this.loginPage.password).toHaveAttribute('type', 'password');
    }
    async withEnterButton(username: string, password: string) {
        await this.login(username, password);
        await this.loginPage.password.press('Enter');
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard');
    }

    async readOnlyRole() {

        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard');
        await expect(this.dashboardPage.badge).toHaveText('Read-only');


    }


    private async login(username: string, password: string) {
        await this.loginPage.userName.fill(username);
        await this.loginPage.password.fill(password);
    }

};