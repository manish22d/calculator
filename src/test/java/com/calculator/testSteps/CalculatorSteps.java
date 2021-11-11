package com.calculator.testSteps;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.util.ArrayList;
import java.util.List;

import com.calculator.pages.CalculatorPage;
import com.calculator.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorSteps extends TestBase {

	List<String> numbers = new ArrayList<>();
	CalculatorPage calculatorPage = new CalculatorPage();

	@Given("^calculator app is up and running$")
	public void calculator_app_is_up_and_running() throws Throwable {
		initialization();
	}

	@Given("^I want perfrom mathematical operation with \"([^\"]*)\"$")
	public void i_want_perfrom_addition_with(String number) throws Throwable {
		numbers.add(number);
	}

	@When("^i perform addition$")
	public void i_perform_addition() throws Throwable {
		for (int i = 0; i < numbers.size(); i++) {
			calculatorPage.selectANumber(numbers.get(i));
			if (i < numbers.size() - 1)
				calculatorPage.clickAdd();
		}
		calculatorPage.clickEqual();
	}

	@When("^i perform substraction$")
	public void i_perform_substraction() throws Throwable {
		for (int i = 0; i < numbers.size(); i++) {
			calculatorPage.selectANumber(numbers.get(i));
			if (i < numbers.size() - 1)
				calculatorPage.clickSubtract();
		}
		calculatorPage.clickEqual();
	}

	@When("^i perform division$")
	public void i_perform_division() throws Throwable {
		calculatorPage.selectANumber(numbers.get(0));
		calculatorPage.clickDivision();
		calculatorPage.selectANumber(numbers.get(1));
		calculatorPage.clickEqual();
	}

	@When("^i perform multiplication$")
	public void i_perform_multiplication() throws Throwable {
		for (int i = 0; i < numbers.size(); i++) {
			calculatorPage.selectANumber(numbers.get(i));
			if (i < numbers.size() - 1)
				calculatorPage.clickMultiplication();
		}
		calculatorPage.clickEqual();
	}

	@Then("^addition result displayed correctly$")
	public void result_displayed_correctly() throws Throwable {
//				numbers.stream().mapToInt(num -> Integer.parseInt(num)).sum();
		int expectedResult = 0;
		for (int i = 0; i < numbers.size(); i++)
			expectedResult += Integer.parseInt(numbers.get(i));
		int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());

		assertThat(actualResult, is(equalTo(expectedResult)));
	}

	@Then("^substraction result displayed correctly$")
	public void substraction_result_displayed_correctly() throws Throwable {
		int expectedResult = 0;
		for (int i = 0; i < numbers.size(); i++)
			expectedResult -= Integer.parseInt(numbers.get(i));

		int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());

		assertThat(actualResult, is(equalTo(expectedResult)));
	}

	@Then("^multiplication result displayed correctly$")
	public void multiplication_result_displayed_correctly() throws Throwable {
		int expectedResult = 1;
		for (int i = 0; i < numbers.size(); i++)
			expectedResult *= Integer.parseInt(numbers.get(i));

		int actualResult = Integer.parseInt(calculatorPage.getDisplayedNumber());
		assertThat(actualResult, is(equalTo(expectedResult)));
	}
	
	@Given("^verify \"([^\"]*)\" displayed$")
	public void verify_displayed(String expectedMsg) throws Throwable {
		String actualMsg = calculatorPage.getDisplayedError();
		assertThat(actualMsg, is(equalTo(expectedMsg)));
	}
}
