import { Locator, Page } from '@playwright/test';


export class TransactionPage {

    readonly page: Page;
    readonly transactionPageNav:Locator;
    
    



    constructor(page: Page) {
        this.page = page;
        this.transactionPageNav = page.getByTestId('nav-transactions');
        
        

    }

};