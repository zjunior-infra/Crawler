import { entryScrapping } from './scrappers/Linkedin/entryScrapper'
import { internScrapping } from './scrappers/Linkedin/internScrapper'
import { LinkedinScrapper } from './scrappers/Linkedin/linkedinScrapping'
import { IQuery } from './types/modules'
import { scrape } from './utils/pupt/scraper'
import { uuidJob } from './utils/pupt/uuid-wuzzuf'

const scrapper = process.argv.slice(2).toString()
switch (scrapper.toLowerCase()){
    case 'intern':
        (async ()=>{
                await internScrapping()
            })()
        break;
    case 'entry':
        (async ()=>{
            await entryScrapping()
        })()
        break;
    default:
        (async ()=>{
            await LinkedinScrapper()
        })()
}




// (async ()=>{
//     await LinkedinScrapper()
// })()

// console.log(searchQuery({search:'backend'}))
// scrape('front-end');
// scrape('backend')
// scrape()
