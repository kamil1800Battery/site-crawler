const puppeteer = require('puppeteer');






exports.addSuperChargerToCart = async () => {
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: false,
        devtools : true,
        args: ['--ignore-certificate-errors']
    });
    const page = await browser.newPage();
    await page.goto('https://localhost:443');
    await page.setGeolocation({latitude: 59.95, longitude: 30.31667});
    // wait for modal overlay
    await page.waitForSelector(`body > div:nth-child(12) > div > div > div > div > div.place-selection.extended > div > span > input`).catch((err)=>{
        // there is no location modal 
        
    })
    // click modal overlay
  

    // enter dana point for location
    
    await page.type(`body > div:nth-child(12) > div > div > div > div > div.place-selection.extended > div > span > input`,'Dana Point',{delay: 100})

    // await page.waitForTimeout(3000)

    await page.keyboard.press('Enter')

    await page.waitForTimeout(5000)

    await page.type('#category-selection > div > div > input', 'edlebrock',{delay: 100})

    await page.waitForSelector(`#react-autowhatever-1-section-2-item-0`)
    await page.click(`#react-autowhatever-1-section-2-item-0`)

    // select instalation
    await page.waitForSelector('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.product-options-container > div:nth-child(2) > button')
    await page.click('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.product-options-container > div:nth-child(2) > button')

    // click buy now
    await page.click('#__next > div.theme-default > div.page.product > div.inner > div > div > div.col-xl-9 > div:nth-child(1) > div.col-lg-5.col-md-6.col-12.right-sidebar > div:nth-child(2) > div > div.add-to-cart-selector > div.add-to-cart-container > div > button.btn.cart')

    // click return to cart
    await page.waitForSelector(`#__next > div.theme-default > div:nth-child(2) > div > div > main > div > div > div.cart-content.hide-on-mobile > div > div.cart_orderSummaryContainer__3udGU > div.links > a.btn.return.mb-3`)
    await page.click(`#__next > div.theme-default > div:nth-child(2) > div > div > main > div > div > div.cart-content.hide-on-mobile > div > div.cart_orderSummaryContainer__3udGU > div.links > a.btn.return.mb-3`)

    // go to home page
    await page.waitForSelector(`#header-new > div > div > div.col.logo-col > div > div.with-menu-icon > a`)
    await page.click('#header-new > div > div > div.col.logo-col > div > div.with-menu-icon > a')
    browser.close()
}


 