import { Locator, Page } from '@playwright/test';


export class TransactionPage {

    readonly page: Page;
    readonly transactionPageNav:Locator;
    readonly transactionType:Locator;
    readonly transactionFromAccountSelect:Locator;
    readonly transactionFromAccountSelectValue:Locator;
    readonly transactionAmmount:Locator;
    readonly transactionSaveButton:Locator;
    readonly transactionToast:Locator;
    readonly transactionTypeSelect:Locator;
    
    



    constructor(page: Page) {
        this.page = page;
        this.transactionPageNav = page.getByTestId('nav-transactions');
        this.transactionType = page.getByTestId('transaction-type-select');
        this.transactionFromAccountSelect = page.getByTestId('from-account-select');
        this.transactionAmmount = page.getByTestId('transaction-amount-input');
        this.transactionSaveButton = page.getByTestId('submit-transaction-button');
        this.transactionToast = page.locator('li[data-sonner-toast]');
        this.transactionTypeSelect = page.getByRole('option',{name:'Deposit'});
        this.transactionFromAccountSelectValue = page.getByRole('option',{name:'Primary Savings'});



    }

};