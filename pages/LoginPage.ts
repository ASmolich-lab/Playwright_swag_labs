import { Expect, type Locator, type Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly logo: Locator
  readonly nameImput: Locator
  readonly passImput: Locator
  readonly submitButton: Locator
  readonly error: Locator

  constructor(page: Page) {
    this.page = page
    this.logo = page.locator('.login_logo') //by CSS
    this.nameImput = page.locator('[name = "user-name"]') //by attribute
    this.passImput = page.locator('#password') // by id
    this.submitButton = page.getByText('Login') // by text
    this.error = page.getByTestId('error') // by testId
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async login(username: string, password: string) {
    // await this.goto()
    await this.nameImput.fill(username)
    await this.passImput.fill(password)
    await this.submitButton.click()
    // verify login
  }

  async loginAsStandartUser(
    username: string = 'standard_user',
    password: string = 'secret_sauce',
  ) {
    await this.nameImput.fill(username)
    await this.passImput.fill(password)
    await this.submitButton.click()
    // verify login
  }
}
