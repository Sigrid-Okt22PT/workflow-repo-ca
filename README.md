# Workflow CA – Testing, Tooling & Branching

A coursework repository demonstrating **Git workflow**, **ESLint**, **Prettier**, **Husky commit hooks**, **Vitest unit testing**, and **Playwright end-to-end testing**.

This project follows the required setup from the Noroff **Workflow Module**, including branching strategy, environment variables, testing tools, and documentation of project scripts.

---

## 📘 Description

This repository contains the solution for the **Workflow Course Assignment (CA)**.  
The objective of this assignment is to apply the skills and knowledge gained during
the workflow course to enhance the quality of a website.
You will do this by configuring tools and defining tests that improve the efficiency
of the development process.

- Git forking and branching
- Linting and formatting
- Pre-commit automation
- Unit testing with Vitest
- E2E testing with Playwright

All work is completed in the `workflow` branch, as required by the CA.

---

## 📑 Table of Contents

- [Description](#-description)
- [Built With](#-built-with)
- [Features Implemented](#-features-implemented)
- [Setup & Installation](#-setup--installation)
- [Environment Variables](#-environment-variables)
- [ESLint & Prettier Setup](#-eslint--prettier-setup)
- [Vitest (Unit Tests)](#-vitest-unit-tests)
- [Playwright (End-to-End Tests)](#-playwright-end-to-end-tests)
- [Development Scripts](#-development-scripts)

---

## 🔧 Built With

- **JavaScript (ES Modules)**
- **HTML**
- **TailwindCSS** (optional development styling)
- **ESLint** for code quality
- **Prettier** for code formatting
- **Vitest** for unit tests
- **Playwright** for end-to-end tests
- **Node.js + npm** for tooling
- **dotenv** for environment variable handling

---

## ✨ Features Implemented

### ✔ Code Quality & Tooling

- ESLint configured for browser environment
- Prettier formatting applied project-wide
- Husky pre-commit hook that:
  - Lints staged JS files
  - Formats staged HTML and JS files

### ✔ Unit Tests (Vitest)

#### `isActivePath`

Tests required by the CA:

- True when paths match exactly
- True for `/` and `/index.html`
- True when current path includes the href
- False when paths don’t match

#### `getUsername`

- Returns the stored user’s name
- Returns `null` if no user exists

### ✔ End-to-End Tests (Playwright)

#### `login` test suite:

- User can log in using credentials from `.env`
- Error message appears for invalid credentials

#### `navigation` test suite:

- Navigates to home page
- Waits for venue list
- Opens first venue
- Confirms “Venue details” in heading

---

## 🚀 Setup & Installation

### 1. Clone Your Fork

```bash
git clone https://github.com/<your-username>/<your-fork>.git
cd workflow-repo-ca
```

### 2. Switch to the workflow branch

```bash
git checkout workflow
```

### 3. Install dependencies

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file:

```env
E2E_BASE_URL=http://localhost:3000
E2E_USER_EMAIL=user@example.com
E2E_USER_PASSWORD=ExamplePassword123
```

Use `.env.example` and add host, email and password, If the login details do not work, you can create a new user by running the project and using the register form.

## 🎛 ESLint & Prettier Setup

### Lint the project

```bash
npm run lint
```

### Format all files

```bash
npm run format
```

## 🧪 Vitest Unit Tests

Run unit tests:

```bash
npm run test
```

Unit tests are stored in:

    js/test/

## 🧭 Playwright End-to-End Tests

Run all E2E tests:
Be sure to add .env file before testing

```bash
npm run test:e2e
```

or

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/login.spec.js
```

Show the test report:

```bash
npx playwright show-report
```

## 📜 Development Scripts

```json
"scripts": {
  "dev": "npx tailwindcss -i ./css/input.css -o ./css/style.css --watch",
  "lint": "eslint .",
  "test": "vitest",
  "test:e2e": "playwrite test",
  "format": "prettier --write ."
}
```
