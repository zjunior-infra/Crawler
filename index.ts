import { LinkedinScrapper } from './scrappers/Linkedin/linkedinScrapping'
import { IQuery } from './types/modules'
import { scrape } from './utils/pupt/scraper'
import { uuidJob } from './utils/pupt/uuid-wuzzuf'

(async ()=>{
    await LinkedinScrapper()
})()

// console.log(searchQuery({search:'backend'}))
// scrape('front-end');
// scrape('backend')
// scrape()
