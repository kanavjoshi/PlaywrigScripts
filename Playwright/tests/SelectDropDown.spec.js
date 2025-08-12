import { test, expect } from '@playwright/test';
test("Open google.com and click on Gmail button", async({page})=>{

    await page.goto("https://www.amazon.com")

    
    await page.waitForTimeout(8)

    await page.locator("span.redir-overlay-close").click() 

    await page.locator("#searchDropdownBox").selectOption({label:'Digital Music'})

   const dropdownoptioncount =  await page.$$("#searchDropdownBox option")

   console.log(dropdownoptioncount.length)


   const dropdownprint = await  page.locator("#searchDropdownBox").textContent()

   console.log(dropdownprint)
    await page.pause()
})

