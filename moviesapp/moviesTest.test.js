const { Builder, Capabilities, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach( async () => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get("http://localhost:3000/");
})

afterEach(async () => {
    await driver.quit();
})

describe("Test Movie List", () => {
    let message;
    test("Add a watched movie back", async () => {
        // TODO: navigate to the search bar and add a movie
        await driver.findElement(By.name("movieTitle")).sendKeys("One Day", Key.RETURN);
        // TODO: check the box for watched movie and wait for the message to disappear
        await driver.findElement(By.id("movie-0")).click();
        message = await driver.findElement(By.id("message"));
        await driver.wait(until.elementIsNotVisible(message), 1000);

        // TODO: uncheck the box to add the movie back and wait for the message to disappear
        await driver.findElement(By.id("movie-0")).click();
        message = await driver.findElement(By.id("message"));
        await driver.wait(until.elementIsNotVisible(message), 1000);

        // TODO: delete a movie
        await driver.findElement(By.className("delete-btn")).click();
        message = await driver.findElement(By.id("message"));
        await driver.wait(until.elementIsNotVisible(message), 2000);
    });

    // test("Delete a movie", async () => {
    //     await driver.findElement(By.className("delete-btn")).click();
    //     message = await driver.findElement(By.id("message"));
    //     await driver.wait(until.elementIsNotVisible(message), 2000);
    // });
})
