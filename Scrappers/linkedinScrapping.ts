// export a function that will return the data
import { managedata } from '../bin/manageData';
import { dataJob } from '../types/types';

import {
  LinkedinScraper,
  timeFilter,
  typeFilter,
  experienceLevelFilter,
  onSiteOrRemoteFilter,
  events,
} from 'linkedin-jobs-scraper';

const jobs: dataJob[] = [];


(async () => {
  // Each scraper instance is associated with one browser.
  // Concurrent queries will run on different pages within the same browser instance.
  const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 200,
    args: [
      "--lang=en-GB",
    ],
  });

  const query: string = process.env.query as string;
  const queryArr = query.split(',');
  const options = {
    locations: ["Egypt"], // This will override global options ["Europe"]
    limit: 2,
    applyLink: true,
  }

  const filters = {
    type: [typeFilter.FULL_TIME, typeFilter.CONTRACT, typeFilter.INTERNSHIP, typeFilter.PART_TIME],
    onSiteOrRemote: [onSiteOrRemoteFilter.REMOTE, onSiteOrRemoteFilter.HYBRID, onSiteOrRemoteFilter.ON_SITE], // This will override global options [onSiteOrRemoteFilter.ON_SITE],
    // experience: [experienceLevelFilter.INTERNSHIP, experienceLevelFilter.ENTRY_LEVEL],
  }

  const scrappers = queryArr.map((q) => {
    return [
      {
        query: q,
        options: {
          ...options,
          filters: {
            ...filters,
            experience: [experienceLevelFilter.INTERNSHIP],
          }
        }
      },
      {
        query: q,
        options: {
          ...options,
          filters: {
            ...filters,
            experience: [experienceLevelFilter.ENTRY_LEVEL],
          }
        }
      }
    ]
  })
  console.log(scrappers.flat())
  // Add listeners for scraper events

  // Emitted once for each processed job

  scraper.on(events.scraper.data, (data) => {
    jobs.push({
      id: data.jobId,
      title: data.title,
      company: data.company,
      link: data.applyLink ? data.applyLink : data.link,
      logo: data.companyImgLink || '',
      deadline: data.date,
      skills: '',
      type: '',
    });
    // console.log(
    //   data.description.length,
    //   data.descriptionHTML.length,
    //   `Query='${data.query}'`,
    //   `Location='${data.location}'`,
    //   `Id='${data.jobId}'`,
    //   `Title='${data.title}'`,
    //   `Company='${data.company ? data.company : "N/A"}'`,
    //   `CompanyLink='${data.companyLink ? data.companyLink : "N/A"}'`,
    //   `CompanyImgLink='${data.companyImgLink ? data.companyImgLink : "N/A"}'`,
    //   `Place='${data.place}'`,
    //   `Date='${data.date}'`,
    //   `Link='${data.link}'`,
    //   `applyLink='${data.applyLink ? data.applyLink : "N/A"}'`,
    //   `insights='${data.insights}'`,
    // );
  });

  // Emitted once for each scraped page
  // scraper.on(events.scraper.metrics, (metrics) => {
  //   // console.log(`Processed=${metrics.processed}`, `Failed=${metrics.failed}`, `Missed=${metrics.missed}`);
  // });

  // scraper.on(events.scraper.error, (err) => {
  //   // console.error(err);
  // });

  scraper.on(events.scraper.end, () => {
    console.log('All done!');
    console.log(jobs);
    const sendToDB = new managedata(jobs)
  });

  // Run queries concurrently    
  await Promise.all(
    // Run queries serially
    [
      scraper.run(scrappers.flat()),
    ])

  // Close browser
  await scraper.close();
})();