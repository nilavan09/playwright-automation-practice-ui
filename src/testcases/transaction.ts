import { expect, Page } from '@playwright/test';
import {TransactionPage} from '../pages-objects/transactionpage'
import {Accountpage} from '../pages-objects/accountspage'

export class TransactionPageCases {

    readonly page: Page;
    readonly transactionPage: TransactionPage;
    readonly AccountpageLocators:Accountpage;

    initialBalance: number = 0;

    constructor(page: Page) {
        this.page = page;
        this.transactionPage = new TransactionPage(page);
        this.AccountpageLocators = new Accountpage(page);

    }

    async primaryAccountBalance(){
        const val = await this.AccountpageLocators.accountBalance.nth(1).allTextContents()
        //this.primaryBalance = val.map(v=>Number(v.replace(/[$,]/g,'')));
         return Number(val[0].replace(/[$,]/g, ''));
        
        
    }

    async saveInitialBalance() {
        this.initialBalance = await this.primaryAccountBalance();
        console.log('initialBalance:', this.initialBalance);
    }

    async navigationToTransactionPage(){
        await this.transactionPage.transactionPageNav.click();
        await expect(this.page).toHaveURL('https://qaplayground.com/bank/transactions');
    }

    async fillTransactionForm(){
        await this.transactionPage.transactionType.click();
        await this.transactionPage.transactionTypeSelect.click();
        await this.transactionPage.transactionFromAccountSelect.click();
        await this.transactionPage.transactionFromAccountSelectValue.click();
        await this.transactionPage.transactionAmmount.fill('500');
        await this.transactionPage.transactionSaveButton.click();

    }

    async primaryAccountBalanceAssertion(){

        const newBalance =await this.primaryAccountBalance()
        expect(newBalance).toBe(this.initialBalance + 500)
        console.log('newBalance:', newBalance);
    }

}