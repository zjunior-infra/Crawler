import moment from 'moment';
import type { Job, dataJob } from '../types/modules'
import { PushJobs } from '../utils/prisma';
export class managedata {
    data: Job[] = [];
    constructor(dataJobs: dataJob[]) {
        this.datatoJobType(dataJobs)
        this.PushtoDB();
        
    }
    async PushtoDB() {
        //this will remove duplicates by the id 
        const results = await PushJobs(this.data);
        console.log(results)
    }
    datatoJobType(data: dataJob[]) {
        console.log(`Converting ${data.length} Job`)
        data.forEach(job => {
            job.deadline = createDeadline(job.deadline);
            this.data.push({ ...job, email: "" })
        })
        console.log("Done !")
        
    }
}
export function createDeadline(date: string): string {
    const d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    d.setHours(d.getHours() + 24 * 10)
    return moment(d).format("YYYY-MM-DD");
}


// he will send array 