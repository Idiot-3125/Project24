import {test,expect} from '@playwright/test'

test("Create a Lead ",async ({page})=>{

    await page.goto("https://login.salesforce.com ")
    //add user name
    await page.getByRole('textbox',{name:"Username"}).fill('dilipkumar.rajendran@testleaf.com')
    //add password
    await page.getByRole('textbox',{name:'Password'}).fill('TestLeaf@2025')
    //click login button
    await page.getByRole('button',{name:"Log In"}).click()

    //click on togal on left side
    await page.locator('.slds-icon-waffle').click()
    //click on View all 
    await page.getByRole('button',{name:"View All Applications"}).click()
    //click on Sales
    await page.getByTitle('Manage your sales process with accounts, leads, opportunities, and more').click()

    //click on Leads tab
    await page.getByRole('link',{name:"Leads"}).click()
    //click on New
    await page.locator("//button[@name='New']").click()
    //click on Salutation
    await page.getByRole('combobox',{name:"Salutation"}).click()
    //select Salutation  have doubt here not able to handel dropdown
    await page.locator("text=Mr.").click()
    //add last name
    await page.getByPlaceholder("Last Name").fill("RJ")
    //add Company
    await page.getByRole('textbox',{name:"Company"}).fill("XYZ")
    //click on save 
    await page.getByRole('button',{name:"Save",exact:true}).click()
    //to check the lead is created or not
    await expect( page.locator(`lightning-formatted-name[slot='primaryField']`)).toBeVisible()

})

test('Edit Lead',async ({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")

    //Enter the username
    await page.getByRole('textbox',{name:"Username"}).fill("democsr")
    //Enter the password
    await page.getByRole(`textbox`,{name:"Password"}).fill("crmsfa")
    //click login button
    await page.getByRole(`button`,{name:"Login"}).click()
    //click on CRM/SFA link
    await page.getByRole('link',{name:"CRM/SFA"}).click()
    //click on Create Lead tab/link
    await page.getByRole('link',{name:"Create Lead"}).click()
    //Enter the company name, first name and last name
    await page.locator('#createLeadForm_companyName').fill("testleaf")
    await page.locator('#createLeadForm_firstName').fill("ra")
    await page.locator('#createLeadForm_lastName').fill('jan')

    //Click on Create Lead button
    await page.locator('input[name="submitButton"]').click()

    //click on edit button
    await page.getByRole('link',{name:"Edit"}).click()

    //update company name
    await page.locator('#updateLeadForm_companyName').fill("RCB")

    //click on update
    await page.getByRole('button',{name:"Update"}).click()

})

test("Create Individuals in Salesforce",async({page})=>{
    await page.goto("https://login.salesforce.com")

    //add user name
    await page.getByRole('textbox',{name:"Username"}).fill('dilipkumar.rajendran@testleaf.com')
    //add password
    await page.getByRole('textbox',{name:'Password'}).fill('TestLeaf@2025')
    //click login button
    await page.getByRole('button',{name:"Log In"}).click()

    //click on togal on left side
    await page.locator('.slds-icon-waffle').click()
    //click on View all 
    await page.getByRole('button',{name:"View All Applications"}).click()
    //click on Individuals
    await page.locator("a[data-label='Individuals']").click()
    //click on New button
    await page.getByRole("button",{name:"New",exact:true}).click()
    //add last name
    await page.getByPlaceholder("Last Name").fill('RajRam')
    //click on save
    await page.getByRole("button",{name:"Save",exact:true}).click()
    //verify individuals name
    //await expect(page.locator(`div[tittle="RajRam"]`)).toBeVisible()

})

test("Edit Individuals",async({page})=>{

    await page.goto("https://login.salesforce.com ")
    //add user name
    await page.getByRole('textbox',{name:"Username"}).fill('dilipkumar.rajendran@testleaf.com')
    //add password
    await page.getByRole('textbox',{name:'Password'}).fill('TestLeaf@2025')
    //click login button
    await page.getByRole('button',{name:"Log In"}).click()

    //click on togal on left side
    await page.locator('.slds-icon-waffle').click()
    //click on View all 
    await page.getByRole('button',{name:"View All Applications"}).click()
    //click on Individuals
    await page.getByRole('link',{name:"Individuals"}).click()
    //click on Search for the Individuals last name
    await page.getByRole("searchbox",{name:"Search this list..."}).fill("RajRam")
    await page.getByRole("searchbox",{name:"Search this list..."}).press("Enter")
    //Click on the Dropdown icon and Select Edit 
    await page.getByRole('button',{name:"Show Actions"}).first().click()
    //await page.locator(`a[title='Show 2 more actions']`).click() 
    await page.locator("a[title='Edit']").click()
    //Select Salutation as 'Mr'
    await page.getByRole('button',{name:'Salutation --None--'}).click()
    await page.locator('text=Mr.').click()
    //Now enter the first name 
    await page.getByPlaceholder('First Name').fill("Ravi")
    //save the changes
    await page.getByRole('button',{name:'Save',exact:true}).click()
    //Verify the first name  ask how exactly very we can verify
    await expect(page.getByTitle("Ravi RajRam")).toBeVisible()
})