import { limit, locations, titles } from '../../utils/options';
import { entryScrapping } from './entryScrapper';
import { internScrapping } from './internScrapper';

export const queryTitle= titles ?? [
  'front-end',
  'front end',
  'React',
  'Nodejs',
  'Software engineer',
  'backend',
  'back-end',
  'backend engineer',
  'full stack',
  'developer',
  'SW',
  'SDE',
  'SRE',
  'DevOps',
  'QA',
  'Testing',
  'Testing Engineer',
  'UI/UX',
  'Product designer',
  'designer'
]
export const deafultScraperOptions = {
    headless: true,
    slowMo: 500,
    args: [
      "--lang=en-GB",
    ],
}
export const ScraperOptions = {
    locations: locations ?? ["Egypt","Cairo","EMEA","MENA"],
    limit: limit ?? 25,
    applyLink: true,
}

export async function LinkedinScrapper() {
  
  await Promise.all(
    [
      await entryScrapping(),
      await internScrapping(),
    ])
  
};