package com.e2e;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Contact Form E2E Flow (Selenium)")
class ContactFormTest {

    private ChromeDriver driver;
    private WebDriverWait wait;
    private String baseUrl;

    @BeforeEach
    void setUp() {
        baseUrl = System.getProperty("baseUrl", "http://localhost:3000");
        boolean headless = Boolean.parseBoolean(System.getProperty("headless", "false"));

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--window-size=1280,900");
        if (headless) {
            options.addArguments("--headless=new");
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
        }

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.get(baseUrl + "/contact");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-form']")));
    }

    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    private void clickSubmitButton() {
        WebElement submitBtn = wait.until(
                ExpectedConditions.elementToBeClickable(By.cssSelector("[data-testid='submit-contact-btn']"))
        );
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({ behavior: 'instant', block: 'center' });",
                submitBtn
        );
        submitBtn.click();
    }

    private void stubContactFetch(int statusCode, String responseJson) {
        ((JavascriptExecutor) driver).executeScript(
                "window.__contactCalls = 0;" +
                "window.__lastContactBody = null;" +
                "const origFetch = window.fetch;" +
                "window.fetch = async (url, opts) => {" +
                "  if (String(url).includes('/api/contact')) {" +
                "    window.__contactCalls++;" +
                "    window.__lastContactBody = opts && opts.body ? opts.body : null;" +
                "    return new Response(arguments[1], {" +
                "      status: arguments[0]," +
                "      headers: { 'Content-Type': 'application/json' }" +
                "    });" +
                "  }" +
                "  return origFetch(url, opts);" +
                "};",
                statusCode,
                responseJson
        );
    }

    @Test
    @DisplayName("populates browser timezone badge and sets today as minimum preferred date")
    void populatesBrowserTimezoneBadgeAndSetsTodayAsMinimumPreferredDate() {
        WebElement timezoneBadge = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='detected-timezone']"))
        );
        assertTrue(timezoneBadge.getText().trim().matches("^Timezone:\\s+\\S+"));

        WebElement dateInput = driver.findElement(By.cssSelector("[data-testid='input-preferred-date']"));
        assertEquals(LocalDate.now().toString(), dateInput.getAttribute("min"));
    }

    @Test
    @DisplayName("displays required validation errors on blank submit and clears them on user input")
    void displaysRequiredValidationErrorsAndClearsOnInput() {
        stubContactFetch(200, "{\"success\":true}");

        clickSubmitButton();

        assertTrue(wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("[data-testid='error-first-name']"))).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("[data-testid='error-last-name']")).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("[data-testid='error-contact-method']")).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("[data-testid='error-service']")).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("[data-testid='error-requirement']")).isDisplayed());

        Long calls = (Long) ((JavascriptExecutor) driver).executeScript("return window.__contactCalls;");
        assertEquals(0L, calls);

        driver.findElement(By.cssSelector("[data-testid='input-first-name']")).sendKeys("Nisal");
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("[data-testid='error-first-name']")));

        driver.findElement(By.cssSelector("[data-testid='input-email']")).sendKeys("nisal@vectrasolutions.dev");
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("[data-testid='error-contact-method']")));
    }

    @Test
    @DisplayName("validates email/phone formats and updates the live requirement character counter")
    void validatesFormatsAndUpdatesCharacterCounter() {
        driver.findElement(By.cssSelector("[data-testid='input-first-name']")).sendKeys("Nisal");
        driver.findElement(By.cssSelector("[data-testid='input-last-name']")).sendKeys("Muthugala");
        driver.findElement(By.cssSelector("[data-testid='input-email']")).sendKeys("invalid-email");
        driver.findElement(By.cssSelector("[data-testid='input-phone']")).sendKeys("123");

        new Select(driver.findElement(By.cssSelector("[data-testid='select-service']"))).selectByIndex(1);

        WebElement requirementBox = driver.findElement(By.cssSelector("[data-testid='textarea-requirement']"));
        requirementBox.sendKeys("   Build Selenium E2E suite   ");

        WebElement charCounter = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[normalize-space()='24 chars']"))
        );
        assertTrue(charCounter.isDisplayed());

        clickSubmitButton();

        assertTrue(wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("[data-testid='error-email']"))).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("[data-testid='error-phone']")).isDisplayed());
    }

    @Test
    @DisplayName("submits valid inquiry payload, shows success confirmation, and resets form")
    void submitsValidInquiryAndResetsForm() {
        stubContactFetch(200, "{\"success\":true}");

        driver.findElement(By.cssSelector("[data-testid='input-first-name']")).sendKeys("  Nisal  ");
        driver.findElement(By.cssSelector("[data-testid='input-last-name']")).sendKeys("  Muthugala  ");
        driver.findElement(By.cssSelector("[data-testid='input-company']")).sendKeys("  Vectra Solutions  ");
        driver.findElement(By.cssSelector("[data-testid='input-email']")).sendKeys("  nisal@vectrasolutions.dev  ");
        driver.findElement(By.cssSelector("[data-testid='input-phone']")).sendKeys("+94 77 123 4567");

        new Select(driver.findElement(By.cssSelector("[data-testid='select-service']"))).selectByIndex(1);
        new Select(driver.findElement(By.cssSelector("[data-testid='select-engagement-model']"))).selectByIndex(1);
        driver.findElement(By.cssSelector("[data-testid='textarea-requirement']"))
                .sendKeys("  Automate CI/CD and E2E test pipeline.  ");
        new Select(driver.findElement(By.cssSelector("[data-testid='input-preferred-time']")))
                .selectByVisibleText("10:00 AM");

        clickSubmitButton();

        WebElement successState = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-success-state']"))
        );
        assertTrue(successState.getText().contains("Request Sent to the Vectra Team"));

        String sentBody = (String) ((JavascriptExecutor) driver).executeScript("return window.__lastContactBody;");
        assertNotNull(sentBody);
        assertTrue(sentBody.contains("\"firstName\":\"Nisal\""));
        assertTrue(sentBody.contains("\"lastName\":\"Muthugala\""));
        assertTrue(sentBody.contains("\"email\":\"nisal@vectrasolutions.dev\""));

        WebElement resetBtn = successState.findElement(By.tagName("button"));
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({ behavior: 'instant', block: 'center' });",
                resetBtn
        );
        resetBtn.click();

        WebElement resetFirstName = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='input-first-name']"))
        );
        assertEquals("", resetFirstName.getAttribute("value"));
    }

    @Test
    @DisplayName("shows error banner on HTTP 500 without clearing user input")
    void showsErrorBannerOnServerErrorWithoutClearingInput() {
        stubContactFetch(500, "{\"error\":\"Server error\"}");

        driver.findElement(By.cssSelector("[data-testid='input-first-name']")).sendKeys("Kasun");
        driver.findElement(By.cssSelector("[data-testid='input-last-name']")).sendKeys("Perera");
        driver.findElement(By.cssSelector("[data-testid='input-email']")).sendKeys("kasun@example.com");
        new Select(driver.findElement(By.cssSelector("[data-testid='select-service']"))).selectByIndex(1);
        driver.findElement(By.cssSelector("[data-testid='textarea-requirement']"))
                .sendKeys("Preserve my draft on server error.");

        clickSubmitButton();

        WebElement errorBanner = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-error-banner']"))
        );
        assertTrue(errorBanner.getText().contains("Unable to submit your inquiry"));
        assertEquals("Kasun", driver.findElement(By.cssSelector("[data-testid='input-first-name']")).getAttribute("value"));
    }

    @Test
    @DisplayName("short-circuits silently to success view when honeypot is populated")
    void shortCircuitsSilentlyWhenHoneypotIsPopulated() {
        stubContactFetch(200, "{\"success\":true}");

        driver.findElement(By.cssSelector("[data-testid='input-first-name']")).sendKeys("Bot");
        driver.findElement(By.cssSelector("[data-testid='input-last-name']")).sendKeys("Spammer");
        driver.findElement(By.cssSelector("[data-testid='input-email']")).sendKeys("bot@spam.example.com");
        new Select(driver.findElement(By.cssSelector("[data-testid='select-service']"))).selectByIndex(1);
        driver.findElement(By.cssSelector("[data-testid='textarea-requirement']"))
                .sendKeys("Automated spam submission.");

        ((JavascriptExecutor) driver).executeScript(
                "const input = document.getElementById('honeypot');" +
                "const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;" +
                "setter.call(input, 'https://spam.example.com');" +
                "input.dispatchEvent(new Event('input', { bubbles: true }));"
        );

        clickSubmitButton();

        WebElement successState = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-success-state']"))
        );
        assertTrue(successState.isDisplayed());

        Long calls = (Long) ((JavascriptExecutor) driver).executeScript("return window.__contactCalls;");
        assertEquals(0L, calls);
    }
}