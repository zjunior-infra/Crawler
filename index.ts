import { LinkedinScrapper } from './scrappers/Linkedin/linkedinScrapping'
import { IQuery } from './types/modules'
import { scrape } from './utils/pupt/scraper'
import { searchQuery } from './utils/pupt/searchQuery'
import { uuidJob } from './utils/pupt/uuid-wuzzuf'

// (async ()=>{
//     await LinkedinScrapper()
// })()

// console.log(searchQuery({search:'backend'}))
scrape();
