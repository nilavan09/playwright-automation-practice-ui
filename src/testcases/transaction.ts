import { expect, Page } from '@playwright/test';
import {TransactionPage} from '../pages-objects/transactionpage'
import {Accountpage} from '../pages-objects/accountspage'

export class TransactionPageCases {

    readonly page: Page;
    readonly transactionPage: TransactionPage;
    readonly AccountpageLocators:Accountpage;

    primaryBalance: number = 0;

    constructor(page: Page) {
        this.page = page;
        this.transactionPage = new TransactionPage(page);
        this.AccountpageLocators = new Accountpage(page);

    }

    async primaryAccountBalance(){
        const val = await this.AccountpageLocators.accountBalance.nth(1).allTextContents()
        //this.primaryBalance = val.map(v=>Number(v.replace(/[$,]/g,'')));
        this.primaryBalance = Number(val[0].replace(/[$,]/g, ''));
        //console.log(this.primaryBalance)
        return this.primaryBalance 
        
    }

    async navigationToTransactionPage(){
        await this.transactionPage.transactionPageNav.click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/transactions');
    }



}