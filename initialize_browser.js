const puppeteer = require('puppeteer')
const DEFAULT_PUPETEER_SETTINGS = {
  headless: process.env.DISABLE_HEADLESS ? false : true,
  devtools: process.env.DISABLE_HEADLESS ? true : false,
  slowMo: process.env.DISABLE_HEADLESS ? 50 : false,
  args: ['--disable-dev-shm-usage', `--window-size=1920,1080`]
}

module.exports = () => {
  return puppeteer.launch(DEFAULT_PUPETEER_SETTINGS)
}
