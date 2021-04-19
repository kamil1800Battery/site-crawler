const puppeteer = require('puppeteer');






exports.testCrawl = async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: false,
        devtools : true,
        args: ['--ignore-certificate-errors']
    });
    const page = await browser.newPage();
    await page.goto('https://localhost:443');

    // wait for modal overlay
    await page.waitForSelector(`body > div:nth-child(12) > div > div > div > div > div.place-selection.extended > div > span > input`).catch((err)=>{
        // there is no location modal 
        
    })
    // click modal overlay
  

    // enter dana point for location

    await page.type(`body > div:nth-child(12) > div > div > div > div > div.place-selection.extended > div > span > input`,'Dana Point',{delay: 100})

    await page.waitForTimeout(3000)

    await page.keyboard.press('Enter')

    await page.waitForTimeout(3000)

    await page.keyboard.press('Enter')

    await page.type('#category-selection > div > div > input', 'edlebrock',{delay: 100})

    await page.click(`#react-autowhatever-1-section-2-item-0`)

    // select instalation
    await page.waitForSelector('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.product-options-container > div:nth-child(2) > button')
    await page.click('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.product-options-container > div:nth-child(2) > button')

    // click buy now
    await page.click('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.add-to-cart-container > div > button.btn.cart')
    // browser.close()
}


 