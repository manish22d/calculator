package com.calculator.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.calculator.testBase.TestBase;
import com.calculator.utils.TestUtility;
import com.vimalselvam.cucumber.listener.Reporter;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"src\\test\\java\\com\\calculator\\tests\\calculatorTest.feature" }, glue = "com.calculator.testSteps", plugin = {
				"pretty", "html:target/cucumber-report.html" }, monochrome = true)

public class TestRunner extends TestBase {

	@BeforeClass
	public void run() {
		System.out.println("Manish");
		TestUtility.setDateForLog4j();
	}

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File("src//main//resources//extent-config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 10");
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}

}