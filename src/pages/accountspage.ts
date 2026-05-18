import { Page, Locator } from '@playwright/test'

export class Accountpage {
    readonly page: Page;
    readonly rows: Locator
    readonly navtoaccounts: Locator
    readonly closepopup: Locator

    constructor(page: Page) {
        this.page = page
        this.rows = page.locator('[data-testid^="account-row-"]')
        this.navtoaccounts = page.getByTestId('nav-accounts')
        this.closepopup = page.getByRole('button', { name: 'Close' })

    }


}