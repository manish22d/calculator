Feature: Calculator Functional Test
  I want to perform mathematical operation on calculator

  Background: 
    Given calculator app is up and running

  @manish
  Scenario Outline: Addition of two number completed correctly
    Given I want perfrom addition with "<number1>"
    And I want perfrom addition with "<number2>"
    When i perform addition
    Then result displayed correctly

    Examples: 
      | number1 | number2 |
      |       2 |       3 |
      |       2 |       3 |
