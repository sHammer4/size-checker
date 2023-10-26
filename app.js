const { Builder } = require("selenium-webdriver");
const { checkSizes } = require("./scalper");
const { notifyMyself } = require("./emailManager");

const main = async () => {
  let driver;
  try {
    driver = new Builder().forBrowser("chrome").build();

    await driver.get(
      "https://www.adidas.ca/en/ultra-4d-marvel-shoes/IG5337.html"
    );
    const sizeFound = await checkSizes(driver);
    console.log("Found", sizeFound);
    // if (sizeFound) {
    //   notifyMyself();
    // }
  } catch (e) {
    console.log("error main: ", e);
  } finally {
    await driver.quit();
    console.log("driver quit");
  }
};

main();
