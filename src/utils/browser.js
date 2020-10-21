import puppeteer from "puppeteer-core";

export async function openPage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await browser.close();
}
