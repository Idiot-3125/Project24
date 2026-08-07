import {chromium, firefox, test} from "@playwright/test";

test("To check Title and URL of Red Bus",async ()=>{
    //craete a browswr instance
    const browser = await chromium.launch({channel:'msedge'})
    //create a browser context
    const context1 = await browser.newContext()
    //create a page
    const page = await context1.newPage()

    //open the URL
    await page.goto("https://www.redbus.in/")

    const PGTTL = await page.title()
    const PGURL = page.url()

    console.log(`The Title of the page is : ${PGTTL} and URL of the Page is : ${PGURL}`)

})

test("To check the Title and URL of Flipkart ",async ()=>{

    const browser=await firefox.launch()
    const context2= await browser.newContext()
    const page=await context2.newPage()

    await page.goto("https://www.flipkart.com/")

    const PGTTL1=await page.title()
    const PGURL1= page.url()

    console.log("The Title of the Page is : ",PGTTL1+" and URL of the Page is : ",PGURL1)
})