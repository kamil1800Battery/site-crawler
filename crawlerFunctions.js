const puppeteer = require('puppeteer');






exports.addSuperChargerToCart = async () => {
    const browser = await puppeteer.launch({
        // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: false,
        devtools: true,
        args: ['--ignore-certificate-errors']
    });
    const page = await browser.newPage();

    page.setViewport({
        width: 768,
        height: 1024,
        deviceScaleFactor: 1,
    })

    await page.setGeolocation({ latitude: 33.795878099999996, longitude: -117.9134853 });
    await page.goto('https://localhost:443');

    // wait to click use my location
    await page.on('load')
    console.log(`PAGE LOADED`);
    // wait for background
    await page.waitForSelector('#__next > div.theme-default > div:nth-child(2) > div.home-categories-wrapper > div')
        .then(async () => {
            /*
                 clicked background to get rid of know your location
            */
            await page.click(`#__next > div.theme-default > div:nth-child(2) > div.home-categories-wrapper > div`).then(() => {
                console.log(`clicked button`);
            })
        })

    // input city name
    await page.type('#place-selection > div > div > div > span > input', "Anaheim", { delay: 100 })

    // press enter
    await page.keyboard.down('Enter');

    // search for audi a5
    await page.type('#category-selection > div > div > input', 'AUDI A5')

    // press enter
    await page.keyboard.down('Enter');


    // click model 
    await page.waitForSelector('#__next > div.theme-default > div.page.search > div > div > div.ais-Hits > ul > li:nth-child(8) > div > a').then(async () => {
        await page.click('#__next > div.theme-default > div.page.search > div > div > div.ais-Hits > ul > li:nth-child(8) > div > a')
    }).catch((err) => {
        console.log(`something went wrong clicking car model`);
    })


    // click engine model 
    await page.waitForSelector('#__next > div.theme-default > div.page.collection > div > div > div > div > div.visible > div > div > div > a').then(async () => {
        await page.click('#__next > div.theme-default > div.page.collection > div > div > div > div > div.visible > div > div > div > a')
    }).catch((err) => {
        console.log(`something went wrong getting engine model`);
    })


    // schedule install 
    await page.waitForSelector('#Mobile\ Delivery\ or\ Service\  > div.inner > div > div:nth-child(2) > div > div.available-services > div > div.add-to-cart-container > div.primary > button').then(async () => {
        await page.click('#Mobile\ Delivery\ or\ Service\  > div.inner > div > div:nth-child(2) > div > div.available-services > div > div.add-to-cart-container > div.primary > button')
    })

    // enter personal info
    await page.type('#guestFirstName', 'Kamil')

    await page.type('#guestLastName', "Aqil")

    await page.type('#guestEmail', 'kaqil91@gmail.com')

    await page.type('#undefinedPhone', '+17147878471')

    // click next 
    await page.waitForSelector('#next-button').then(async () => {
        await page.click('#next-button')
    }).catch((err) => {
        console.log(`SOMETHING WENT WRONG TRYING TO CLICK NEXT AFTER PERSONAL INFO`);
    })

}
 