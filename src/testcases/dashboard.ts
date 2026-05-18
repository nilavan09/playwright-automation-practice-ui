import { Page, expect } from '@playwright/test'
import { Dashboardpage } from '../pages/dashboardPage'
import { Accountpage } from '../pages/accountspage'

export class dashboardpagecases {

    readonly page: Page
    readonly Dashboardpage: Dashboardpage
    readonly Accountpage: Accountpage

    constructor(page: Page) {
        this.page = page
        this.Dashboardpage = new Dashboardpage(page)
        this.Accountpage = new Accountpage(page)

    }

    async navigatetodashboard() {
        await this.Dashboardpage.navdashboard.click()
    }
    async contionerassertion() {
        await expect(this.Dashboardpage.container).toHaveAttribute('data-loading', 'true')
        await this.page.waitForTimeout(300)
        await expect(this.Dashboardpage.container).toHaveAttribute('data-loading', 'false')
    }
    async checkbalance() {
        await expect(this.Dashboardpage.totalbalance).toHaveText('$7,500.00')
    }
    async accountcheck() {
        await expect(this.Dashboardpage.acccountcount).toHaveText('2')
    }

    async totaltrasaction() {
        await expect(this.Dashboardpage.transcount).toHaveText('1')
    }

    async sumofbalance() {
        const currenttotal = await this.Dashboardpage.primaryCurrentAmount.textContent()
        const numerticalvaluecurrent = Number(currenttotal?.replace(/[$,]/g, ''))

        const savingstotal = await this.Dashboardpage.primarySavingsAmount.textContent()
        const numerticalvaluesavings = Number(savingstotal?.replace(/[$,]/g, ''))

        const totalbal = numerticalvaluesavings + numerticalvaluecurrent

        return totalbal
    }

    async totalbalanceassert() {
        const totalbalance = await this.Dashboardpage.totalbalance.textContent()
        const numericvalue = Number(totalbalance?.replace(/[$,]/g, ''))
        expect(await this.sumofbalance()).toBe(numericvalue)
    }

    async addAccountAndVerifyNavigation() {
        await this.Dashboardpage.addaccountbutton.click()
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/accounts?action=add')
    }

    async clickondashboard() {
        await this.Accountpage.closepopup.click()
        await this.Dashboardpage.navdashboard.click()
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/dashboard')
    }

    async addnewtransactionandverify() {
        await this.Dashboardpage.addnewtransactionbutton.click()
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/transactions?action=new')
    }




}
