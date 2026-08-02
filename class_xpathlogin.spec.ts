import {test,expect} from '@playwright/test'

test('Learning xpath ',async({page})=>{

    await page.goto("https://login.salesforce.com/")
    // Relative Xpath : 
    //1) Attribute based xpath 
    await page.locator("//input[@type='email']").fill('dilipkumar.rajendran@testleaf.com')
    //2) Based on the contains filter match : 
    await page.locator("//input[contains(@id,'pass')]").fill('TestLeaf@2025')
    
    await page.locator(`//input[contains(@class,"button")]`).click()
    
    await page.waitForTimeout(10000)
    const pgTitle = await page.title()
    console.log(pgTitle)
})