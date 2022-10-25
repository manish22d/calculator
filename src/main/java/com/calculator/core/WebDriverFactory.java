package com.calculator.core;

import com.calculator.constant.Constants;
import com.calculator.listener.WebEventListener;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;

import java.time.Duration;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class WebDriverFactory {
    static WebDriver driver = null;
    public WebEventListener e_driver;

    protected WebDriver initializeDriver() {
//		DriverType browser = DriverType.valueOf(System.getProperty("browser").toUpperCase());
        DriverType browser = DriverType.valueOf("chrome".toUpperCase());
        switch (browser) {
            case FIREFOX:
                driver = getFirefoxDriver();
                break;
            case CHROME:
                driver = getChromeDriver();
                break;
            case EDGE:
                driver = getInternetExplorerDriver();
                break;
        }

        e_driver = new WebEventListener();
        EventFiringDecorator eventFiringDecorator = new EventFiringDecorator(e_driver);
        eventFiringDecorator.decorate(driver);

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(Constants.PAGE_LOAD_TIMEOUT));
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(Constants.IMPLICIT_WAIT));
//			driver.get(property.getProperty("url"));
        driver.get(System.getProperty("user.dir") + "/web/index.html");

        return driver;
    }

    private WebDriver getFirefoxDriver() {
        WebDriverManager.firefoxdriver().setup();
        return new FirefoxDriver();
    }

    private WebDriver getChromeDriver() {
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.setExperimentalOption("useAutomationExtension", false);
        chromeOptions.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));

        Map<String, Object> prefs = new HashMap<String, Object>();
        prefs.put("credentials_enable_service", false);
        prefs.put("profile.password_manager_enabled", false);
        chromeOptions.setExperimentalOption("prefs", prefs);

        WebDriverManager.chromedriver().setup();
        return new ChromeDriver(chromeOptions);
    }

    private WebDriver getInternetExplorerDriver() {
        WebDriverManager.iedriver().setup();
        return new InternetExplorerDriver();
    }
}
