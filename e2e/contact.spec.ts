import { test, expect } from "@playwright/test";

test.describe("Contact Form E2E Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("populates browser timezone badge and sets today as minimum preferred date", async ({
    page,
  }) => {
    const timezoneBadge = page.getByTestId("detected-timezone");
    await expect(timezoneBadge).toBeVisible();
    await expect(timezoneBadge).toContainText(/^Timezone:\s+\S+/);

    const todayLocal = await page.evaluate(() => {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    });

    await expect(page.getByTestId("input-preferred-date")).toHaveAttribute(
      "min",
      todayLocal
    );
  });

  test("displays required validation errors on blank submit and clears them on user input", async ({
    page,
  }) => {
    let apiCalled = false;
    await page.route("**/api/contact", async (route) => {
      apiCalled = true;
      await route.abort();
    });

    await page.getByTestId("submit-contact-btn").click();

    await expect(page.getByTestId("error-first-name")).toBeVisible();
    await expect(page.getByTestId("error-last-name")).toBeVisible();
    await expect(page.getByTestId("error-contact-method")).toBeVisible();
    await expect(page.getByTestId("error-service")).toBeVisible();
    await expect(page.getByTestId("error-requirement")).toBeVisible();
    expect(apiCalled).toBe(false);

    // Typing firstName clears error-first-name
    await page.getByTestId("input-first-name").fill("Nisal");
    await expect(page.getByTestId("error-first-name")).toBeHidden();

    // Typing email clears error-contact-method
    await page.getByTestId("input-email").fill("nisal@vectrasolutions.dev");
    await expect(page.getByTestId("error-contact-method")).toBeHidden();
  });

  test("validates email/phone formats and updates the live requirement character counter", async ({
    page,
  }) => {
    await page.getByTestId("input-first-name").fill("Nisal");
    await page.getByTestId("input-last-name").fill("Muthugala");
    await page.getByTestId("input-email").fill("invalid-email");
    await page.getByTestId("input-phone").fill("123");
    await page.getByTestId("select-service").selectOption({ index: 1 });

    await expect(page.getByText("0 chars")).toBeVisible();
    await page
      .getByTestId("textarea-requirement")
      .fill("   Build Playwright E2E suite   ");
    await expect(page.getByText("26 chars")).toBeVisible();

    await page.getByTestId("submit-contact-btn").click();

    await expect(page.getByTestId("error-email")).toBeVisible();
    await expect(page.getByTestId("error-phone")).toBeVisible();
  });

  test("submits valid inquiry payload, shows success confirmation, and resets form", async ({
    page,
  }) => {
    const capturedPayloads: Record<string, string>[] = [];

    await page.route("**/api/contact", async (route) => {
      capturedPayloads.push(
        route.request().postDataJSON() as Record<string, string>
      );
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    await page.getByTestId("input-first-name").fill("  Nisal  ");
    await page.getByTestId("input-last-name").fill("  Muthugala  ");
    await page.getByTestId("input-company").fill("  Vectra Solutions  ");
    await page.getByTestId("input-email").fill("  nisal@vectrasolutions.dev  ");
    await page.getByTestId("input-phone").fill("+94 77 123 4567");
    await page.getByTestId("select-service").selectOption({ index: 1 });
    await page.getByTestId("select-engagement-model").selectOption({ index: 1 });
    await page
      .getByTestId("textarea-requirement")
      .fill("  Automate CI/CD and E2E test pipeline.  ");
    await page.getByTestId("input-preferred-time").selectOption("10:00 AM");

    await page.getByTestId("submit-contact-btn").click();

    const successState = page.getByTestId("contact-success-state");
    await expect(successState).toBeVisible();
    await expect(successState).toContainText("Request Sent to the Vectra Team");

    expect(capturedPayloads).toHaveLength(1);
    const payload = capturedPayloads[0];
    expect(payload.firstName).toBe("Nisal");
    expect(payload.lastName).toBe("Muthugala");
    expect(payload.company).toBe("Vectra Solutions");
    expect(payload.email).toBe("nisal@vectrasolutions.dev");
    expect(payload.requirement).toBe(
      "Automate CI/CD and E2E test pipeline."
    );
    expect(payload.preferredTime).toBe("10:00 AM");

    // Reset back to form
    await page.getByRole("button", { name: /send another inquiry/i }).click();
    await expect(page.getByTestId("contact-form")).toBeVisible();
    await expect(page.getByTestId("input-first-name")).toHaveValue("");
  });

  test("shows error banner on HTTP 500 without clearing user input", async ({
    page,
  }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Server error" }),
      });
    });

    await page.getByTestId("input-first-name").fill("Kasun");
    await page.getByTestId("input-last-name").fill("Perera");
    await page.getByTestId("input-email").fill("kasun@example.com");
    await page.getByTestId("select-service").selectOption({ index: 1 });
    await page
      .getByTestId("textarea-requirement")
      .fill("Preserve my draft on server error.");

    await page.getByTestId("submit-contact-btn").click();

    const errorBanner = page.getByTestId("contact-error-banner");
    await expect(errorBanner).toBeVisible();
    await expect(errorBanner).toContainText(
      "Unable to submit your inquiry. Please email us directly at contact@vectrasolutions.dev"
    );

    await expect(page.getByTestId("input-first-name")).toHaveValue("Kasun");
    await expect(page.getByTestId("textarea-requirement")).toHaveValue(
      "Preserve my draft on server error."
    );
  });

  test("short-circuits silently to success view when honeypot is populated", async ({
    page,
  }) => {
    let apiCalled = false;
    await page.route("**/api/contact", async (route) => {
      apiCalled = true;
      await route.abort();
    });

    await page.getByTestId("input-first-name").fill("Bot");
    await page.getByTestId("input-last-name").fill("Spammer");
    await page.getByTestId("input-email").fill("bot@spam.example.com");
    await page.getByTestId("select-service").selectOption({ index: 1 });
    await page
      .getByTestId("textarea-requirement")
      .fill("Automated spam submission.");

    /// Populate hidden anti-spam honeypot input using React's native value setter
    await page.locator("#honeypot").evaluate((el: HTMLInputElement) => {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeSetter?.call(el, "https://spam.example.com");
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });

    await page.getByTestId("submit-contact-btn").click();

    await expect(page.getByTestId("contact-success-state")).toBeVisible();
    expect(apiCalled).toBe(false);
  });
});