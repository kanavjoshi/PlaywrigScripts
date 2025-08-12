import { test, expect } from '@playwright/test';
test("Open google.com and click on Gmail button", async({page})=>{

    await page.goto("https://www.amazon.com")
    await page.locator('textarea[title="Search"]').fill("Testing")

  //  await page.getByText("Gmail").click()

  await page.getByText("Store").click()

    await page.pause()

   // await page.getByText("Sign in").click();

    await page.pause();
})

