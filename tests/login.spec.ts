import { test, expect } from '@playwright/test'
import { LoginPage } from '@pages/LoginPage'
import { InventoryPage } from '@pages/InventoryPage'

test.describe.parallel('Login tests', () => {
  let loginPage: LoginPage
  let inventoryPage: InventoryPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.goto()
  })

  test('Logo is rendered', async ({ page }) => {
    await expect(loginPage.logo).toContainText('Swag Labs')
  })

  test('Empty fields', async ({ page }) => {
    await loginPage.login('', '')
    await expect(loginPage.error).toContainText(
      'Epic sadface: Username is required',
    )
  })

  test('Empty User Name', async ({ page }) => {
    await loginPage.login('', 'password')
    await expect(loginPage.error).toContainText(
      'Epic sadface: Username is required',
    )
  })

  test('Empty Password', async ({ page }) => {
    await loginPage.login('username', '')
    await expect(loginPage.error).toContainText(
      'Epic sadface: Password is required',
    )
  })

  test('Incorrect Password', async ({ page }) => {
    await loginPage.login('standard_user', 'invalid')
    await expect(loginPage.error).toContainText(
      'Epic sadface: Username and password do not match any user in this service',
    )
  })

  test('Valid Login', async ({ page }) => {
    inventoryPage = new InventoryPage(page)
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(inventoryPage.title).toContainText('Products')
  })
})
