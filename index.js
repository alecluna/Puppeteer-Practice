const initializeBrowser = require("./initialize_browser");

(async () => {
  let browser, page;
  let url = "https://google.com";

  browser = await initializeBrowser();
  page = await browser.newPage();
  await page.goto(url);

  const loginButton = await page.$(
    "#viewport"
    //"#content > div > div > div.l-front-hero.l-inner-fullwidth > div > div > div.frontHero__signin > button.g-opacity-transition.frontHero__loginButton.g-button-transparent-inverted.sc-button.sc-button-medium.loginButton"
  );
  const signIn = await page.$eval(loginButton, el => el.textContent);
  console.log(signIn);
  await browser.close();
})();
