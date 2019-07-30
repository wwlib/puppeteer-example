// const fs = require('fs');
const puppeteer = require('puppeteer');

async function doIt() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulateMedia('screen');
    // await page.goto('https://www.google.com', {
    //     timeout: 30 * 1000,
    //     waitUntil: 'networkidle0'
    // });

    const content = `
<div>Hello, world!</div>
`

    await page.setContent(content, {
        timeout: 30 * 1000,
        waitUntil: 'networkidle0'
    });

    const pdfOptions = {
        path: 'page.pdf',
    }
    await page.pdf(pdfOptions);

    const screenshotOptions = {
        path: 'page.png',
        type: 'png'
    }
    await page.screenshot(screenshotOptions);

    // fs.writeFileSync('test.pdf', pdf);
    console.log('done');
}

doIt()
    .then(() => {
        console.log('done-done.');
        process.exit()
    })
    .catch((e) => {
        console.log(e)
        process.exit()
    })

//return page;