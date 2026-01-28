# 🎭 Playwright_swag_labs Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-v1.50+-blue?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)
![CI Status](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/playwright.yml/badge.svg)

This repository contains example of the end-to-end automated tests. It uses **Playwright** with **TypeScript**, following the Page Object Model (POM) design pattern.

## 🚀 Features

- **Page Object Model** for maintainable test logic.
- **Path Aliases** (`@pages`, `@fixtures`) for cleaner imports.
- **GitHub Actions** CI pipeline with Docker container support.

---

## 🛠️ Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ASmolich-lab/Playwright_swag_labs.git](https://github.com/ASmolich-lab/Playwright_swag_labs.git)
    cd Playwright_swag_labs
    ```

2.  **Install dependencies:**

    ```bash
    npm ci
    ```

3.  **Install Playwright browsers:**
    ```bash
    npx playwright install --with-deps
    ```

---

## 🏃 Running Tests

### Standard Execution

Run all tests in headless mode (default):

```bash
npx playwright test
```
