package com.calculator.testSteps;

import java.util.ArrayList;
import java.util.List;

import com.calculator.testBase.TestBase;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorSteps extends TestBase {

	List<Integer> numbers = new ArrayList<>();

	@Given("^calculator app is up and running$")
	public void calculator_app_is_up_and_running() throws Throwable {
		initialization();
	}

	@Given("^I want perfrom addition with \"([^\"]*)\"$")
	public void i_want_perfrom_addition_with(String arg1) throws Throwable {

	}

	@When("^i perform addition$")
	public void i_perform_addition() throws Throwable {

	}

	@Then("^result displayed correctly$")
	public void result_displayed_correctly() throws Throwable {

	}
}
