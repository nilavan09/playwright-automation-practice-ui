// import { expect, test } from '@playwright/test'
import { expect, test } from '../../fixture/landingpage'
import { adminpassword, adminusername } from '../../roles/roles'
import { DashboardPageCases } from '../../src/testcases/dashboard'
import { AccountPageCases } from '../../src/testcases/accounts'

/**
TC-ACC-01:Create a new account using the 3-step Open Account wizard
1.Log in as admin and navigate to /bank/accounts
2.Click 'Add Account': - Dashboard Page.
3.Fill all required field.
4.Assert all filed fields.
5.Click the Save Account Button and assert the toast message.
7.Verify that total accounts count on account page.
*/
test('TC-ACC-01:Create a new account using the 3-step Open Account wizard', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await dash.addAccountAndVerifyNavigation();
    await accountpage.fillAllFields();
    await accountpage.assertFilledFields();
    await accountpage.ClickOnSaveAndAssert();
    await accountpage.TotalAccountCountAssertion();
    


});

/**
TC-ACC-02:Edit account name inline by double-clicking the name cell
1.Log in as admin and navigate to /bank/accounts (wait for table to load)
2.Click edit on recently created account.
3.Edit account name.
4.Save the account after edit.
5.Assert the toast message after save.
 */
test('TC-ACC-02:Edit account name inline by double-clicking the name cell', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await accountpage.createAcccount();
    await accountpage.editButtonAccount();
    await accountpage.editValuesAndSave();
});

/**
TC-ACC-03:Delete an account with confirmation and verify it is removed
1.Log in as admin and navigate to /bank/accounts (wait for table to load)
2.Click Delete on recently created account.
3.Confirm the delete by clicking yes button.
4.Assert the toast message after save.
 */
test('TC-ACC-03:Delete an account with confirmation and verify it is removed', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await accountpage.createAcccount();
    await accountpage.deleteAccount()
    await accountpage.confirmDeleteAndAssert()

    
});

/**
TC-ACC-04:Filter accounts by account type
1.Log in as admin and navigate to /bank/accounts
2.Note the total number of rows in data-testid='accounts-tbody'
3.Open the Account Type filter: data-testid='filter-type-select'
4.Select 'Savings' from the dropdown
5.Assert all visible rows have a Type badge showing 'Savings'
6.Assert no row shows 'Checking' or 'Credit' in the type badge
7.Click Reset Filters: data-testid='reset-filters-button'
8.Assert the row count returns to the original total
 */
test('TC-ACC-04:Filter accounts by account type', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await accountpage.createAcccount();
    await accountpage.accountRowCount()
    await accountpage.filterAccount();
    await accountpage.rowBadgeAssertions();
    await accountpage.filterReset();
    await accountpage.rowCountAssertionAfterReset();
    
});