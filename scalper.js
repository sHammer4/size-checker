const { By, until } = require("selenium-webdriver");

let tryAgainCount = 1;
let checkCounts = 0;

const wantedSize = "11";

const checkSizes = async (driver) => {
  try {
    checkCounts++;
    console.log("Attempt #" + checkCounts);
    const sizeButtons = await driver.wait(
      until.elementsLocated(By.className("gl-label size___2lbev"))
    );

    let correctSize;
    for (const button of sizeButtons) {
      const text = await button.findElement(By.css("span")).getText();
      if (text === wantedSize) {
        correctSize = button;
        break;
      }
    }
    if (!correctSize) {
      console.log("Button doesn't exist");
      return false;
    }

    const buttonClasses = await correctSize.getAttribute("class");
    if (buttonClasses.includes("size-selector__size--unavailable___1EibR")) {
      console.log("Size unavailable");
      await driver.navigate().refresh();
      await verifyPage(driver);
      await refresh(driver);
    } else {
      return true;
    }
  } catch (e) {
    console.log("error", e);
    if (tryAgainCount === 3) {
      console.log("Cannot find element. Stopping attempts");
    } else {
      console.log("Cannot find element, attempt #" + tryAgainCount);
      tryAgainCount++;
      await refresh(driver);
    }
  }
};

const refresh = async (driver) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await checkSizes(driver);
};

const verifyPage = async (driver) => {
  const currentUrl = await driver.getCurrentUrl();
  if (
    currentUrl !== "https://www.adidas.ca/en/ultra-4d-marvel-shoes/IG5337.html"
  ) {
    await driver.get(
      "https://www.adidas.ca/en/ultra-4d-marvel-shoes/IG5337.html"
    );
  }
};

module.exports = {
  checkSizes,
};
