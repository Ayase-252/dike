const puppeteer = require("puppeteer");

async function openPage(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    " Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36"
  );
  return page;
}

(async function main() {
  const page = await openPage("https://accounts.google.com/ServiceLogin");
  const emailInput = await page.waitForSelector("input[type=email]");
  const button = await page.waitForSelector("#identifierNext > div > button");
  await button.click();
})();
