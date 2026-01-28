import { Expect, type Locator, type Page } from '@playwright/test'

export class InventoryPage {
  readonly page: Page
  readonly title: Locator
  readonly inventoryItem: Locator
  readonly shopingCart: Locator

  constructor(page: Page) {
    this.page = page
    this.title = page.getByTestId('title')
    this.inventoryItem = page.getByTestId('inventory-item')
    this.shopingCart = page.getByTestId('shopping-cart-link')
  }

  async clickAddToCartByName(productName: string) {
    // Use the built-in locator, which is best
    const productLocator = this.inventoryItem.filter({ hasText: productName })
    await productLocator.getByRole('button').click()
  }
}
