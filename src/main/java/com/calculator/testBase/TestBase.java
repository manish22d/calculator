package com.calculator.testBase;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.calculator.constant.Constants;
import com.calulator.listener.WebEventListener;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {

	public static WebDriver driver;
	public static Properties property;
	public static ChromeOptions chromeOptions;
	public static EventFiringWebDriver e_driver;
	public static ExtentReports extent;
	public static ExtentTest extentTest;
	public static WebEventListener eventListener;

	public TestBase() {
		try {
			property = new Properties();
			FileInputStream inputStream = new FileInputStream(
					System.getProperty("user.dir") + "/src/main/resources/Configuration.properties");
			property.load(inputStream);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void initialization() {
		String broswerName = property.getProperty("Browser");
		System.out.println(broswerName);
		if (driver == null) {
			if (broswerName.equalsIgnoreCase("Chrome")) {
				chromeOptions = new ChromeOptions();
				chromeOptions.setExperimentalOption("useAutomationExtension", false);
				chromeOptions.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));

				Map<String, Object> prefs = new HashMap<String, Object>();
				prefs.put("credentials_enable_service", false);
				prefs.put("profile.password_manager_enabled", false);
				chromeOptions.setExperimentalOption("prefs", prefs);

				WebDriverManager.chromedriver().setup();
				driver = new ChromeDriver(chromeOptions);
			} else if (broswerName.equalsIgnoreCase("edge")) {
				WebDriverManager.edgedriver().setup();
				driver = new EdgeDriver();
			} else if (broswerName.equalsIgnoreCase("Firefox")) {
				WebDriverManager.firefoxdriver().setup();
				driver = new FirefoxDriver();
			} else {
				System.out.println("Path of Driver Executable is not Set for any Browser");
			}

			e_driver = new EventFiringWebDriver(driver);

			eventListener = new WebEventListener();
			e_driver.register(eventListener);
			driver = e_driver;

			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(Constants.IMPLICIT_WAIT, TimeUnit.SECONDS);

			driver.get(System.getProperty("url"));
		}
	}

}
