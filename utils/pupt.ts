import puppeteer from "puppeteer";

export async function StartPupt(Link:URL = new URL('https://www.npmjs.com/package/linkedin-jobs-scraper')) {
    const browser = await puppeteer.launch({
        headless:true,
    });
    const page = await browser.newPage();
    await page.goto(Link.href);
    const packageTitle = await page.waitForSelector('span > ._50685029')
    console.log(packageTitle)
    await browser.close()
}