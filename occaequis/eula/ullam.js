// Assuming 'driver' and 'webdriver' have been previously instantiated.
const { By, until } = webdriver;
const element = driver.wait(until.elementLocated(By.id('my-button')), 10000);
element.click();
