import { Page } from "puppeteer";

export async function abortRequests(page:Page){
    await page.setRequestInterception(true);
    page.on('request', interceptRequest =>{
        if(
            interceptRequest.url().endsWith('alytics.js') ||
            interceptRequest.url().endsWith('gtm.js?id=GTM-T4Z552&l=myNewName') ||
            interceptRequest.url().endsWith('gpt.js')
        ) interceptRequest.abort()

        else interceptRequest.continue();
    })
}