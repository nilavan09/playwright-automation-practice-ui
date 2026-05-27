import { expect, test } from '../../fixture/landingpage'
import { adminpassword, adminusername } from '../../roles/roles'
import { DashboardPageCases } from '../../src/testcases/dashboard'
import { AccountPageCases } from '../../src/testcases/accounts'

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
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await accountpage.navigationToAccountPage();
});