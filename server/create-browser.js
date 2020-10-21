const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");

(async () => {
  puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
  puppeteer.use(StealthPlugin());
  puppeteer.use(require("puppeteer-extra-plugin-anonymize-ua")());
  puppeteer.use(
    require("puppeteer-extra-plugin-user-preferences")({
      userPrefs: {
        webkit: {
          webprefs: {
            default_font_size: 16,
          },
        },
      },
    })
  );

  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
  });
  console.log(browser.wsEndpoint());
})().catch((error) => {
  console.error(error.message);
});
