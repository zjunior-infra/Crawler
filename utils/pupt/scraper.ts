import { startBrowser } from "./browser";
import { searchQuery } from "./searchQuery";

export async function scrape(){
    const browser = await startBrowser()
    const page = await browser.newPage();
    await page.goto(searchQuery({search:'front end'}))
    const jobs = await page.$$eval('.css-1gatmva', (elements: any[]) => {
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
    
      await browser.close();
}