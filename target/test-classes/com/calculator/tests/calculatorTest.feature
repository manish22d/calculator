Feature: Calculator Functional Test
  I want to perform mathematical operation on calculator

  Background: 
    Given calculator app is up and running

  @manish
  Scenario Outline: Addition of two number completed correctly
    Given I want perfrom mathematical operation with "<number1>"
    And I want perfrom mathematical operation with "<number2>"
    When i perform addition
    When i perform substraction
    When i perform multiplication
    Then addition result displayed correctly

    Examples: 
      | number1 | number2 |
      |       2 |       3 |
      |       2 |       3 |

  @manish
  Scenario Outline: Substraction of two number completed correctly
    Given I want perfrom mathematical operation with "<number1>"
    And I want perfrom mathematical operation with "<number2>"
    When i perform substraction
    Then substraction result displayed correctly

    Examples: 
      | number1 | number2 |
      |       2 |       3 |
      |       2 |       3 |

  @manish
  Scenario Outline: Addition of two number completed correctly
    Given I want perfrom mathematical operation with "<number1>"
    And I want perfrom mathematical operation with "<number2>"
    When i perform multiplication
    Then multiplication result displayed correctly

    Examples: 
      | number1 | number2 |
      |       2 |       3 |
      |       2 |       3 |
