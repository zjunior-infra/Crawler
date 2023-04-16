// export a function that will return the data
// import { Scraper } from 'linkedin-jobs-scraper/build/scraper/Scraper';
// import { managedata } from '../../bin/manageData';
import { exit } from 'process';
import { dataJob, type, types } from '../../types/modules';

import { entryScrapping } from './entryScrapper';
import { internScrapping } from './internScrapper';

export const queryTitle=[
    'front-end',
    // 'front end',
    // 'React',
    // 'Nodejs',
    // 'Software engineer',
    // 'backend',
    // 'back-end',
    // 'backend engineer',
    // 'full stack',
    // 'developer',
    // 'SW',
    // 'SDE',
    // 'SRE',
    // 'DevOps',
    // 'QA',
    // 'Testing',
    // 'Testing Engineer'
]
export const deafultScraperOptions = {
    headless: true,
    slowMo: 500,
    args: [
      "--lang=en-GB",
    ],
}
export const ScraperOptions = {
    locations: ["Egypt"],
    limit: 30,
    applyLink: true,
}

export async function LinkedinScrapper() {
  
  await Promise.all(
    [
      await entryScrapping(),
      await internScrapping(),
    ])
  
};