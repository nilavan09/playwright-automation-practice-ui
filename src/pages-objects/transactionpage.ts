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
    readonly transactionBody:Locator;
    readonly accountFilter:Locator;
    readonly accountFilterSelection:Locator;
    readonly applyButton:Locator;
    readonly accountRows:Locator;
    readonly balanceAfter:Locator;
    readonly exportExcel:Locator;

    
    



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
        this.transactionBody = page.getByTestId('transaction-row');
        this.accountFilter = page.getByTestId('filter-account-select');
        this.accountFilterSelection = page.getByRole('option',{name:"Primary Savings"});
        this.applyButton = page.getByTestId('apply-filters-button');
        this.accountRows = page.getByTestId('transaction-account');
        this.balanceAfter = page.getByTestId('balance-after');
        this.exportExcel = page.getByTestId('export-button');


    }

};