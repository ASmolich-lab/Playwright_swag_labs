import { expect, Expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe.parallel('Inventory tests', () => {
  let loginPage: LoginPage
  let inventoryPage: InventoryPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    await loginPage.goto()
    // await loginPage.login('standard_user', 'secret_sauce')
    await loginPage.loginAsStandartUser()
  })

  test('Inventory has items', async ({ page }) => {
    await expect(inventoryPage.inventoryItem).toHaveCount(6)
  })
})
