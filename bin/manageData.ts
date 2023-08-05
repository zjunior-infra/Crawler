import { CrawledOpportunity } from '@prisma/client';
import type { Job, dataJob } from '../types/modules'
import { PushJobs } from '../utils/prisma';
export class managedata {
    data: CrawledOpportunity[] = [];
    constructor(dataJobs: CrawledOpportunity[]) {
        this.PushtoDB();
    }
    async PushtoDB() {
        const results = await PushJobs(this.data);
        console.log(results)
    }
}

