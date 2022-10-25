package com.calculator.runner;

import com.calculator.core.WebDriverManager;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src\\test\\java\\com\\calculator\\tests\\calculatorTest.feature"},
        glue = "com.calculator.testSteps",
        plugin = {"pretty:target/cucumber/cucumber.txt",
//                "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
                "json:target/cucumber/cucumber.json"
        },
        monochrome = true,
        tags = "@test"
)

public class TestRunner {


    @BeforeClass
    public static void setup() {
        System.out.println("Ran the before");
    }

    @AfterClass()
    public static void teardown() {
        System.out.println("Ran the after");
        WebDriverManager.getDriver().close();
        WebDriverManager.getDriver().quit();
    }

}