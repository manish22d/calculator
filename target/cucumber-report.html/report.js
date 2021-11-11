$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/calculator/tests/calculatorTest.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator Functional Test",
  "description": "I want to perform mathematical operation on calculator",
  "id": "calculator-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want perfrom addition with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom addition with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 15,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 16,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 17,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 4772772200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want perfrom addition with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom addition with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 2472000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 1001800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 2169700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I want perfrom addition with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom addition with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 30
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 48600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
});