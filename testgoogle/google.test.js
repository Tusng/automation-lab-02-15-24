const { Builder, Capabilities, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  // TODO: Navigate to google.com
  driver = new Builder().withCapabilities(Capabilities.chrome()).build();
  await driver.get("https://www.google.com");
});

afterEach(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name("q")).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test

  // TODO Search for something in Google and wait for the page to load
  await driver.findElement(By.name("q")).sendKeys("flowers", Key.RETURN);

  await driver.wait(until.titleIs("flowers - Google Search"), 1000);
  // TODO Call .clear() on the search bar element to clear the old search term
  await driver.findElement(By.name("q")).clear();
  // TODO Call .sendKeys() on the search bar element to search for a new term
  await driver.findElement(By.name("q")).sendKeys("mountains", Key.RETURN);
  // TODO Wait for the results page to load
  await driver.wait(until.titleIs("mountains - Google Search"), 1000);
});
