import { IQuery } from "../../types/modules";
import { abortRequests } from "./abortRequests";
import { startBrowser } from "./browser";
import { SearchQuery, _filters, _url } from "./searchQuery";

export async function scrape(){
    const browser = await startBrowser()
    const page1 = await browser.newPage();
    const query:IQuery = {
        url:_url,
        filters:_filters,
        search:'Software engineer'
    } 
    const queryUrl = new SearchQuery(query); 
    await abortRequests(page1);
    await page1.goto(queryUrl.searchUrl);
    await page1.waitForSelector('.css-xh9ud');
    await page1.waitForNavigation()
    const totalJobs = await page1.$eval('.css-xkh9ud > strong')
    
    //this will be maintained and refactored 
    const jobs = await page1.$$eval('.css-1gatmva', (elements: any[]) => {
        return elements.map((element: { querySelector: (arg0: string) => { (): any; new(): any; textContent: string; href: any; src: any; }; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) => {
          const title = element.querySelector('.css-m604qf > a').textContent;
          const company = element.querySelector('.css-d7j1kk > a').textContent.trim();
          //@ts-ignore
          const skills = element.querySelectorAll('.css-5x9pm1').length
          //@ts-ignore  
          ? Array.from(element.querySelectorAll('.css-5x9pm1')).map((skill) => skill.textContent.trim())
            : null;
          const jobType = element.querySelector('.css-n2jc4m > span').textContent;
          const link = element.querySelector('.css-m604qf > a').href;
          const companyLogo = element.querySelector('.css-17095x3').src;
          return { title, company, skills, jobType, link, companyLogo };
        });
      });
      console.log(jobs);
      await page1.waitForTimeout(1000*5)
      const page2 = await browser.newPage();
      queryUrl.navigate(parseInt(totalJobs))
      await page2.goto(queryUrl.searchUrl);
      const jobss = await page2.$$eval('.css-1gatmva', (elements: any[]) => {
        return elements.map((element: { querySelector: (arg0: string) => { (): any; new(): any; textContent: string; href: any; src: any; }; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) => {
          const title = element.querySelector('.css-m604qf > a').textContent;
          const company = element.querySelector('.css-d7j1kk > a').textContent.trim();
          //@ts-ignore
          const skills = element.querySelectorAll('.css-5x9pm1').length
          //@ts-ignore  
          ? Array.from(element.querySelectorAll('.css-5x9pm1')).map((skill) => skill.textContent.trim())
            : null;
          const jobType = element.querySelector('.css-n2jc4m > span').textContent;
          const link = element.querySelector('.css-m604qf > a').href;
          const companyLogo = element.querySelector('.css-17095x3').src;
          return { title, company, skills, jobType, link, companyLogo };
        });
      });
      console.log(jobss);
    
      await browser.close();
}