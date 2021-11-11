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
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "addition result displayed correctly",
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
  "duration": 7482664300,
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
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom mathematical operation with \"3\"",
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
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 2454200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 540000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:45)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_addition(CalculatorSteps.java:36)\r\n\tat ✽.When i perform addition(src/test/java/com/calculator/tests/calculatorTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2697900,
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
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want perfrom mathematical operation with \"3\"",
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
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 404600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 54800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 175400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:45)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_addition(CalculatorSteps.java:36)\r\n\tat ✽.When i perform addition(src/test/java/com/calculator/tests/calculatorTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 27,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 28,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 29,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3"
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
  "duration": 624200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 345600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.getDisplayedNumber(CalculatorPage.java:77)\r\n\tat com.calculator.testSteps.CalculatorSteps.substraction_result_displayed_correctly(CalculatorSteps.java:66)\r\n\tat ✽.Then substraction result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:24)\r\n",
  "status": "failed"
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
  "duration": 660900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 86900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 242300,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.getDisplayedNumber(CalculatorPage.java:77)\r\n\tat com.calculator.testSteps.CalculatorSteps.substraction_result_displayed_correctly(CalculatorSteps.java:66)\r\n\tat ✽.Then substraction result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:24)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 39,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 40,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 41,
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
  "duration": 677400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 172000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.getDisplayedNumber(CalculatorPage.java:77)\r\n\tat com.calculator.testSteps.CalculatorSteps.multiplication_result_displayed_correctly(CalculatorSteps.java:77)\r\n\tat ✽.Then multiplication result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:36)\r\n",
  "status": "failed"
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
  "duration": 581400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@manish"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 612600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 180500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 744100,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.getDisplayedNumber(CalculatorPage.java:77)\r\n\tat com.calculator.testSteps.CalculatorSteps.multiplication_result_displayed_correctly(CalculatorSteps.java:77)\r\n\tat ✽.Then multiplication result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:36)\r\n",
  "status": "failed"
});
});