$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/calculator/tests/calculatorTest.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator Functional Test",
  "description": "I want to perform mathematical operation on calculator",
  "id": "calculator-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 14,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 15,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 16,
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
  "duration": 3763473300,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NQ28SJGQ\u0027, ip: \u0027172.27.96.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: C:\\Users\\mrman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64190}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6eba5dc5e322bd834f917f267855c2b4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy20.get(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.get(EventFiringWebDriver.java:165)\r\n\tat com.calculator.testBase.TestBase.initialization(TestBase.java:87)\r\n\tat com.calculator.testSteps.CalculatorSteps.calculator_app_is_up_and_running(CalculatorSteps.java:24)\r\n\tat ✽.Given calculator app is up and running(src/test/java/com/calculator/tests/calculatorTest.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1011300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
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
  "duration": 3994900,
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
  "duration": 138600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 2799200,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_addition(CalculatorSteps.java:35)\r\n\tat ✽.When i perform addition(src/test/java/com/calculator/tests/calculatorTest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"\u003cnumber3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2",
        "number3"
      ],
      "line": 26,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "23"
      ],
      "line": 27,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3",
        "34"
      ],
      "line": 28,
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
  "duration": 648400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 23,
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
  "duration": 171700,
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
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 212500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 244600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_substraction(CalculatorSteps.java:45)\r\n\tat ✽.When i perform substraction(src/test/java/com/calculator/tests/calculatorTest.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
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
  "duration": 988900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"34\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 23,
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
  "duration": 147000,
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
  "duration": 88500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 191100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 380400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_substraction(CalculatorSteps.java:45)\r\n\tat ✽.When i perform substraction(src/test/java/com/calculator/tests/calculatorTest.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 37,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 38,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 39,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3"
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
  "duration": 504800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 97100,
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
  "duration": 160700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 467200,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_multiplication(CalculatorSteps.java:63)\r\n\tat ✽.When i perform multiplication(src/test/java/com/calculator/tests/calculatorTest.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
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
  "duration": 1017400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 34,
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
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 312800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_multiplication(CalculatorSteps.java:63)\r\n\tat ✽.When i perform multiplication(src/test/java/com/calculator/tests/calculatorTest.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 48,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 49,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 50,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3"
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
  "duration": 733500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 45,
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
  "duration": 58300,
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
  "duration": 96200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 517000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_division(CalculatorSteps.java:54)\r\n\tat ✽.When i perform division(src/test/java/com/calculator/tests/calculatorTest.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
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
  "duration": 1042500,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 45,
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
  "duration": 69100,
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
  "duration": 528500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 1620600,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_division(CalculatorSteps.java:54)\r\n\tat ✽.When i perform division(src/test/java/com/calculator/tests/calculatorTest.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "verify \"Error\" displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 59,
      "id": "calculator-functional-test;division-of-number-by-zero;;1"
    },
    {
      "cells": [
        "5",
        "0"
      ],
      "line": 60,
      "id": "calculator-functional-test;division-of-number-by-zero;;2"
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
  "duration": 928900,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I want perfrom mathematical operation with \"5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I want perfrom mathematical operation with \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "verify \"Error\" displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 442500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 172900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 672700,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat com.sun.proxy.$Proxy18.size(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.lambda$1(CalculatorPage.java:52)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.IntPipeline$4$1.accept(Unknown Source)\r\n\tat java.lang.CharSequence$1CharIterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IntIteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterator$OfInt.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat com.calculator.pages.CalculatorPage.selectANumber(CalculatorPage.java:49)\r\n\tat com.calculator.testSteps.CalculatorSteps.i_perform_division(CalculatorSteps.java:54)\r\n\tat ✽.When i perform division(src/test/java/com/calculator/tests/calculatorTest.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error",
      "offset": 8
    }
  ],
  "location": "CalculatorSteps.verify_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
});