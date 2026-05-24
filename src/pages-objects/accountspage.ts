import { Page, Locator } from '@playwright/test'

export class Accountpage {
    readonly page: Page;
    readonly rows: Locator;
    readonly navToAccounts: Locator;
    readonly closePopup: Locator;
    readonly accountNameInput: Locator;
    readonly accountTypeDropdown: Locator;
    readonly accountTypeDropdownSelect: Locator
    readonly intialBalanceInput: Locator;
    readonly statusButton: Locator;
    readonly saveButton: Locator;
    readonly toastMessage: Locator;
    readonly totalAccountCount: Locator;
    readonly editButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.rows = page.locator('[data-testid^="account-row-"]');
        this.navToAccounts = page.getByTestId('nav-accounts');
        this.closePopup = page.getByRole('button', { name: 'Close' });
        this.accountNameInput = page.getByTestId('account-name-input');
        this.accountTypeDropdown = page.getByTestId('account-type-select');
        this.accountTypeDropdownSelect = page.getByRole('option', { name: 'Savings Account' });
        this.intialBalanceInput = page.getByTestId('initial-balance-input');
        this.statusButton = page.getByTestId('status-active-radio');
        this.saveButton = page.getByTestId('save-account-button');
        this.toastMessage = page.locator('li[data-sonner-toast]');
        this.totalAccountCount = page.getByTestId('summary-total-accounts');
        this.editButton = this.rows.first().getByRole('button',{name:"Edit"})

    }


};