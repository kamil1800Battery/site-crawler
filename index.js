const puppeteer = require('puppeteer');



  

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
    headless: false,
    args: [ '--ignore-certificate-errors' ]
  });
  const page = await browser.newPage();
  await page.goto('https://localhost:443');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();