import { CrawledJob, PrismaClient } from '@prisma/client'
import { Job } from '../types/types'
const prisma = new PrismaClient()

export async function PushJobs(Jobs:Job[]) {
    try{
        const jobs= await prisma.crawledJob.createMany({
            data:[
                ...Jobs
            ]
        }
        )
    }
    catch (err:any){
        console.error(err.message, err)
    }
    
}
