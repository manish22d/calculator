package com.calculator.testSteps;

import com.calculator.core.WebDriverManager;
import io.cucumber.java.After;
import io.cucumber.java.AfterAll;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hook {
    @Before
    public void before(Scenario scenario) {
        System.out.println("*****************************************************************************************");
        System.out.println("	Scenario: "+scenario.getName());
        System.out.println("*****************************************************************************************");
    }

    @After
    public void after(Scenario scenario) {
        System.out.println("after cucumber");
    }
    @AfterAll
    public static  void tearDown(){
        WebDriverManager.getDriver().close();
        WebDriverManager.getDriver().quit();
    }
}
