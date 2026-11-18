package com.vectrasolutions.e2e;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.logging.LogEntries;
import org.openqa.selenium.logging.LogEntry;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Navigation & Responsive Layout (Selenium)")
class NavigationTest {

    private ChromeDriver driver;
    private WebDriverWait wait;
    private String baseUrl;

    @BeforeEach
    void setUp() {
        baseUrl = System.getProperty("baseUrl", "http://localhost:3000");
        boolean headless = Boolean.parseBoolean(System.getProperty("headless", "false"));

        LoggingPreferences logPrefs = new LoggingPreferences();
        logPrefs.enable(LogType.BROWSER, Level.SEVERE);

        ChromeOptions options = new ChromeOptions();
        options.setCapability("goog:loggingPrefs", logPrefs);
        options.addArguments("--window-size=1280,800");

        if (headless) {
            options.addArguments("--headless=new");
        }

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @AfterEach
    void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    @DisplayName("renders the home page without runtime errors")
    void rendersHomePageWithoutRuntimeErrors() {
        driver.get(baseUrl + "/");

        WebElement nav = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("nav")));
        WebElement main = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("main")));
        WebElement footer = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("footer")));

        assertTrue(nav.isDisplayed());
        assertTrue(main.isDisplayed());
        assertTrue(footer.isDisplayed());

        LogEntries logs = driver.manage().logs().get(LogType.BROWSER);
        List<LogEntry> severeErrors = logs.getAll().stream()
                .filter(entry -> entry.getLevel().equals(Level.SEVERE))
                .toList();

        assertTrue(severeErrors.isEmpty(), "Expected no severe browser errors, but found: " + severeErrors);
    }

    @Test
    @DisplayName("navigates from the home page to /contact and displays core landmarks")
    void navigatesFromHomePageToContactAndDisplaysCoreLandmarks() {
        driver.get(baseUrl + "/");

        WebElement visibleContactLink = wait.until(d ->
                d.findElements(By.cssSelector("a[href='/contact']")).stream()
                        .filter(WebElement::isDisplayed)
                        .findFirst()
                        .orElse(null)
        );

        assertNotNull(visibleContactLink, "Expected a visible link to /contact");
        visibleContactLink.click();

        wait.until(ExpectedConditions.urlMatches(".*/contact$"));

        WebElement contactForm = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-form']"))
        );
        WebElement contactInfoPanel = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-info-panel']"))
        );

        assertTrue(contactForm.isDisplayed());
        assertTrue(contactInfoPanel.isDisplayed());
    }

    @Test
    @DisplayName("renders /contact studio channels, SLA badge, and direct email link")
    void rendersContactStudioChannelsSlaBadgeAndDirectEmailLink() {
        driver.get(baseUrl + "/contact");

        WebElement slaBadge = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='sla-badge']"))
        );
        assertEquals("< 24h Response SLA", slaBadge.getText().trim());

        WebElement emailLink = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-direct-email']"))
        );
        assertEquals("contact@vectrasolutions.dev", emailLink.getText().trim());
        assertEquals("mailto:contact@vectrasolutions.dev", emailLink.getAttribute("href"));

        WebElement processCard = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-process-card']"))
        );
        assertTrue(processCard.isDisplayed());
    }

    @Test
    @DisplayName("stacks /contact cleanly on mobile viewport without horizontal overflow")
    void stacksContactCleanlyOnMobileViewportWithoutHorizontalOverflow() {
        driver.executeCdpCommand("Emulation.setDeviceMetricsOverride", Map.of(
                "width", 390,
                "height", 844,
                "deviceScaleFactor", 3,
                "mobile", true
        ));

        driver.get(baseUrl + "/contact");

        WebElement contactForm = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-form']"))
        );
        WebElement contactInfoPanel = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.cssSelector("[data-testid='contact-info-panel']"))
        );

        assertTrue(contactForm.isDisplayed());
        assertTrue(contactInfoPanel.isDisplayed());

        Boolean hasHorizontalOverflow = (Boolean) ((JavascriptExecutor) driver).executeScript(
                "return document.documentElement.scrollWidth > window.innerWidth;"
        );
        assertFalse(Boolean.TRUE.equals(hasHorizontalOverflow), "Page should not overflow horizontally on 390px mobile viewport");
    }
}