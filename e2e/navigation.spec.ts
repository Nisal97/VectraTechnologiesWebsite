import { test, expect } from "@playwright/test";

test.describe("Navigation & Responsive Layout", () => {
  test("renders the home page without runtime errors", async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on("pageerror", (error) => pageErrors.push(error));

    const response = await page.goto("/");
    expect(response?.status()).toBeLessThan(400);

    await expect(page.locator("nav").first()).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
    expect(pageErrors).toEqual([]);
  });

  test("navigates from the home page to /contact and displays core landmarks", async ({
    page,
  }) => {
    await page.goto("/");

    const contactLink = page.locator('a[href="/contact"]:visible').first();
    await expect(contactLink).toBeVisible();
    await contactLink.click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByTestId("contact-form")).toBeVisible();
    await expect(page.getByTestId("contact-info-panel")).toBeVisible();
  });

  test("renders /contact studio channels, SLA badge, and direct email link", async ({
    page,
  }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBeLessThan(400);

    await expect(page.getByTestId("sla-badge")).toHaveText(
      "< 24h Response SLA"
    );

    const emailLink = page.getByTestId("contact-direct-email");
    await expect(emailLink).toHaveText("contact@vectrasolutions.dev");
    await expect(emailLink).toHaveAttribute(
      "href",
      "mailto:contact@vectrasolutions.dev"
    );

    await expect(page.getByTestId("contact-process-card")).toBeVisible();
  });

  test("stacks /contact cleanly on mobile viewport without horizontal overflow", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/contact");

    await expect(page.getByTestId("contact-form")).toBeVisible();
    await expect(page.getByTestId("contact-info-panel")).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(hasHorizontalOverflow).toBe(false);
  });
});