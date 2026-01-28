import { Expect, type Locator, type Page } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly title: Locator
  readonly inventoryItem: Locator
  readonly checkoutButton: Locator
  readonly firstNameImput: Locator
  readonly lastNameImput: Locator
  readonly zipInput: Locator
  readonly continueButton: Locator
  readonly finishButton: Locator
  readonly thankYouMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.title = page.getByTestId('title')
    this.inventoryItem = page.getByTestId('inventory-item')
    this.checkoutButton = page.getByTestId('checkout')
    this.firstNameImput = page.getByTestId('firstName')
    this.lastNameImput = page.getByTestId('lastName')
    this.zipInput = page.getByTestId('postalCode')
    this.continueButton = page.getByTestId('continue')
    this.finishButton = page.getByTestId('finish')
    this.thankYouMessage = page.getByTestId('complete-header')
  }

  async clickAddToCartByName(productName: string) {
    // Use the built-in locator, which is best
    const productLocator = this.inventoryItem.filter({ hasText: productName })
    await productLocator.getByRole('button').click()
  }
}
