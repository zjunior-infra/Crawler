// export a function that will return the data
import {
  LinkedinScraper,
  relevanceFilter,
  timeFilter,
  typeFilter,
  experienceLevelFilter,
  onSiteOrRemoteFilter,
  events,
} from 'linkedin-jobs-scraper';


const jobs: any = [];

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

  // Add listeners for scraper events

  // Emitted once for each processed job
  scraper.on(events.scraper.data, (data) => {
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
  });

  // Run queries concurrently    
  await Promise.all([
    // Run queries serially
    scraper.run([
      {
        query: "Frontend",
        options: {
          locations: ["Egypt"], // This will override global options ["Europe"]
          filters: {
            type: [typeFilter.FULL_TIME, typeFilter.CONTRACT, typeFilter.INTERNSHIP, typeFilter.PART_TIME],
            onSiteOrRemote: [onSiteOrRemoteFilter.REMOTE, onSiteOrRemoteFilter.HYBRID, onSiteOrRemoteFilter.ON_SITE], // This will override global options [onSiteOrRemoteFilter.ON_SITE],
            experience: [experienceLevelFilter.INTERNSHIP, experienceLevelFilter.ENTRY_LEVEL],
          },
          limit: 2,
          applyLink: true,
        }
      },
    ]),
  ]);

  // Close browser
  await scraper.close();
})();