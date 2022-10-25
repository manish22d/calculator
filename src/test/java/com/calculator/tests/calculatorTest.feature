
Feature: Calculator Functional Test
  I want to perform mathematical operation on calculator

  Background:
    Given calculator app is up and running


  Scenario Outline: Addition of two number completed correctly
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    When i perform addition
    Then addition result displayed correctly

    Examples:
      | number1 | number2 |
      | 99      | 103     |
      | 2       | 3       |

  Scenario Outline: subtraction of two number completed correctly
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    And I want perform mathematical operation with "<number3>"
    When i perform subtraction
    Then subtraction result displayed correctly

    Examples:
      | number1 | number2 | number3 |
      | 2       | 3       | 23      |
      | 2       | 3       | 34      |

  Scenario Outline: multiplication of two number completed correctly
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    When i perform multiplication
    Then multiplication result displayed correctly

    Examples:
      | number1 | number2 |
      | 2       | 3       |
      | 2       | 3       |

  Scenario Outline: division of two number completed correctly
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    When i perform division
    Then division result displayed correctly

    Examples:
      | number1 | number2 |
      | 10      | 5       |
      | 2       | 3       |

  Scenario Outline: division of number By zero
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    When i perform division
    Then verify "OUTPUT OUT OF LIMIT" displayed

    Examples:
      | number1 | number2 |
      | 5       | 0       |

@test
  Scenario Outline: output out of range
    Given I want perform mathematical operation with "<number1>"
    And I want perform mathematical operation with "<number2>"
    When i perform addition
    Then verify "OUTPUT OUT OF LIMIT" displayed

    Examples:
      | number1 | number2 |
      | 5000   | 5000   |
