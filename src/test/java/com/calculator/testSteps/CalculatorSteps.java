package com.calculator.testSteps;

import com.calculator.core.WebDriverManager;
import com.calculator.pages.CalculatorPage;
import freemarker.template.utility.CollectionUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;


public class CalculatorSteps {
    WebDriver driver;
    List<String> numbers = new ArrayList<>();
    CalculatorPage calculatorPage;

    @Given("^calculator app is up and running$")
    public void calculator_app_is_up_and_running() {
        driver = WebDriverManager.getDriver();
        calculatorPage = new CalculatorPage(driver);
    }

    @Given("^I want perform mathematical operation with \"([^\"]*)\"$")
    public void i_want_perform_addition_with(String number) {
        numbers.add(number);
    }

    @When("^i perform addition$")
    public void i_perform_addition() {
        calculatorPage.clearScreen();
        for (int i = 0; i < numbers.size(); i++) {
            calculatorPage.selectANumber(numbers.get(i));
            if (i < numbers.size() - 1)
                calculatorPage.clickAdd();
        }
        calculatorPage.clickEqual();
    }

    @When("^i perform subtraction")
    public void i_perform_subtraction() {
        calculatorPage.clearScreen();
        for (int i = 0; i < numbers.size(); i++) {
            calculatorPage.selectANumber(numbers.get(i));
            if (i < numbers.size() - 1)
                calculatorPage.clickSubtract();
        }
        calculatorPage.clickEqual();
    }

    @When("^i perform division$")
    public void i_perform_division() {
        calculatorPage.clearScreen();
        calculatorPage.selectANumber(numbers.get(0));
        calculatorPage.clickDivision();
        calculatorPage.selectANumber(numbers.get(1));
        calculatorPage.clickEqual();
    }

    @When("^i perform multiplication$")
    public void i_perform_multiplication() {
        calculatorPage.clearScreen();
        for (int i = 0; i < numbers.size(); i++) {
            calculatorPage.selectANumber(numbers.get(i));
            if (i < numbers.size() - 1)
                calculatorPage.clickMultiplication();
        }
        calculatorPage.clickEqual();
    }

    @Then("^addition result displayed correctly$")
    public void result_displayed_correctly() {
        int expectedResult = 0;
        for (String number : numbers) expectedResult += Integer.parseInt(number);
        int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());

        assertThat(actualResult, is(equalTo(expectedResult)));
    }

    @Then("^subtraction result displayed correctly$")
    public void subtraction_result_displayed_correctly() {

        int expectedResult = Integer.parseInt(numbers.get(0))-Integer.parseInt(numbers.get(1));

        if(numbers.size()>2)
            for(int i =2 ; i<numbers.size();i++)
                expectedResult = expectedResult - Integer.parseInt(numbers.get(i));
        int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());

        assertThat(actualResult, is(equalTo(expectedResult)));
    }

    @Then("^multiplication result displayed correctly$")
    public void multiplication_result_displayed_correctly() {
        int expectedResult = 1;
        for (String number : numbers) expectedResult *= Integer.parseInt(number);

        int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());
        assertThat(actualResult, is(equalTo(expectedResult)));
    }

    @Then("^division result displayed correctly$")
    public void division_result_displayed_correctly() {


        double expectedResult = Double.parseDouble(numbers.get(0))/Double.parseDouble(numbers.get(1));

        if(numbers.size()>2)
            for(int i =2 ; i<numbers.size();i++)
                expectedResult = expectedResult / Double.parseDouble(numbers.get(i));
        DecimalFormat df = new DecimalFormat("#.##");
        expectedResult = Double.parseDouble(df.format(expectedResult));

        double actualResult = Double.parseDouble(calculatorPage.getDisplayedNumber());
        assertThat(actualResult, is(equalTo(expectedResult)));
    }

    @Given("^verify \"([^\"]*)\" displayed$")
    public void verify_displayed(String expectedMsg) {
        String actualMsg = calculatorPage.getDisplayedError();
        assertThat(actualMsg, is(equalTo(expectedMsg)));
    }
}
