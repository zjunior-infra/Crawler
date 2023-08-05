import { LinkedinScraper, events, experienceLevelFilter, onSiteOrRemoteFilter, typeFilter } from "linkedin-jobs-scraper";
import { dataJob } from "../../types/modules";
import { managedata } from "../../bin/manageData";
import { deafultScraperOptions, ScraperOptions, queryTitle } from "./linkedinScrapping";
import { CrawledOpportunity, opportunityType } from "@prisma/client";
import { PushJobs } from "../../utils/prisma";



const jobs:CrawledOpportunity[] = [];


export async function internScrapping(){
    const intern = new LinkedinScraper(deafultScraperOptions);
    const options = ScraperOptions
    
      const filters = {
        type: [typeFilter.FULL_TIME, typeFilter.CONTRACT, typeFilter.INTERNSHIP, typeFilter.PART_TIME],
        onSiteOrRemote: [onSiteOrRemoteFilter.REMOTE, onSiteOrRemoteFilter.HYBRID, onSiteOrRemoteFilter.ON_SITE], // This will override global options [onSiteOrRemoteFilter.ON_SITE],
        // experience: [experienceLevelFilter.INTERNSHIP, experienceLevelFilter.ENTRY_LEVEL],
      }
    
      const queries = queryTitle.map((q) => {
        return (
          {
            query: q,
            options: {
              ...options,
              filters: {
                ...filters,
                experience: [experienceLevelFilter.INTERNSHIP],
              }
            }
          }
        )
      })

    
      intern.on(events.scraper.data, (data) => {
        jobs.push({
          id: data.jobId,
          title: data.title,
          company: data.company,
          link: data.applyLink ?? data.link,
          logo: data.companyImgLink ?? '',
          description: data.description,
          skills: '',
          type: opportunityType.Internship,
        });
      });

    //   intern.on(events.scraper.metrics, (metrics) => {
    //     console.log(`Processed=${metrics.processed}`, `Failed=${metrics.failed}`, `Missed=${metrics.missed}`);
    //   });
    
    //   intern.on(events.scraper.error, (err) => {
    //     console.error(err);
    //   });
    
      intern.on(events.scraper.end, async () => {
        console.log('Internship has been done!');
        console.log(await PushJobs(jobs))
      });
    
      // Run queries concurrently    
      await Promise.all([
        intern.run(queries),
      ])
      // Close browser
      await intern.close();
}