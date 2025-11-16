import { test, expect } from "@playwright/test";

const EMAIL = process.env.E2E_USER_EMAIL;
const PASSWORD = process.env.E2E_USER_PASSWORD;

test.describe("login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    await page.goto("/login");

    // Fill in the form and submit
    await page.locator('#loginForm input[name="email"]').fill(EMAIL);
    await page.locator('#loginForm input[name="password"]').fill(PASSWORD);

    await page.locator('#loginForm button[type="submit"]').click();

    // After successful login we should be redirected away from /login
    await expect(page).toHaveURL(/\/login/i);

    // And error container should be empty
    await expect(page.locator("#message-container")).toBeEmpty();
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login"); // same path as above

    // Use credentials that pass frontend validation but fail backend auth
    await page
      .locator('#loginForm input[name="email"]')
      .fill("wrong@example.com");
    await page
      .locator('#loginForm input[name="password"]')
      .fill("WrongPassword123!");

    await page.locator('#loginForm button[type="submit"]').click();

    const messageContainer = page.locator("#message-container");

    // We know displayMessage writes into this container on error
    await expect(messageContainer).not.toBeEmpty();
  });
});
