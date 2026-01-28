import { test, Expect, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/cartPage'

test.describe.parallel('Checkout tests', () => {
  let loginPage: LoginPage
  let inventoryPage: InventoryPage
  let cartPage: CartPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    loginPage.goto()
    loginPage.loginAsStandartUser()
  })

  test('e2e-checkout', async ({ page }) => {
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)

    // adding to cart
    const itemName = 'Sauce Labs Fleece Jacket'
    await inventoryPage.clickAddToCartByName(itemName)
    await expect(
      inventoryPage.inventoryItem.filter({ hasText: itemName }),
    ).toContainText('Remove')

    // Going to cart
    await inventoryPage.shopingCart.click()

    // Checkout
    await expect(cartPage.title).toContainText('Your Cart')
    await cartPage.checkoutButton.click()

    await cartPage.firstNameImput.fill('Jhon')
    await cartPage.lastNameImput.fill('Smith')
    await cartPage.zipInput.fill('121234')
    await cartPage.continueButton.click()

    await expect(cartPage.title).toContainText('Checkout: Overview')
    await cartPage.finishButton.click()

    await expect(cartPage.thankYouMessage).toContainText(
      'Thank you for your order!',
    )
  })
})
