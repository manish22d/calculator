package com.calculator.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.calculator.testBase.TestBase;
import com.calculator.utils.TestUtility;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"src\\test\\java\\com\\calculator\\tests\\calculatorTest.feature" }, glue = "com.calculator.testSteps", plugin = {
				"pretty", "html:target/cucumber-report.html" }, monochrome = true)

public class TestRunner extends TestBase {

	@BeforeClass
	public static void run() {
		TestUtility.setDateForLog4j();
	}

	@AfterClass
	public static void writeExtentReport() {
//		Reporter.loadXMLConfig(new File("src//main//resources//extent-config.xml"));
//		Reporter.setSystemInfo("user", System.getProperty("user.name"));
//		Reporter.setSystemInfo("os", "Windows 10");
//		Reporter.setTestRunnerOutput("Sample test runner output message");

		driver.close();
		driver.quit();
	}

}