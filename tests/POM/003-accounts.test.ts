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
6.Navigate to dashboard page.
7.Verify that account is reflecting in the Your Bank Accounts Section.
8.Assert data-testid='total-balance-card' is visible and contains a dollar amount
9.Assert data-testid='accounts-count-card' is visible with a numeric value
10.Assert data-testid='transactions-count-card' is visible with a numeric value
*/
test('TC-ACC-01:Create a new account using the 3-step Open Account wizard', async ({ Landingpage, page }) => {
    const dash = new DashboardPageCases(page);
    const accountpage = new AccountPageCases(page);
    await Landingpage.successfulLogin(adminusername, adminpassword);
    await dash.addAccountAndVerifyNavigation();
    await accountpage.fillAllFields();
    await accountpage.assertFilledFields();
    await accountpage.ClickOnSaveAndAssert();

});