package com.calculator.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class CalculatorPage  {
    WebDriver driver;
    WebDriverWait wait;
    @FindBy(id = "add")
    WebElement add;
    @FindBy(id = "subtract")
    WebElement subtract;
    @FindBy(id = "multiply")
    WebElement multiply;
    @FindBy(id = "divide")
    WebElement divide;
    @FindBy(id = "result")
    WebElement display;
    @FindBy(id = "equals")
    WebElement equals;
    @FindBy(id = "clear")
    WebElement clear;
    @FindBy(xpath = "//input[@class='input']")
    List<WebElement> allNums;

    public CalculatorPage() {
    }

    public CalculatorPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver, this);
    }

    public void selectANumber(String selectNum) {
        selectNum.chars().mapToObj(c -> (char) c).forEach(number -> {
            for (WebElement allNum : allNums)
                if (allNum.getAttribute("value").trim().charAt(0) == number)
                    allNum.click();
        });
    }

    public void clickEqual() {
        equals.click();
    }

    public void clickAdd() {
        add.click();
    }

    public void clickSubtract() {
        subtract.click();
    }

    public void clickDivision() {
        divide.click();
    }

    public void clickMultiplication() {
        multiply.click();
    }

    public String getDisplayedNumber() {
        return display.getAttribute("value");
    }

    public String getDisplayedError() {
        return display.getAttribute("value");
    }

    public void clearScreen() {
        clear.click();
    }
}
