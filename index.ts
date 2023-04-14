import { createDeadline } from "./bin/manageData";
import { PushJobs } from "./utils/prisma";
import { StartPupt } from "./utils/pupt";

// import './Scrappers/linkedinScrapping'

console.log(process.env.DATABASE_URL)
PushJobs([
  {
    id: "2490000000",
    title: "Software Engineer",
    company: "Cairo",
    deadline: "2021-04-12",
    email: "",
    link: "https://www.linkedin.com/jobs/view/2490000000/?alternateChan",
    logo: "",
    skills: "",
    type: "",
  }
])


// StartPupt()
// PushJobs(Jobs)

// createDeadline('2023-04-12')
