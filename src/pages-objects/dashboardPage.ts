import { Page, Locator } from '@playwright/test'

export class Dashboardpage {
    readonly page: Page;
    readonly badge: Locator
    readonly container: Locator
    readonly totalbalance: Locator
    readonly acccountcount: Locator
    readonly transcount: Locator
    readonly primarySavingsAmount: Locator
    readonly primaryCurrentAmount: Locator
    readonly navdashboard: Locator
    readonly addaccountbutton: Locator
    readonly addnewtransactionbutton: Locator
    readonly recenttransactiontable: Locator
    readonly recenttransactioncount: Locator
    readonly datecolumn: Locator
    readonly typecolumn: Locator
    readonly accountcolumn: Locator
    readonly amountcolumn: Locator
    readonly statuscolumn: Locator

    constructor(page: Page) {
        this.page = page
        this.badge = page.getByTestId('viewer-badge')
        this.container = page.locator('#dashboard-page-container')
        this.totalbalance = page.getByTestId('total-balance')
        this.acccountcount = page.getByTestId('accounts-count')
        this.transcount = page.getByTestId('transactions-count')
        this.primarySavingsAmount = page.locator("#accounts-list  ").locator('p[id^="account-balance-id_"]').first()
        this.primaryCurrentAmount = page.locator("#accounts-list  ").locator('p[id^="account-balance-id_"]').nth(1)
        this.navdashboard = page.getByTestId('nav-dashboard')
        this.addaccountbutton = page.getByTestId('quick-add-account')
        this.addnewtransactionbutton = page.getByTestId('quick-new-transaction')
        this.recenttransactiontable = page.getByTestId('recent-transactions-table')
        this.recenttransactioncount = page.getByTestId('transactions-tbody')
        this.datecolumn = page.locator('//tbody//td').first()
        this.typecolumn = page.locator('//tbody//td').nth(1)
        this.accountcolumn = page.locator('//tbody//td').nth(2)
        this.amountcolumn = page.locator('//tbody//td').nth(3)
        this.statuscolumn = page.locator('//tbody//td').nth(4)


    }

}