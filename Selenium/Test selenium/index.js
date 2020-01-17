const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("localhost:3000");
    driver.findElement(By.id("mail")).sendKeys("ha_boudjelli@esi.dz");
    driver.sleep(3000);
    driver.findElement(By.id("mdp")).sendKeys("bellman");
    driver.sleep(3000);
    driver.findElement(By.id("se-connecter")).click();

}
example();