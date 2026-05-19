import { expect, Locator, Page } from '@playwright/test'
import { Accountpage } from '../pages-objects/accountspage'
import { Dashboardpage } from '../pages-objects/dashboardPage'
import { table } from 'node:console'

export class Accountpagecases {
    page: Page
    accountpage: Accountpage
    dashboard: Dashboardpage


    constructor(page: Page) {
        this.page = page
        this.accountpage = new Accountpage(page)
        this.dashboard = new Dashboardpage(page)

    }

    async navigationtoaccountpage() {
        await this.accountpage.navtoaccounts.click()
        await this.accountpage.rows.first().waitFor()
    }

    async accountrowcount(): Promise<number> {
        return await this.accountpage.rows.count()

    }

    async dashboardaccountscount(): Promise<number> {
        await expect(this.dashboard.acccountcount).toHaveText('2')
        const val = await this.dashboard.acccountcount.textContent()
        return Number(val)
    }
    async accountcountassertion() {
        const accountpagerowcount = await this.accountrowcount()
        const dashnoardacccountcount = await this.dashboardaccountscount()

        expect(accountpagerowcount).toBe(2)
        expect(accountpagerowcount).toBe(dashnoardacccountcount)

    }


}