import {test, chromium } from "@playwright/test"

test("Login to Salseforce ",async()=>{
    const browser = await chromium.launch({channel:"chrome",headless:false})
    const context = await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://login.salesforce.com/")

    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(`#password`).fill("TestLeaf@2025")
    Locator : page.getByRole("button",{name : "Log In"}).click()
    //await page.locator("#Login").click()
    await page.waitForTimeout(5000)

    const titleOfPg = await page.title()
    const PgURL = page.url()
    console.log(`Successfully login to the application with URL :${PgURL} and page Title is:${titleOfPg}.`)
})