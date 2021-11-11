package com.calculator.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.calculator.testBase.TestBase;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"src\\test\\java\\com\\calculator\\tests\\calculatorTest.feature" }, glue = "com.calculator.testSteps", plugin = {
				"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:",
				"html:output/html-report" }, monochrome = true)

public class TestRunner extends TestBase {

	@BeforeClass
	public static void run() {
//		TestUtility.setDateForLog4j();
	}

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src//main//resources//extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 10");
		Reporter.setTestRunnerOutput("Sample test runner output message");

		driver.close();
		driver.quit();
	}

}