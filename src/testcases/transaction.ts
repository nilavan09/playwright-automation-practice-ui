import { expect, Page } from '@playwright/test';
import {TransactionPage} from '../pages-objects/transactionpage'

export class TransactionPageCases {

    readonly page: Page;
    readonly transactionPage: TransactionPage;
    

    constructor(page: Page) {
        this.page = page;
        this.transactionPage = new TransactionPage(page);

    }



}