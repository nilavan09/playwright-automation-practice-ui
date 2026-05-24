import { expect, Locator, Page } from '@playwright/test'
import { Accountpage } from '../pages-objects/accountspage'
import { Dashboardpage } from '../pages-objects/dashboardPage'
import { table } from 'node:console'

export class AccountPageCases {
    page: Page;
    accountPage: Accountpage;
    dashboard: Dashboardpage;


    constructor(page: Page) {

        this.page = page;
        this.accountPage = new Accountpage(page);
        this.dashboard = new Dashboardpage(page);

    }

    async navigationToAccountPage() {
        await this.accountPage.navToAccounts.click();
        await this.accountPage.rows.first().waitFor();
    }

    async accountRowCount(): Promise<number> {
        return await this.accountPage.rows.count();

    }

    async dashboardAccountsCount(): Promise<number> {
        await expect(this.dashboard.accountCount).toHaveText('2');
        const val = await this.dashboard.accountCount.textContent();
        return Number(val);
    }
    async accountCountAssertion() {
        const accountPageRowCount = await this.accountRowCount();
        const dashboardAccountCount = await this.dashboardAccountsCount();

        expect(accountPageRowCount).toEqual(2);
        expect(accountPageRowCount).toBe(dashboardAccountCount);

    }

    async fillAllFields() {
        await this.accountPage.accountNameInput.fill('001-Test Account');
        await this.accountPage.accountTypeDropdown.click();
        await this.accountPage.accountTypeDropdownSelect.click();
        await this.accountPage.intialBalanceInput.fill('5000');

    }

    async assertFilledFields() {
        await expect(this.accountPage.accountNameInput).toHaveValue('001-Test Account');
        await expect(this.accountPage.accountTypeDropdown).toHaveText('Savings Account');
        await expect(this.accountPage.intialBalanceInput).toHaveValue('5000');
        await expect(this.accountPage.statusButton).toBeChecked();

    }

    async ClickOnSaveAndAssert() {
        await this.accountPage.saveButton.click();
        const value = await this.accountPage.toastMessage.textContent();
        //console.log(value)
        expect(value).toBe('Account created successfully!');
        await expect (this.accountPage.toastMessage).not.toBeVisible();
    }

    async TotalAccountCountAssertion() {
        const accountCount = Number(await this.accountPage.totalAccountCount.textContent());
        expect(accountCount).toBe(3);

    }

    async editButtonAccount(){
        await this.accountPage.editButton.click();
    }

    async editValuesAndSave(){
        //await this.page.waitForTimeout(300)
        await this.accountPage.accountNameInput.fill('001-Edited Account');
        await this.accountPage.saveButton.click();
        const value = await this.accountPage.toastMessage.textContent();
        //console.log(value)
        expect(value).toBe('Account updated successfully!');
    }






}