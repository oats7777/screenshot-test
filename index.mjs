import puppeteer from 'puppeteer';

async function takeScreenshot(url) {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(url);

    const screenshotPath = `screenshot_${
      new Date()
        .toISOString()
        .replace(/[:\-T]/g, '')
        .split('.')[0]
    }.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved ${screenshotPath}`);

    await browser.close();
  } catch (error) {
    console.error(error.message);
  }
}

const url =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%8A%A4%ED%91%BC%EB%9D%BC%EB%94%94%EC%98%A4';

setInterval(() => {
  takeScreenshot(url);
}, 1000);
