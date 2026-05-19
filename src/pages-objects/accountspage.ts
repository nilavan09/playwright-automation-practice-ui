import { Page, Locator } from '@playwright/test'

export class Accountpage {
    readonly page: Page;
    readonly rows: Locator;
    readonly navToAccounts: Locator;
    readonly closePopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rows = page.locator('[data-testid^="account-row-"]');
        this.navToAccounts = page.getByTestId('nav-accounts');
        this.closePopup = page.getByRole('button', { name: 'Close' });

    }


};