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
    await dash.addAccountAndVerifyNavigation();
    await accountpage.fillAllFields();
    await accountpage.assertFilledFields();
    await accountpage.ClickOnSaveAndAssert();
    await accountpage.TotalAccountCountAssertion();
    await accountpage.editButtonAccount();
    await accountpage.editValuesAndSave();
});