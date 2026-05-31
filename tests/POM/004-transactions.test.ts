import { expect, test } from '../../fixture/landingpage'
import { adminpassword, adminusername } from '../../roles/roles'
import { DashboardPageCases } from '../../src/testcases/dashboard'
import { AccountPageCases } from '../../src/testcases/accounts'
import { TransactionPageCases } from '../../src/testcases/transaction'

/**
TC-TXN-01:Create a deposit transaction and verify balance update
1.Log in as admin and navigate to /bank/accounts — note the balance of 'Primary Savings'
2.Navigate to /bank/transactions
3.Click 'New Transaction': data-testid='new-transaction-button'
4.Assert the transaction modal is open: data-testid='account-modal'
5.Select 'Deposit' as the transaction type
6.Select 'Primary Savings' as the account: data-testid='from-account-select'
7.Enter '500' in the Amount field and click Submit
8.Assert a success toast appears and the new transaction row appears in the table
9.Navigate back to /bank/accounts and assert Primary Savings balance increased by $500
*/
test('TC-TXN-01:Create a deposit transaction and verify balance update', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    const transactionpage = new TransactionPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await accountpage.navigationToAccountPage();
    await transactionpage.saveInitialBalance()
    await transactionpage.navigationToTransactionPage();
    await dash.navigateToDashboard()
    await dash.addNewTransactionAndVerify()
    await transactionpage.fillTransactionForm()
    await accountpage.navigationToAccountPage();
    await transactionpage.primaryAccountBalanceAssertion()
});

/**
TC-TXN-02:Filter transactions by account and verify only matching rows appear
1.Log in as admin and navigate to /bank/transactions
2.Note the total transaction count in data-testid='transactions-tbody'
3.Open the Account filter: data-testid='filter-account-select'
4.Select a specific account (e.g., 'Primary Savings')
5.Click Apply Filters: data-testid='apply-filters-button'
6.Assert every row in the table shows 'Primary Savings' in the Account column
7.Click Reset: data-testid='reset-filters-button' and assert all rows return
 */

test('TC-TXN-02:Filter transactions by account and verify only matching rows appear', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const transactionpage = new TransactionPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await transactionpage.navigationToTransactionPage();
    await transactionpage.saveIntialTransactionCount();
    await dash.navigateToDashboard()
    await dash.addNewTransactionAndVerify()
    await transactionpage.fillTransactionForm()
    //await transactionpage.navigationToTransactionPage();
    await transactionpage.accountFilterSelection();
    await transactionpage.transactionAccouuntRowAssertion();
    await transactionpage.filterAssertionAfterReset();

});

/**
TC-TXN-03:Export transactions as CSV and verify file is downloaded
1.Log in as admin and navigate to /bank/transactions with at least one transaction present
2.Click the Export button: data-testid='export-button' or aria-label='Export transactions as CSV'
3.Assert a success toast 'Transactions exported successfully!' appears
4.Verify the browser triggers a file download with a .csv extension
5.Navigate to /bank/transactions when no transactions exist (reset data)
6.Click Export and assert a toast error 'No transactions to export' appears
 */
test('TC-TXN-03:Export transactions as CSV and verify file is downloaded', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const transactionpage = new TransactionPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await transactionpage.navigationToTransactionPage();
    await transactionpage.downloadAndAssertDownloaded();

});

/**
TC-TXN-04:Open transaction detail page and verify all fields via breadcrumb navigation
1.Log in as admin and navigate to /bank/transactions
2.Click a Transaction ID link in the table: data-testid='transaction-id-link'
3.Assert the URL changes to /bank/transactions/{id}
4.Assert the breadcrumb: data-testid='breadcrumb-item-1' = 'Dashboard', data-testid='breadcrumb-item-2' = 'Transactions'
5.Assert the transaction type, amount, date, account, balance-after, and status are all visible
6.Click the Back button: data-testid='back-button'
7.Assert the browser navigates back to /bank/transactions
 */

test('TC-TXN-04:Open transaction detail page and verify all fields via breadcrumb navigation', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const transactionpage = new TransactionPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await transactionpage.navigationToTransactionPage();
    await transactionpage.transactionIDLinkAndAssertions();
    await transactionpage.navigateBackFromTransactionPage();


});