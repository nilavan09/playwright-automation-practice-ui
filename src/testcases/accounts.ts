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

        expect(accountPageRowCount).toBe(2);
        expect(accountPageRowCount).toBe(dashboardAccountCount);

    }


}